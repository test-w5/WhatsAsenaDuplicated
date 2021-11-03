const w5botapi = require('w5-textmaker');// Import NPM Package
const W5 = require('w5-bot');

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'textsad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textanonymous ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textpubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textffavatar ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-free-fire-avatar-online-572.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textgirllg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textfpslogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textytgold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'texthenlogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/make-team-logo-online-free-432.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'text2pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/free-pubg-logo-maker-online-609.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textffcover ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'text3pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textyasuo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/create-project-yasuo-logo-384.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textflame ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/flame-lettering-effect-372.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
Asena.addCommand({pattern: 'textangelwing ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await W5.ephoto(match[1], 'https://en.ephoto360.com/angel-wing-effect-329.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: '_*Made by 🐱W5-BOT🤖*_' })
}));
