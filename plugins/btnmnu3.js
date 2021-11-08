const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

Asena.addCommand({pattern: 'btn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
  const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(id, buttonMessage, MessageType.buttonsMessage)
