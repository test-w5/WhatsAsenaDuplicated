const Asena= require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Asena.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.hizliresim.com/hn71uc7.jpg";
    r_text[1] = "https://i.hizliresim.com/hn71uc7.jpg";
    
    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*GOOD MORNING ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*GOOD AFTERNOON 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*GOOD EVENING 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*GOOD NIGHT 🌙*'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, quoted: message.data, caption: `
╭──────────────────
│
│ Hey User ` + wish + `
│         
│   
│    *⌚` + time + `*
│
│
│ 
┣🐱 *DEVELOPER* : WH173 5P1D3R
┣🐱 *BOT* : 🐱W5-BOT🤖
┣🐱 *VERSION* : v1.5 Stable
┣🐱 *MODE* : PUBLIC
┣🐱 *PREFIX* : *.*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©917736807522
│
╰──────────────────
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
●▬▬▬ 🐱W5-BOT🤖 ▬▬▬●

🐱 Command: .animepic 
💬 Description: Sends random anime photo. 
⌨️ Example: animepic normal // animepic nsfw

🐱 Command: .animegif 
💬 Description: Sends random anime video. 
⌨️ Example: animegif normal // animegif nsfw

🐱 Command: .vtalk
💬 Description: Starts to W5-BOT voice chat. 

🐱 Command: .w5bot 
💬 Description: Activates full functional w5bot features. Turn your account into a ai chatbot! 
⌨️ Example: .w5bot on / off

🐱 Command: .xmedia
💬 Description: It is a plugin with more than 25 media tools. 

🐱 Command: .install 
💬 Description: Install external plugins. 
⚠️ Warn: Contact the owner if you have any problems🐱.

🐱 Command: .plugin
💬 Description: Shows the plugins you have installed. 

🐱 Command: .remove
💬 Description: Removes the plugin. 

🐱 Command: .ban 
💬 Description: Ban someone in the group. Reply to message or tag a person to use command. 

🐱 Command: .add
💬 Description: Adds someone to the group. 

🐱 Command: .promote 
💬 Description: Makes any person an admin. 

🐱 Command: .demote 
💬 Description: Takes the authority of any admin. 

🐱 Command: .mute 
💬 Description: Mute the group chat. Only the admins can send a message.
⌨️ Example: .mute & .mute 5m etc 

🐱 Command: .unmute 
💬 Description: Unmute the group chat. Anyone can send a message. 

🐱 Command: .invite 
💬 Description: Provides the group's invitation link. 

🐱 Command: .afk 
💬 Description: It makes you AFK - Away From Keyboard. 

🐱 Command: .carbon

🐱 Command: .tomp3
💬 Description: Converts video to sound. 

🐱 Command: .imagesticker
💬 Description: Converts the sticker to a photo. 

🐱 Command: .videosticker
💬 Description: Converts animated stickers to video. 

🐱 Command: .deepai
💬 Description: Runs the most powerful artificial intelligence tools using artificial neural networks. 

🐱 Command: .pemoji 
💬 Description: Emoji to Emoji Png Picture 

🐱 Command: .imgemoji 

🐱 Command: .print 
💬 Description: Prints the inside of the file on the server. 

🐱 Command: .bashmedia 
💬 Description: Sends audio, video and photos inside the server. 
⌨️ Example: video.mp4 && media/gif/pic.mp4

🐱 Command: .addserver
💬 Description: Uploads image, audio or video to the server. 

🐱 Command: .term 
💬 Description: Allows to run the command on the server's shell. 

🐱 Command: .mediainfo
💬 Description: Shows the technical information of the replied video. 

🐱 Command: .fb 
💬 Description: Downloads videos from Facebook. 
⌨️ Example: fb https://www.facebook.com/Google/videos/10156367314197838

🐱 Command: .ffmpeg 
💬 Description: Applies the desired ffmpeg filter to the video.
⌨️ Example: .ffmpeg fade=in:0:30 

🐱 Command: .welcome
💬 Description: It sets the welcome message. If you leave it blank it shows the welcome message. 

🐱 Command: .goodbye
💬 Description: Sets the goodbye message. If you leave blank, it show's the goodbye message. 

🐱 Command: .help 
💬 Description: Gives information about using the bot from the Help menu. 

🐱 Command: .degis 
💬 Description: Changes the text of modules like alive, afk etc.. 

🐱 Command: .restart
💬 Description: Restart W5-BOT 

🐱 Command: .shutdown
💬 Description: Shutdown W5-BOT 

🐱 Command: .dyno
💬 Description: Check heroku dyno usage 

🐱 Command: .setvar 
💬 Description: Set heroku config var 

🐱 Command: .delvar 
💬 Description: Delete heroku config var 

🐱 Command: .getvar 
💬 Description: Get heroku config var 

🐱 Command: .ip 
💬 Description: gives you the detail of your IP 

🐱 Command: .locate
💬 Description: It send your location. 
⚠️ Warn: Please open your location before using command!

🐱 Command: .log
💬 Description: Saves the message you reply to your private number. 
⚠️ Warn: Does not support animated stickers!

🐱 Command: .meme 
💬 Description: Photo memes you replied to. 

🐱 Command: .movie 
💬 Description: Shows movie info. 

🐱 Command: .neko
💬 Description: Replied messages will be added to nekobin.com. 

🐱 Command: .notes
💬 Description: Shows all your existing notes. 

🐱 Command: .save 
💬 Description: Reply a message and type .save or just use .save <Your note> without replying 

🐱 Command: .deleteNotes
💬 Description: Deletes *all* your saved notes. 

🐱 Command: .ocr 
💬 Description: Reads the text on the photo you have replied. 

🐱 Command: .pdf 
💬 Description: Converts site to PDF. 

🐱 Command: .pic

🐱 Command: .kickme
💬 Description: It kicks you from the group you are using it in. 

🐱 Command: .pp
💬 Description: Makes the profile photo what photo you reply. 

🐱 Command: .block 
💬 Description: Block user. 

🐱 Command: .unblock 
💬 Description: Unblock user. 

🐱 Command: .jid 
💬 Description: Giving user's JID. 

🐱 Command: .adrdmore 
💬 Description: Add readmore before your text 

🐱 Command: .readmore 
💬 Description: Add readmore before your text 

🐱 Command: .removebg 
💬 Description: Removes the background of the photos. 

🐱 Command: .report 
💬 Description: Sends reports to group admins. 

🐱 Command: .rbts

🐱 Command: .rblackpink

🐱 Command: .rexo

🐱 Command: .scam 
💬 Description: Creates 5 minutes of fake actions. 

🐱 Command: .scan 
💬 Description: Checks whether the entered number is registered on WhatApp. 

🐱 Command: .trt
💬 Description: It translates with Google Translate. You must reply any message. 
⌨️ Example: .trt tr it (From Turkish to Italian)

🐱 Command: .currency

🐱 Command: .tts 
💬 Description: It converts text to sound. 

🐱 Command: .song 
💬 Description: Uploads the song you wrote. 

🐱 Command: .video 
💬 Description: Downloads video from YouTube. 

🐱 Command: .vd 
💬 Description: Downloads video from YouTube. 

🐱 Command: .yt 
💬 Description: It searchs on YouTube. 

🐱 Command: .detailyt 
💬 Description: It searchs on YouTube. 

🐱 Command: .wiki 
💬 Description: Searches query on Wikipedia. 

🐱 Command: .img 
💬 Description: Searches for related pics on Google. 

🐱 Command: .github 
💬 Description: Collects github information from the given username.
⌨️ Example: .github phaticusthiccy 

🐱 Command: .lyric 
💬 Description: Finds the lyrics of the song. 

🐱 Command: .covid 
💬 Description: Shows the daily and overall covid table of more than 15 countries. 

🐱 Command: .img 
💬 Description: Searches for related pics on Google. 

🐱 Command: .ss 
💬 Description: Takes a screenshot from the page in the given link. 

🐱 Command: .semoji 
💬 Description: You Can Png From Any Emoji 

🐱 Command: .semoji 

🐱 Command: .insta 
💬 Description: Download content from insta link 

🐱 Command: .animesay 
💬 Description: It writes the text inside the banner the anime girl is holding 

🐱 Command: .changesay 
💬 Description: Turns the text into the change my mind poster. 

🐱 Command: .trumpsay 
💬 Description: Converts the text to Trump's tweet. 

🐱 Command: .audio spam
💬 Description: Sends the replied audio as spam. 

🐱 Command: .foto spam
💬 Description: Sends the replied photo as spam. 

🐱 Command: .sticker spam
💬 Description: Convert the replied photo or video to sticker and send it as spam. 

🐱 Command: .vid spam
💬 Description: Sends the replied video as spam. 

🐱 Command: .killspam
💬 Description: Stops spam command. 

🐱 Command: .spam 
💬 Description: It spam until you stop it.
⌨️ Example: .spam test 

🐱 Command: .sticker
💬 Description: It converts your replied photo or video to sticker. 

🐱 Command: .alive
💬 Description: Does bot work? 

🐱 Command: .sysd
💬 Description: Shows the system properties. 

🐱 Command: .owner

🐱 Command: .coowner

🐱 Command: .coowner

🐱 Command: .tagadmin
💬 Description: Tags group admins. 

🐱 Command: .tagall 
💬 Description: Tags everyone in the group. 

🐱 Command: .sndtoall
💬 Description: Sends the replied message to all members in the group. 

🐱 Command: .tblend 
💬 Description: Applies the selected TBlend effect to videos. 

🐱 Command: .list 
💬 Description: Simple command list 

🐱 Command: .textimg
💬 Description: Set of commands to convert text into effective images. 

🐱 Command: .textmaker
💬 Description: Shows textmaker tools with unlimited access. 

🐱 Command: .or

🐱 Command: .ttp 
💬 Description: Converts text to plain painting. 

🐱 Command: .attp 
💬 Description: Adds rainbow effect to the text as a sticker. 

🐱 Command: .glowttp 
💬 Description: Converts text into neon painting. 

🐱 Command: .2attp 
💬 Description: Adds rainbow effect to the text as a sticker. 

🐱 Command: .allttp
💬 Description: Shows all ttp commands. 

🐱 Command: .unit 
💬 Description: Converts weight units. 
⌨️ Example: unit 1 kg mg // unit <number> <unit1> <unit2>

🐱 Command: .bitunit 
💬 Description: Converts data units. 
⌨️ Example: bitunit 1 gb mb // bitunit <number> <unit1> <unit2>

🐱 Command: .unvoice
💬 Description: Converts audio to sound recording. 

🐱 Command: .update
💬 Description: Checks the update. 

🐱 Command: .update now
💬 Description: It makes updates. 

🐱 Command: .videorbg 
💬 Description: Removes the background of the photos. 

🐱 Command: .voicy
💬 Description: It converts audio to text. 

🐱 Command: .vote 

🐱 Command: .wame 
💬 Description: Get a link to the user chat. 

🐱 Command: .wallpaper
💬 Description: It sends high resolution wallpapers. 

🐱 Command: .catwallpaper
💬 Description: It sends high resolution wallpapers. 

🐱 Command: .btswallpaper
💬 Description: It sends high resolution wallpapers. 

🐱 Command: .testwp
💬 Description: It sends high resolution wallpapers. 

🐱 Command: .weather 
💬 Description: Shows the weather. 

🐱 Command: .speedtest
💬 Description: Measures Download and Upload speed. 

🐱 Command: .ping
💬 Description: Measures your ping. 

🐱 Command: .short 
💬 Description: Shorten the long link. 

🐱 Command: .calc 
💬 Description: Performs simple math operations. 

🐱 Command: .whois
💬 Description: Displays metadata data of group or person. 

`}) 

}));
