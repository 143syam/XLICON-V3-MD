
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      // 
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : XLICON-V3-MD
 //  * @author : syam~ser
 //  * @youtube : nill
//   * @description : XLICON-V3 ,A Multi-functional whatsapp user bot.
//*
//* 
//base by syam~ser
//re-upload? recode? copy code? give credit ya :)
//Instagram: _mr.fro_ud_
//Telegram: nill
//GitHub: @syam~ser
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: nill
//   * Created By Github: syam.
//   * Credit To Syam
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT : NILL" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "INSTAGRAM : _mr.fro_ud_" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "India, Kerala, Palakkad" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || '🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '13025449902' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https: nill"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VaIUDfsGehEFB7m8rh2Q"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🏮'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "© 〄〘 𝑩𝒀 𝑺𝒀𝑨𝑴_𝑺𝑬𝑹 😚♥️ 〙 〄          
           〘ㅤ Since 2007 ㅤ〙"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'THEKOOT NOKI NINO' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "ᗰᗩᗪE ᗷY 🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "13035449902@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["13025449902,919947121619"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v4' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '212' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '212' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*HAM UMFII💀❌*_',
    success: '_*AAH CHAMBHIKKO✅!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./XliconMedia/theme/xliconpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
