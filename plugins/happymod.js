/* Copyright (C) 2021 plk-dqz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=w6pOcZAlefcsPoNoFV8CzWpo9yT&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🔰 ' + Lang.TITLE +':* ```' + json.result[0].title + '```\n\n' +
		'*🔰 ' + Lang.URL +':* ```' + json.result[0].url + '```\n\n' +									 
		'*🔰 ' + Lang.RATING +':* ```' + json.result[0].rating + '```\n\n\n' + 
		'*🔰 ' + Lang.THUMB +':* ```' + json.result[0].thumb + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text , {quoted: message.data});
	}
});
Asena.addCommand({pattern: 'playstore ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/sgplay?apikey=w6pOcZAlefcsPoNoFV8CzWpo9yT&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🔰 ' + Lang.TITLE +':* ```' + json.result[0].title + '```\n\n' +
		'*🔰 ' + Lang.APP_ID +':* ```' + json.result[0].appid + '```\n\n' +
		'*🔰 ' + Lang.DEVELOPER +':* ```' + json.result[0].developer + '```\n\n' +									 
		'*🔰 ' + Lang.PRICE +':* ```' + json.result[0].url + '```\n\n' +									 
		'*🔰 ' + Lang.RATING +':* ```' + json.result[0].rating + '```\n\n\n' +
		'*🔰 ' + Lang.URL +':* ```' + json.result[0].url + '```\n\n\n' +									 
		'*🔰 ' + Lang.THUMB +':* ```' + json.result[0].thumb + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text , {quoted: message.data});
	}
});
Asena.addCommand({pattern: 'ffid ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://lolhuman.herokuapp.com/api/freefire/${match[1]}?apikey=98e16488375eceae95f96704`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
		'*🔰 ' + Lang.RESULT +':* ```' + json.result[0].result + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text , {quoted: message.data});
	}
});
