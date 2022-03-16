const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const { igDownloader } = require("w5-textmaker");
const w5botapi = require('w5-textmaker');
const { errorMessage, infoMessage } = require('../hp');
const axios = require('axios');
const fs = require('fs');
const gis = require('g-i-s');
const got = require("got");

let wk = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'tsig ?(.*)', fromMe: wk, desc: "Download from Instagram"}, async (message, match) => {
  try{
    if (!match[1]) return await message.sendMessage("Enter a link");
    await message.sendMessage("Searching...")

    res = await igDownloader(match[1])
    ytm = res.result
    const profileBuffer = await axios.get(`${ytm.link}`, {responseType: 'arraybuffer'})
    const msg = `${ytm.link}`
     if (msg.includes('.mp4')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: "_*🐱W5-BOT🤖*_", quoted: message.data })}
     if (msg.includes('.jpg')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: "_*🐱W5-BOT🤖*_", quoted: message.data })}
  } catch {
     await message.sendMessage("error")
  }
});
