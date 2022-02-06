const Asena = require('../events');
const Language = require("../language");
const Lang = Language.getString("weather");
const yts = require("yt-search");
const moment = require("moment");
const { yta, ytv, igdl, upload, formatDate } = require('../don');
const { getBuffer, getRandom, success, close, start } = require('../fun');
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require('../fun');
const { Mimetype, MessageType } = require("@adiwajshing/baileys");

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/


Asena.addCommand(
  {
    pattern: "ytv ?(.*)",
    fromMe: false,
  },
  async (message, match) => {
    match = match || message.reply_message.text
    let vid = ytIdRegex.exec(match)
    if (!match) return await message.sendMessage("*Give me a keyword.*")
    if (!vid)
      return await message.sendMessage(
        ytv(await yts(match)),
        {},
        MessageType.listMessage
      )
    if (/^[0-9]+/.test(match)) {
      await message.sendMessage(Lang.DOWNLOADING)
      let url = await ytv(match)
      if (!url) return await message.sendMessage("*Failed*")
      let { buffer, size, emessage } = await getBuffer(url)
      if (emessage)
        return message.sendMessage(`${emessage}\n${url}`, {
          quoted: message.data,
        })
      if (!buffer) return await message.sendMessage(Lang.SIZE.format(size))
      return await message.sendMessage(
        buffer,
        { mimetype: Mimetype.mp4 },
        MessageType.video
      )
    }
    let msg = await ytv(match)
    if (!msg) return await message.sendMessage("*Failed*")
    return await message.sendMessage(msg, {}, MessageType.listMessage)
  }
)

Asena.addCommand(
  {
    pattern: "yta ?(.*)",
    fromMe: false,
    desc: "Yt video to mp3",
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.sendMessage("*Give me a keyword.*")
    let vid = ytIdRegex.exec(match)
    if (!vid)
      return await message.sendMessage(
        ytv(await yts(match)),
        {},
        MessageType.listMessage
      )
    let url = await yta(vid[1])
    if (!url) return await message.sendMessage(Lang.INOT_FOUND)
    let { buffer, mime, emessage } = await getBuffer(url)
    if (emessage)
      return message.sendMessage(`${emessage}\n${url}`, {
        quoted: message.data,
      })
    if (buffer)
      return await message.sendMessage(
        buffer,
        { mimetype: mime },
        MessageType.audio
      )
  }
)
