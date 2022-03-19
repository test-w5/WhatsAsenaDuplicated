/*const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const axios = require('axios');
const setting = require('../config');
const raganork = require('raganork-bot');
const Config = require('../config');
Asena.addCommand({ pattern: 'story ?(.*)', fromMe: false, desc:'Downloads full/single story from instagram',usage:'.story username or link'}, (async (msg, query) => {
if (query[1] === '') return await msg.client.sendMessage(msg.jid, need_acc_s, MessageType.text, {quoted: msg.data});
var user = query[1];
var res = await raganork.query.getStory(user,v)
if (res === "false") return await msg.client.sendMessage(msg.jid, "_Story not found!_", MessageType.text, {quoted: msg.data})
if (res.error) return await msg.client.sendMessage(msg.jid, res.error.replace('status','story'), MessageType.text, {quoted: msg.data})
var url = ''
await msg.sendMessage('```Downloading '+res.result.stories.length+' stories of '+res.result.username+'```');
res.result.stories.map((result) => {
url += result.url + ','});
var que = url !== false ? url.split(',') : [];
for (var i = 0; i < (que.length < res.result.stories.length ? que.length : res.result.stories.length); i++) {
var get = got(que[i], {https: {rejectUnauthorized: false}});
var type = que[i].includes('mp4') ? MessageType.video : MessageType.image
var mime = que[i].includes('mp4') ? Mimetype.mp4 : Mimetype.jpg
var stream = get.buffer();
stream.then(async (video) => {
await msg.client.sendMessage(msg.jid, video, type, { mimetype: mime,quoted: msg.data});
})};
}));
*/
