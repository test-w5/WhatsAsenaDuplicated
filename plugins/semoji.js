const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const request = require('request');

const got = require("got");

const Config = require('../config');

const des = "You Can Png From Any Emoji"

const iii = "Only work with emoji"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'semoji ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://api.zeks.xyz/api/emoji-image?apikey=w6pOcZAlefcsPoNoFV8CzWpo9yT&emoji=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker ,{quoted: message.data}
              );
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'semoji ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://api.zeks.xyz/api/emoji-image?apikey=w6pOcZAlefcsPoNoFV8CzWpo9yT&emoji=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker ,{quoted: message.data}
              );
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'semoji ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://api.zeks.xyz/api/emoji-image?apikey=w6pOcZAlefcsPoNoFV8CzWpo9yT&emoji=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker ,{quoted: message.data}
              );
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
