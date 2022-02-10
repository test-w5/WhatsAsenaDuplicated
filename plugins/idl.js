const Asena = require('../events');
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
//const { getBuffer, getRandom, success, close, start } = require('../fun');
//const { yta, ytv, igdl, upload, formatDate } = require('../don');
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./sql/buff');
const { yta, ytv, igdl, upload, formatDate } = require('./sql/down');
const Language = require("../language");
const Lang = Language.getString("insta");
Asena.addCommand(
  {
    pattern: "ins ?(.*)",
    fromMe: false,
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match || !/instagram.com/.test(match))
      return await message.sendMessage(Lang.NEED_REPLY)
    await message.sendMessage(Lang.DOWNLOADING)
    const urls = await igdl(match)
    if (!urls) return await message.sendMessage(Lang.NOT_FOUND)
    urls.forEach(async (url) => {
      let { buffer, type } = await getBuffer(url)
      if (!buffer) await message.sendMessage(url)
      else if (type == "image")
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.jpeg },
          MessageType.image
        )
      else
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.mp4 },
          MessageType.video
        )
    })
  }
)

