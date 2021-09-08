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

    Asena.addCommand({pattern: 'rbts', fromMe: true, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://api.xteam.xyz/randomimage/bts?APIKEY=63c57b77f6b660c1";
    r_text[1] = "https://lolhuman.herokuapp.com/api/random/bts?apikey=98e16488375eceae95f96704";
    r_text[2] = "https://api.xteam.xyz/randomimage/bts?APIKEY=63c57b77f6b660c1";  
      
    var i = Math.floor(3*Math.random())   
    
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, caption: '*_🐱W5-BOT🤖*_'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'rbts', fromMe: false, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://api.xteam.xyz/randomimage/bts?APIKEY=a860f95201407582";
    r_text[1] = "https://api.xteam.xyz/randomimage/bts?APIKEY=63c57b77f6b660c1";
    r_text[2] = "https://api.xteam.xyz/randomimage/bts?APIKEY=504e039badc9ba21";
    r_text[3] = "https://lolhuman.herokuapp.com/api/random/bts?apikey=98e16488375eceae95f96704";    
    
    var i = Math.floor(4*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, caption: '_*🐱W5-BOT🤖*_'})

    }));
}  
