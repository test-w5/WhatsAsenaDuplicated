const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.NUMBER}, (async (message, match) => {
   const w5 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:WH173 5P1D3R\n'
            + 'ORG:W5-BOT Owner WH173 5P1D3R;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=917736807522:+917736807522\n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "WH173 5P1D3R", vcard: w5}, MessageType.contact);
 
  }));
