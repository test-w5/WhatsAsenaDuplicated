/*Codded by @phaticusthiccy
Telegram: https://t.me/phaticusthiccy
Instagram: https://instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('conventer');

var todoc_desc = ''
    var w51 = ''
    var w52 = ''
     if (Config.LANG == 'EN') {
        todoc_desc = 'covert mp3 to document'
        w51 = '```Converting to Doc file```'
        w52 = '```Please Reply To a Audio```'
    }
    if (Config.LANG == 'ML') {
        todoc_desc = 'mp3 ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുന്നു'
        w51 = '```ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുന്നു```'
        w52 = '```ഒരു ഓഡിയോയ്ക്ക് മറുപടി നൽകുക```'
    }
    
     Asena.addCommand({pattern: 'todoc ?(.*)', fromMe: false, desc: todoc_desc , usage : w52}, (async (message, match) => { 
        
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid,w51, MessageType.text);
        var downloading = await message.client.sendMessage(mid,w51,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.document, {mimetype: Mimetype.mp4Audio, quoted: message.data, filename: '🐱𝐖𝟓-𝐁𝐎𝐓🤖.mp3'});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

}
    
}
