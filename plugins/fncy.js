const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('W5-BOT');
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({ pattern: 'fancy ?(.*)', desc: Lang.FANCY, fromMe: wk }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https:///api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*[Fancy Text]* \n             *🐱 W5-BOT* \n              \n\n ${result} \n\n                 *🐱 W5-BOT*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
	
	Asena.addCommand({ pattern: 'fancy ?(.*)', dontAddCommandList: true, fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://.herokuapp.com/api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*[Fancy Text]* \n             *🐱 W5-BOT* \n\n ${result} \n\n                \n*🐱 W5-BOT*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
