const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "Emoji to Emoji Png Picture"
const iii = "Only work with emoji"
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*🐱W5-BOT🤖*'})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*🐱W5-BOT🤖*'})

    }));
    
    Asena.addCommand({pattern: 'emomix ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if(!match) return await message.sendMessage(iii);

        var webimage = await axios.get(`https://early-pie-production.up.railway.app/emomix?q=${encodeURIComponent(match)}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.sticker, {quoted: message.data})

    }));

    Asena.addCommand({pattern: 'imgemoji ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*🐱W5-BOT🤖*'})

    }));

}
