const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('weather');
Asena.addCommand({pattern: 'michu ?(.*)', fromMe: true, desc: Lang.BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NOT_FOUNDRQ);
	const url = `https://api-sv2.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, ' \n\n*Michu* 💗' + ' : ' +' ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDRQ, MessageType.text);
	}
    });
