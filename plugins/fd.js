const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config')

const FIND_DESC = "Looking for the song."

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'whatthissong', fromMe: true, desc: FIND_DESC }, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*Reply to a Video/Audio.*', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '128f40c73de753976d42a9fa8ec1e730');
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'Success.') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, '*Song not found.*', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));
}

else if (Config.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: 'whatthissong', fromMe: false, desc: FIND_DESC }, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*Reply to a Video/Audio.*', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '810981ae4ec82e95f009061df3c82eea');
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'Success.') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, '*Song not found.*', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));
}
