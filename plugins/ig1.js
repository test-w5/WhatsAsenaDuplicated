

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const axios = require('axios');
const Alexa = require('../config');
const Language = require('../language');
const Lang = Language.getString('W5-BOT');
const ALang = Language.getString('scrapers');

Asena.addCommand({ pattern: 'igp ?(.*)', fromMe: false, desc: Lang.PINSTA}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `https://yuzzu-api.herokuapp.com/api/instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) 

Asena.addCommand({ pattern: 'igp ?(.*)', fromMe: true, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `https://yuzzu-api.herokuapp.com/api/instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) 

Asena.addCommand({ pattern: 'igv ?(.*)', fromMe: false, desc: Lang.VINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `https://yuzzu-api.herokuapp.com/api/instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
})

Asena.addCommand({ pattern: 'igv ?(.*)', fromMe: true, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `https://yuzzu-api.herokuapp.com/api/instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
})
