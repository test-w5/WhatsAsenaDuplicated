const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../hp');
const Config = require('../config');
const Language = require('../language');
const MMM = "Mediafire Download List."
const M_NEED = "⛔ Need mediafire Link"
const M_D = "*📥...Downloading*"
const M_UP = "*Uploading...📁*"
const NO_RESULT = "*⁉️ can't Find Anything...*"
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'mediafire', fromMe: wk, desc: MMM}, (async (message, match) => {
  await message.sendMessage('*╭─「 W5-BOT MEDIAFIRE DOWNLOADER 」*\n│ ╰────\n╭─「 COMMANDS」\n│ \n│ • afire <your mediafire APK Link >\n│ • pfire <your mediafire PDF link>\n「 _*🐱W5-BOT🤖*_ 」');
  
}));

 Asena.addCommand({ pattern: 'pfire ?(.*)', fromMe: wk, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,M_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,M_D,MessageType.text);
        await axios
          .get(`https://yuzzu-api.herokuapp.com/api/mediafire?link=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const abdu = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,M_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(abdu.data), MessageType.document, {mimetype: Mimetype.pdf, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )


Asena.addCommand({ pattern: 'afire ?(.*)', fromMe: wk, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,M_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,M_D,MessageType.text);
        await axios
          .get(`https://yuzzu-api.herokuapp.com/api/mediafire?link=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const abdu = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,M_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(abdu.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
