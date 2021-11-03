/* Codded by Phaticusthiccy
Unlimited API for Photooxy, Textpro and Instagram scraper
This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const w5botapi = require('w5-textmaker'); // Import NPM Package
const W5 = require('w5-bot');

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Create a sketch text effect online.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Create a spooky Halloween text effect online.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Create 3D neon light text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t31 = 'Create a cinematic horror text effect.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t32 = 'Create blue circuit style text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t33 = 'Create space text effects online free.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t34 = 'Video game classic 8-bit text effect.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t35 = 'Create science fiction text effect online free.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t36 = 'Create a transformer text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t37 = 'Create green horror style text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t38 = 'Online thunder text effect generator.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t39 = 'Create a magma hot text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t40 = 'Create impressive glitch text effects online.'
        t41 = 'Create a glitch text effect online free.'
        t42 = 'Write text on foggy window online free.'
        t43 = 'Pornhub Style Logo Online Generator Free.'
        t44 = 'Create Thunder Text Effect Online'
        t45 = 'Dropwater Text Effect.'
        t46 = 'Break Wall Text Effect.'
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Create a sketch text effect online.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Create a spooky Halloween text effect online.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Create 3D neon light text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t31 = 'Create a cinematic horror text effect.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t32 = 'Create blue circuit style text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t33 = 'Create space text effects online free.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t34 = 'Video game classic 8-bit text effect.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t35 = 'Create science fiction text effect online free.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t36 = 'Create a transformer text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t37 = 'Create green horror style text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t38 = 'Online thunder text effect generator.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t39 = 'Create a magma hot text effect online.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t40 = 'Create impressive glitch text effects online.'
        t41 = 'Create a glitch text effect online free.'
        t42 = 'Write text on foggy window online free.'
        t43 = 'Pornhub Style Logo Online Generator Free.'
        t44 = 'Create Thunder Text Effect Online'
        t45 = 'Dropwater Text Effect.'
        t46 = 'Break Wall Text Effect.'
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil Demigod_\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear Demigod_\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Demigod;Ak_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon Demigod_\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon Demigod_\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon Demigod_\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon Demigod_\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight Demigod_\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker Demigod_\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja Demigod;Ak_\n\n' +
        command_cmd + '```.textpencil``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textpencil Demigod_\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh Demigod_\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel Demigod;Ak_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel Demigod;Ak_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers Demigod;Ak_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf Demigod;Ak_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf Demigod;Ak_\n\n' +       
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion Demigod;Ak_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice Demigod_\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace Demigod;Ak_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke Demigod_\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textspooky``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textspooky Demigod;Ak_\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire Demigod_\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry Demigod_\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup Demigod_\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery Demigod_\n\n' +
        command_cmd + '```.text5neon``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '.text5neon Demigod_\n\n' +
        command_cmd + '```.texthorror``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '.texthorror Demigod;Ak_\n\n' +
        command_cmd + '```.textcircuit``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '.textcircuit Demigod_\n\n' + 
        command_cmd + '```.textdiscovery``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '.textdiscovery Demigod_\n\n' +
        command_cmd + '```.textgameover``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '.textgameover Demigod;Ak_\n\n' +
        command_cmd + '```.textfiction``` \n' + desc_cmd + t35 + '_\n' + usage_cmd + '.textfiction Demigod_\n\n' +
        command_cmd + '```.texttransformer``` \n' + desc_cmd + t36 + '_\n' + usage_cmd + '.texttransformer Demigod_\n\n' +
        command_cmd + '```.textdemon``` \n' + desc_cmd + t37 + '_\n' + usage_cmd + '.textdemon Demigod_\n\n' +
        command_cmd + '```.textthunder``` \n' + desc_cmd + t38 + '_\n' + usage_cmd + '.textthunder Demigod_\n\n' +
        command_cmd + '```.textmagma``` \n' + desc_cmd + t39 + '_\n' + usage_cmd + '.textmagma Demigod_\n\n' +
        command_cmd + '```.text2glitch``` \n' + desc_cmd + t40 + '_\n' + usage_cmd + '.text2glitch Demigod_\n\n' +
        command_cmd + '```.text3glitch``` \n' + desc_cmd + t41 + '_\n' + usage_cmd + '.text3glitch Demigod;Hari_\n\n' +
        command_cmd + '```.textfoggy``` \n' + desc_cmd + t42 + '_\n' + usage_cmd + '.textfoggy Demigod_\n\n' +
        command_cmd + '```.textpornhub``` \n' + desc_cmd + t43 + '_\n' + usage_cmd + '.textpornhub Demigod;Hari_\n\n' +
        command_cmd + '```.text2thunder``` \n' + desc_cmd + t44 + '_\n' + usage_cmd + '.text2thunder Demigod_\n\n' +  
        command_cmd + '```.textdropwater``` \n' + desc_cmd + t45 + '_\n' + usage_cmd + '.textdropwater Demigod_\n\n' +
        command_cmd + '```.textbreakwall``` \n' + desc_cmd + t46 + '_\n' + usage_cmd + '.textbreakwall Demigod_\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch Demigod;Ak_'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Asena.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    w5botapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    w5botapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
    })
}));
Asena.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text5neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'texthorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/horror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/horror.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textspooky ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/spooky.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/spooky.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textpencil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/pencil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/pencil.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcircuit ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/circuit.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/circuit.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textdiscovery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-space-text-effects-online-free-1042.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/discovery.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/discovery.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textfiction ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/fiction.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/fiction.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textdemon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/demon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/demon.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'texttransformer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/transformer.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/transformer.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textthunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/thunder.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/thunder.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/magma.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgameover ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    w5botapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/gameover.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/gameover.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    w5botapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/3glitch.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/3glitch.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textpornhub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    w5botapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/pornhub.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/pornhub.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/2glitch.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/2glitch.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textfoggy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/fggy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/fggy.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2thunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/2thunder.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/2thunder.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textdropwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/dropwater-text-effect-872.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/dpwtr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/dpwtr.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbreakwall ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    w5botapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkwall.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkwall.jpg'), MessageType.image, { caption: '_*🐱W5-BOT🤖*_' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
