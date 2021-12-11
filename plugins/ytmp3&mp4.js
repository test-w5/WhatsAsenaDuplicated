/* Copyright (C) 2021 WH173 5P1D3R.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WH173 5P1D3R
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('W5-BOT');
const BLang = Language.getString('scrapers');
const YTV_DESC = "Youtube Downloader V2."
const YT_NEED = "🔗 *Enter Youtube URL* \nExample:-\n _.ytmp3 https://youtu.be/kzANn7W34sw_\nor\n_.ytmp4 https://youtu.be/kzANn7W34sw_"
const DOWNLOAD_A = "*🎵 Downloading Your Song...*"
const DOWNLOAD_V = "*🎥 Downloading Your Video...*"
const YT_A = "*🎵 Uploading Your Audio...*"
const YT_V = "*🎥 Uploading Your Video...*"
const NO_RESULT = "☹️ *Can't Find Anything...*"

    Asena.addCommand({ pattern: 'ytmp3 ?(.*)', fromMe: false, desc: YTV_DESC,  deleteCommand: true}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DOWNLOAD_A,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytmp3/2?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YT_A,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );



    Asena.addCommand({ pattern: 'ytmp3 ?(.*)', fromMe: true, dontAddCommandList: true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DOWNLOAD_A,MessageType.text);
        await axios
          .get(`https://leyscoders-api.herokuapp.com/api/ytmp3?url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YT_A,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
	


Asena.addCommand({ pattern: 'ytmp4 ?(.*)', fromMe: false, desc: YTV_DESC,  deleteCommand: true}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DOWNLOAD_V,MessageType.text);
        await axios
          .get(`https://leyscoders-api.herokuapp.com/api/ytmp4?url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YT_V,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: '_*🐱W5-BOT🤖*_'});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );



    Asena.addCommand({ pattern: 'ytmp4 ?(.*)', fromMe: true, dontAddCommandList: true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DOWNLOAD_V,MessageType.text);
        await axios
          .get(`https://leyscoders-api.herokuapp.com/api/ytmp4?url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YT_V,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: '_*🐱W5-BOT🤖*_'});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
