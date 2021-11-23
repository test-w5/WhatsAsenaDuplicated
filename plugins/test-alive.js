const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs')

const Language = require('../language');
const Lang = Language.getString('system_stats');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''
    
if (hrs < 12) wish = '*GOOD MORNING ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*GOOD AFTERNOON 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*GOOD EVENING 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*GOOD NIGHT 🌙*'

Asena.addCommand({pattern: 'testalive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: `
   ` + config.ALIVEMSG + `
╭──────────────────
│
┣   Hi User ` + wish + `
│         
┣   *⌚` + time + `*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©917591973073
│
╰──────────────────
`}) 

}));
