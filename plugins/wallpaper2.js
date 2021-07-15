/* Codded by @WH173-5P1D3R
Telegram: t.me/WH173-5P1D3R
Instagram: https://instagram.com/wh173_5p1d3r_official
Special Thanks:
@Phaticusthiccy for Unlimitted Helps.
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'wbts', fromMe: true, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://c4.wallpaperflare.com/wallpaper/389/948/968/suga-bts-wallpaper-thumb.jpg";
    r_text[1] = "https://c4.wallpaperflare.com/wallpaper/355/423/779/rap-monster-jimin-jin-bts-suga-jungkook-j-hope-v-bts-bts-k-pop-boy-bands-elevator-wallpaper-thumb.jpg";
    r_text[2] = "https://c4.wallpaperflare.com/wallpaper/454/86/421/hip-bts-dance-boys-wallpaper-thumb.jpg";
    r_text[3] = "https://c4.wallpaperflare.com/wallpaper/468/36/1010/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[4] = "https://c4.wallpaperflare.com/wallpaper/113/128/943/agust-d-bts-suga-hd-wallpaper-thumb.jpg";
    r_text[5] = "https://c4.wallpaperflare.com/wallpaper/365/212/14/jungkook-anime-boys-bts-hd-wallpaper-thumb.jpg";
    r_text[6] = "https://c4.wallpaperflare.com/wallpaper/711/102/451/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[7] = "https://c4.wallpaperflare.com/wallpaper/571/848/960/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[8] = "https://c4.wallpaperflare.com/wallpaper/383/730/366/anime-boys-bts-hd-wallpaper-thumb.jpg";
    r_text[9] = "https://c4.wallpaperflare.com/wallpaper/407/574/530/music-bts-wallpaper-thumb.jpg";
    r_text[10] = "https://c4.wallpaperflare.com/wallpaper/725/456/959/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[11] = "https://c4.wallpaperflare.com/wallpaper/334/949/290/bts-suga-jimin-jungkook-butter-hd-wallpaper-thumb.jpg";
    r_text[12] = "https://c4.wallpaperflare.com/wallpaper/913/922/375/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[13] = "https://c4.wallpaperflare.com/wallpaper/526/986/394/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[14] = "https://c4.wallpaperflare.com/wallpaper/416/244/907/music-bts-park-ji-min-wallpaper-thumb.jpg";
    r_text[15] = "https://c4.wallpaperflare.com/wallpaper/502/887/812/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[16] = "https://c4.wallpaperflare.com/wallpaper/130/890/416/bts-jungkook-korean-men-asian-k-pop-hd-wallpaper-thumb.jpg";
    r_text[17] = "https://c4.wallpaperflare.com/wallpaper/821/460/9/bts-k-pop-j-hope-wallpaper-thumb.jpg";
    r_text[18] = "https://c4.wallpaperflare.com/wallpaper/540/460/844/bts-suga-bangtan-boys-bulletproof-boy-scouts-wallpaper-thumb.jpg";
    r_text[19] = "https://c4.wallpaperflare.com/wallpaper/149/415/737/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[20] = "https://c4.wallpaperflare.com/wallpaper/162/201/143/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[21] = "https://c4.wallpaperflare.com/wallpaper/737/157/228/kpop-cocacola-bts-boy-wallpaper-thumb.jpg";
    r_text[22] = "https://c4.wallpaperflare.com/wallpaper/143/888/842/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[23] = "https://c4.wallpaperflare.com/wallpaper/787/816/871/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[24] = "https://c4.wallpaperflare.com/wallpaper/273/834/492/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[25] = "https://c4.wallpaperflare.com/wallpaper/805/525/208/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[26] = "https://c4.wallpaperflare.com/wallpaper/619/90/342/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[27] = "https://c4.wallpaperflare.com/wallpaper/951/300/843/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[28] = "https://c4.wallpaperflare.com/wallpaper/648/961/96/music-bts-suga-singer-wallpaper-thumb.jpg";
    r_text[29] = "https://c4.wallpaperflare.com/wallpaper/179/295/758/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[30] = "https://c4.wallpaperflare.com/wallpaper/610/350/327/bts-jungkook-jin-bts-jhope-wallpaper-thumb.jpg";
    r_text[31] = "https://c4.wallpaperflare.com/wallpaper/94/252/978/bts-jin-bts-jhope-jungkook-wallpaper-thumb.jpg";
    r_text[32] = "https://c4.wallpaperflare.com/wallpaper/43/455/700/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[33] = "https://c4.wallpaperflare.com/wallpaper/556/502/439/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[34] = "https://c4.wallpaperflare.com/wallpaper/111/832/912/agust-d-suga-bts-hd-wallpaper-thumb.jpg";
    r_text[35] = "https://c4.wallpaperflare.com/wallpaper/432/84/990/music-bts-wallpaper-thumb.jpg";
    r_text[36] = "https://c4.wallpaperflare.com/wallpaper/460/580/20/music-bts-boy-k-pop-korean-hd-wallpaper-thumb.jpg";
    r_text[37] = "https://c4.wallpaperflare.com/wallpaper/180/870/472/bts-bangtan-boys-park-ji-min-jimin-wallpaper-thumb.jpg";
    r_text[38] = "https://c4.wallpaperflare.com/wallpaper/35/179/829/jungkook-bts-k-pop-wallpaper-thumb.jpg";
    r_text[39] = "https://c4.wallpaperflare.com/wallpaper/422/361/88/bts-k-pop-j-hope-wallpaper-thumb.jpg";
    r_text[40] = "https://c4.wallpaperflare.com/wallpaper/485/394/364/bts-kim-seok-jin-wings-anime-style-wallpaper-thumb.jpg";
    r_text[41] = "https://c4.wallpaperflare.com/wallpaper/757/166/351/music-bts-hd-wallpaper-thumb.jpg";
    r_text[42] = "https://c4.wallpaperflare.com/wallpaper/487/175/816/v-bts-tae-men-asian-wallpaper-thumb.jpg";
    r_text[43] = "https://c4.wallpaperflare.com/wallpaper/130/890/416/bts-jungkook-korean-men-asian-k-pop-hd-wallpaper-thumb.jpg";
    r_text[44] = "https://c4.wallpaperflare.com/wallpaper/692/956/870/bts-v-bts-anime-boys-hd-wallpaper-thumb.jpg";
    r_text[45] = "https://c4.wallpaperflare.com/wallpaper/673/152/907/auto-art-bts-bangtan-boys-wallpaper-thumb.jpg";
    r_text[46] = "https://c4.wallpaperflare.com/wallpaper/171/620/905/bangtan-boys-min-sonyeondan-wallpaper-thumb.jpg";
    r_text[47] = "https://c4.wallpaperflare.com/wallpaper/641/37/302/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[48] = "https://c4.wallpaperflare.com/wallpaper/421/610/488/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[49] = "https://c4.wallpaperflare.com/wallpaper/960/83/730/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[50] = "https://c4.wallpaperflare.com/wallpaper/655/224/1000/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[51] = "https://c4.wallpaperflare.com/wallpaper/986/117/303/kpop-bts-taken-wallpaper-thumb.jpg";
    r_text[52] = "https://c4.wallpaperflare.com/wallpaper/859/774/552/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[53] = "https://c4.wallpaperflare.com/wallpaper/984/284/854/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[54] = "https://c4.wallpaperflare.com/wallpaper/93/15/617/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[55] = "https://c4.wallpaperflare.com/wallpaper/542/248/954/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[56] = "https://c4.wallpaperflare.com/wallpaper/677/186/375/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[57] = "https://c4.wallpaperflare.com/wallpaper/367/522/389/music-bts-jimin-singer-wallpaper-thumb.jpg";
    r_text[58] = "https://c4.wallpaperflare.com/wallpaper/648/961/96/music-bts-suga-singer-wallpaper-thumb.jpg";
    r_text[59] = "https://c4.wallpaperflare.com/wallpaper/1005/952/58/music-bts-wallpaper-thumb.jpg";
    r_text[60] = "https://c4.wallpaperflare.com/wallpaper/247/829/170/music-bts-j-hope-singer-jimin-singer-wallpaper-thumb.jpg";
    r_text[61] = "https://c4.wallpaperflare.com/wallpaper/432/84/990/music-bts-wallpaper-thumb.jpg";
    r_text[62] = "https://c4.wallpaperflare.com/wallpaper/344/953/312/music-bts-wallpaper-thumb.jpg";
    r_text[63] = "https://c4.wallpaperflare.com/wallpaper/340/454/416/music-bts-wallpaper-thumb.jpg";
    r_text[64] = "https://c4.wallpaperflare.com/wallpaper/882/288/982/music-bts-jeon-jungkook-jungkook-singer-wallpaper-thumb.jpg";
    r_text[65] = "https://c4.wallpaperflare.com/wallpaper/832/236/1013/music-bts-rm-singer-wallpaper-thumb.jpg";
    r_text[66] = "https://c4.wallpaperflare.com/wallpaper/882/286/352/music-bts-wallpaper-thumb.jpg";
    r_text[67] = "https://c4.wallpaperflare.com/wallpaper/558/505/136/music-bts-wallpaper-thumb.jpg";
    r_text[68] = "https://c4.wallpaperflare.com/wallpaper/610/350/327/bts-jungkook-jin-bts-jhope-wallpaper-thumb.jpg";
    r_text[69] = "https://c4.wallpaperflare.com/wallpaper/113/128/943/agust-d-bts-suga-hd-wallpaper-thumb.jpg";
    r_text[70] = "https://c4.wallpaperflare.com/wallpaper/505/337/96/bts-jimin-soap-bubbles-field-wallpaper-thumb.jpg";
    r_text[71] = "https://c4.wallpaperflare.com/wallpaper/217/530/477/bts-park-ji-min-redhead-korean-korean-men-hd-wallpaper-thumb.jpg";
    r_text[72] = "https://c4.wallpaperflare.com/wallpaper/984/284/854/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[73] = "https://c4.wallpaperflare.com/wallpaper/996/454/511/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[74] = "https://c4.wallpaperflare.com/wallpaper/471/136/1008/bangtan-boy-boys-bts-wallpaper-thumb.jpg"; 
      
    var i = Math.floor(75*Math.random())   
    
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, caption: '*_🐱W5-BOT🤖*_'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'wbts', fromMe: false, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://c4.wallpaperflare.com/wallpaper/389/948/968/suga-bts-wallpaper-thumb.jpg";
    r_text[1] = "https://c4.wallpaperflare.com/wallpaper/355/423/779/rap-monster-jimin-jin-bts-suga-jungkook-j-hope-v-bts-bts-k-pop-boy-bands-elevator-wallpaper-thumb.jpg";
    r_text[2] = "https://c4.wallpaperflare.com/wallpaper/454/86/421/hip-bts-dance-boys-wallpaper-thumb.jpg";
    r_text[3] = "https://c4.wallpaperflare.com/wallpaper/468/36/1010/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[4] = "https://c4.wallpaperflare.com/wallpaper/113/128/943/agust-d-bts-suga-hd-wallpaper-thumb.jpg";
    r_text[5] = "https://c4.wallpaperflare.com/wallpaper/365/212/14/jungkook-anime-boys-bts-hd-wallpaper-thumb.jpg";
    r_text[6] = "https://c4.wallpaperflare.com/wallpaper/711/102/451/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[7] = "https://c4.wallpaperflare.com/wallpaper/571/848/960/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[8] = "https://c4.wallpaperflare.com/wallpaper/383/730/366/anime-boys-bts-hd-wallpaper-thumb.jpg";
    r_text[9] = "https://c4.wallpaperflare.com/wallpaper/407/574/530/music-bts-wallpaper-thumb.jpg";
    r_text[10] = "https://c4.wallpaperflare.com/wallpaper/725/456/959/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[11] = "https://c4.wallpaperflare.com/wallpaper/334/949/290/bts-suga-jimin-jungkook-butter-hd-wallpaper-thumb.jpg";
    r_text[12] = "https://c4.wallpaperflare.com/wallpaper/913/922/375/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[13] = "https://c4.wallpaperflare.com/wallpaper/526/986/394/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[14] = "https://c4.wallpaperflare.com/wallpaper/416/244/907/music-bts-park-ji-min-wallpaper-thumb.jpg";
    r_text[15] = "https://c4.wallpaperflare.com/wallpaper/502/887/812/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[16] = "https://c4.wallpaperflare.com/wallpaper/130/890/416/bts-jungkook-korean-men-asian-k-pop-hd-wallpaper-thumb.jpg";
    r_text[17] = "https://c4.wallpaperflare.com/wallpaper/821/460/9/bts-k-pop-j-hope-wallpaper-thumb.jpg";
    r_text[18] = "https://c4.wallpaperflare.com/wallpaper/540/460/844/bts-suga-bangtan-boys-bulletproof-boy-scouts-wallpaper-thumb.jpg";
    r_text[19] = "https://c4.wallpaperflare.com/wallpaper/149/415/737/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[20] = "https://c4.wallpaperflare.com/wallpaper/162/201/143/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[21] = "https://c4.wallpaperflare.com/wallpaper/737/157/228/kpop-cocacola-bts-boy-wallpaper-thumb.jpg";
    r_text[22] = "https://c4.wallpaperflare.com/wallpaper/143/888/842/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[23] = "https://c4.wallpaperflare.com/wallpaper/787/816/871/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[24] = "https://c4.wallpaperflare.com/wallpaper/273/834/492/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[25] = "https://c4.wallpaperflare.com/wallpaper/805/525/208/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[26] = "https://c4.wallpaperflare.com/wallpaper/619/90/342/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[27] = "https://c4.wallpaperflare.com/wallpaper/951/300/843/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[28] = "https://c4.wallpaperflare.com/wallpaper/648/961/96/music-bts-suga-singer-wallpaper-thumb.jpg";
    r_text[29] = "https://c4.wallpaperflare.com/wallpaper/179/295/758/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[30] = "https://c4.wallpaperflare.com/wallpaper/610/350/327/bts-jungkook-jin-bts-jhope-wallpaper-thumb.jpg";
    r_text[31] = "https://c4.wallpaperflare.com/wallpaper/94/252/978/bts-jin-bts-jhope-jungkook-wallpaper-thumb.jpg";
    r_text[32] = "https://c4.wallpaperflare.com/wallpaper/43/455/700/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[33] = "https://c4.wallpaperflare.com/wallpaper/556/502/439/suga-agust-d-bts-hd-wallpaper-thumb.jpg";
    r_text[34] = "https://c4.wallpaperflare.com/wallpaper/111/832/912/agust-d-suga-bts-hd-wallpaper-thumb.jpg";
    r_text[35] = "https://c4.wallpaperflare.com/wallpaper/432/84/990/music-bts-wallpaper-thumb.jpg";
    r_text[36] = "https://c4.wallpaperflare.com/wallpaper/460/580/20/music-bts-boy-k-pop-korean-hd-wallpaper-thumb.jpg";
    r_text[37] = "https://c4.wallpaperflare.com/wallpaper/180/870/472/bts-bangtan-boys-park-ji-min-jimin-wallpaper-thumb.jpg";
    r_text[38] = "https://c4.wallpaperflare.com/wallpaper/35/179/829/jungkook-bts-k-pop-wallpaper-thumb.jpg";
    r_text[39] = "https://c4.wallpaperflare.com/wallpaper/422/361/88/bts-k-pop-j-hope-wallpaper-thumb.jpg";
    r_text[40] = "https://c4.wallpaperflare.com/wallpaper/485/394/364/bts-kim-seok-jin-wings-anime-style-wallpaper-thumb.jpg";
    r_text[41] = "https://c4.wallpaperflare.com/wallpaper/757/166/351/music-bts-hd-wallpaper-thumb.jpg";
    r_text[42] = "https://c4.wallpaperflare.com/wallpaper/487/175/816/v-bts-tae-men-asian-wallpaper-thumb.jpg";
    r_text[43] = "https://c4.wallpaperflare.com/wallpaper/130/890/416/bts-jungkook-korean-men-asian-k-pop-hd-wallpaper-thumb.jpg";
    r_text[44] = "https://c4.wallpaperflare.com/wallpaper/692/956/870/bts-v-bts-anime-boys-hd-wallpaper-thumb.jpg";
    r_text[45] = "https://c4.wallpaperflare.com/wallpaper/673/152/907/auto-art-bts-bangtan-boys-wallpaper-thumb.jpg";
    r_text[46] = "https://c4.wallpaperflare.com/wallpaper/171/620/905/bangtan-boys-min-sonyeondan-wallpaper-thumb.jpg";
    r_text[47] = "https://c4.wallpaperflare.com/wallpaper/641/37/302/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[48] = "https://c4.wallpaperflare.com/wallpaper/421/610/488/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[49] = "https://c4.wallpaperflare.com/wallpaper/960/83/730/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[50] = "https://c4.wallpaperflare.com/wallpaper/655/224/1000/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[51] = "https://c4.wallpaperflare.com/wallpaper/986/117/303/kpop-bts-taken-wallpaper-thumb.jpg";
    r_text[52] = "https://c4.wallpaperflare.com/wallpaper/859/774/552/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[53] = "https://c4.wallpaperflare.com/wallpaper/984/284/854/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[54] = "https://c4.wallpaperflare.com/wallpaper/93/15/617/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[55] = "https://c4.wallpaperflare.com/wallpaper/542/248/954/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[56] = "https://c4.wallpaperflare.com/wallpaper/677/186/375/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[57] = "https://c4.wallpaperflare.com/wallpaper/367/522/389/music-bts-jimin-singer-wallpaper-thumb.jpg";
    r_text[58] = "https://c4.wallpaperflare.com/wallpaper/648/961/96/music-bts-suga-singer-wallpaper-thumb.jpg";
    r_text[59] = "https://c4.wallpaperflare.com/wallpaper/1005/952/58/music-bts-wallpaper-thumb.jpg";
    r_text[60] = "https://c4.wallpaperflare.com/wallpaper/247/829/170/music-bts-j-hope-singer-jimin-singer-wallpaper-thumb.jpg";
    r_text[61] = "https://c4.wallpaperflare.com/wallpaper/432/84/990/music-bts-wallpaper-thumb.jpg";
    r_text[62] = "https://c4.wallpaperflare.com/wallpaper/344/953/312/music-bts-wallpaper-thumb.jpg";
    r_text[63] = "https://c4.wallpaperflare.com/wallpaper/340/454/416/music-bts-wallpaper-thumb.jpg";
    r_text[64] = "https://c4.wallpaperflare.com/wallpaper/882/288/982/music-bts-jeon-jungkook-jungkook-singer-wallpaper-thumb.jpg";
    r_text[65] = "https://c4.wallpaperflare.com/wallpaper/832/236/1013/music-bts-rm-singer-wallpaper-thumb.jpg";
    r_text[66] = "https://c4.wallpaperflare.com/wallpaper/882/286/352/music-bts-wallpaper-thumb.jpg";
    r_text[67] = "https://c4.wallpaperflare.com/wallpaper/558/505/136/music-bts-wallpaper-thumb.jpg";
    r_text[68] = "https://c4.wallpaperflare.com/wallpaper/610/350/327/bts-jungkook-jin-bts-jhope-wallpaper-thumb.jpg";
    r_text[69] = "https://c4.wallpaperflare.com/wallpaper/113/128/943/agust-d-bts-suga-hd-wallpaper-thumb.jpg";
    r_text[70] = "https://c4.wallpaperflare.com/wallpaper/505/337/96/bts-jimin-soap-bubbles-field-wallpaper-thumb.jpg";
    r_text[71] = "https://c4.wallpaperflare.com/wallpaper/217/530/477/bts-park-ji-min-redhead-korean-korean-men-hd-wallpaper-thumb.jpg";
    r_text[72] = "https://c4.wallpaperflare.com/wallpaper/984/284/854/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[73] = "https://c4.wallpaperflare.com/wallpaper/996/454/511/bangtan-boy-boys-bts-wallpaper-thumb.jpg";
    r_text[74] = "https://c4.wallpaperflare.com/wallpaper/471/136/1008/bangtan-boy-boys-bts-wallpaper-thumb.jpg"; 
      
    var i = Math.floor(75*Math.random())   

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, caption: '_*🐱W5-BOT🤖*_'})

    }));
}  
