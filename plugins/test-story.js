const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const { igstory } = require('../igst.js')
const { errorMessage, infoMessage } = require('../hp');
const axios = require('axios');
const fetch = require('node-fetch');
const qs = require("qs");
const fs = require('fs');
const gis = require('g-i-s');
const got = require("got");

let wk = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'story ?(.*)', fromMe: wk, desc: "Download from Instagram"}, async (message, match) => {
  try{
    if (!query[1]) return await message.sendMessage("Enter a link");
    await message.sendMessage("Searching...")

    res = await igstory(query[1])
    ytm = res.result
    const profileBuffer = await axios.get(`${ytm.username}`, {responseType: 'arraybuffer'})
    const msg = `${ytm.username}`
     if (msg.includes('.mp4')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: "_*🐱W5-BOT🤖*_", quoted: message.data })}
     if (msg.includes('.jpg')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: "_*🐱W5-BOT🤖*_", quoted: message.data })}
  } catch {
     await message.sendMessage("error")
  }
});