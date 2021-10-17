let Asena = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

   Asena.addCommand({pattern: 'pdf ?(.*)', fromMe: false, desc: 'Converts site to PDF.' }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '*You must send a link!*', MessageType.text);

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=Y1ZbfT8mS5CCSqKmw92iAuUhyuqD1ohz9AKtxbLNEY4hC2B4G2lVbNVPH6ljVDro`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, '```Converting Site to PDF```', MessageType.text);

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, quoted: message.data, filename: 'W5-BOT.pdf'});

    }));    
