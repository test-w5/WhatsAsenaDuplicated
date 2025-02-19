/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
W5-BOT
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');

//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));

    Asena.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Asena.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        try {
            var arama = await yts({videoId: ytdl.getURLVideoID(match[1])});
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }

        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(arama.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + arama.videoId + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + arama.videoId + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Asena.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

    Asena.addCommand({ pattern: 'github ?(.*)', fromMe: true, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Asena.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}
else if (config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));

    Asena.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    Asena.addCommand({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true});
    }));

    Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.sendMessage(`_Downloading ${title} ..._`)

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {mimetype: Mimetype.mp4Audio, quoted: message.data, filename: match[1].replace('mp3', config.YTSONG) + '.mp3'});
            });
    }));
    Asena.addCommand({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        try {
            var arama = await yts({videoId: ytdl.getURLVideoID(match[1])});
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }

        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(arama.videoId, {filter: format => format.container === 'mp4' && ['1080p', '720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + arama.videoId + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + arama.videoId + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: '_*🐱W5-BOT🤖*_', thumbnail: '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' });
        });
    }));
    
    Asena.addCommand({pattern: 'vd ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text, {quoted : {
            key: {
              fromMe: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast"
            },
            message: {
              "extendedTextMessage": {
                "text": "*Dowloading*"
              }
            }
        }
        });
        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Asena.addCommand({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text, {quoted: message.data});
        await reply.delete();
    }));
    Asena.addCommand({pattern: 'detailyt ?(.*)', fromMe: false,  deleteCommand: false, desc: Lang.YT_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var searching = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

    try {
        var arama = await yts(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
    }
    
    var ytgot = '';
    arama.all.map((video) => {
        ytgot += '🧾 *' + video.title + '*' + '\n' + '*⏳Duration:-* ' +  video.duration +  '\n' + '*📎Link:-* ' + video.url + '\n'+ '*⌚time ago:-* ' + video.ago + '\n\n'
    });

    await message.client.sendMessage(message.jid, '*YOUTUBE VIDEO DETAILS📊*\n' + 'Here👇' + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ytgot,MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: searching.key.id, remoteJid: message.jid, fromMe: true})
}));

    Asena.addCommand({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text, {quoted: message.data});
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
                
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image, {quoted: message.data});
            });
        }

        message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
    });
    }));

    Asena.addCommand({ pattern: 'github ?(.*)', fromMe: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {quoted: message.data, caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Asena.addCommand({pattern: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "İN" ||  match[1] === "IN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
    Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));

    Asena.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC, dontAddCommandList: true}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC, dontAddCommandList: true}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Asena.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC, dontAddCommandList: true}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC, dontAddCommandList: true}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        try {
            var arama = await yts({videoId: ytdl.getURLVideoID(match[1])});
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }

        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(arama.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + arama.videoId + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + arama.videoId + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Asena.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC, dontAddCommandList: true}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC, dontAddCommandList: true}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
                
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
    });
    }));

    Asena.addCommand({ pattern: 'github ?(.*)', fromMe: true, desc: Glang.GİTHUB_DESC, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC, dontAddCommandList: true}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Asena.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
}
