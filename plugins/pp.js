/* Codded by @WH173-5P1D3R
Telegram: t.me/WH173-5P1D3R
Instagram: https://instagram.com/wh173_5p1d3r_official
Special Thanks:
@Phaticusthiccy for Unlimitted Helps
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'pic', fromMe: true, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/GVh2zp1/W5-BOT.webp";
    r_text[1] = "https://i.ibb.co/GVh2zp1/W5-BOT.webp";  
      
    var i = Math.floor(2*Math.random())   
    
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, caption: '*Bot Name:* 🐱W5-BOT🤖\n\n\n\n*Version:* v2.0\n\n\n\n*Status:* Alive😊'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'pic', fromMe: false}, (async (message, match) => {
await message.client.sendMessage(message.jid, fs.readFileSync('./Webp/W5-BOT.jpg'), MessageType.image, { mimetype: Mimetype.png, quoted : message.data, caption: '*Still Alive*'})
    }));
}  
