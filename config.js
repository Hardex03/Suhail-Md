const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042952332";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia202NG1UdWtpVUJ3QzU4eG9wb0ZNV3VKTjVGQUp5OWxEWHhhNlU4VmlPZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQyOTUyMzMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNEM2Mzg5QzZDREI4NEYyNDg5RTMzNUNFRjY5NjdCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5MzA0MzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaEpsWVlQV0NSRHlUb0FfX0FEeFQ5QVwiLFxuICBcInBob25lSWRcIjogXCJkZGI5OTExMS1kMGZlLTRlZjQtYmM1Yi1mYmRlYTc5YTI3YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjMxLFxuICAgICAgNTgsXG4gICAgICAxODMsXG4gICAgICAyMzcsXG4gICAgICAyMTMsXG4gICAgICAxNjEsXG4gICAgICAxMzUsXG4gICAgICAyMjMsXG4gICAgICAyMTcsXG4gICAgICA1MixcbiAgICAgIDI0MyxcbiAgICAgIDk3LFxuICAgICAgMTA4LFxuICAgICAgMzUsXG4gICAgICAyNDcsXG4gICAgICAyNTUsXG4gICAgICAxODMsXG4gICAgICAxNDYsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgNDYsXG4gICAgICAyMDUsXG4gICAgICAyMzcsXG4gICAgICAyMTMsXG4gICAgICAxNDYsXG4gICAgICAyMSxcbiAgICAgIDE2NixcbiAgICAgIDkxLFxuICAgICAgNDAsXG4gICAgICAyMzUsXG4gICAgICAxMTEsXG4gICAgICAyMyxcbiAgICAgIDE2NyxcbiAgICAgIDE0NCxcbiAgICAgIDIyLFxuICAgICAgMTMsXG4gICAgICAyNDEsXG4gICAgICA2NyxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldLSk1GQzNHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyOTUyMzMyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkwNTc4Nzk3Nzc1MzoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbXBscTBERVBPTzJiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjg1ZzIzb2VoaUxpWFJYQlBtYlY2eFpVcGNhTi9DMllkSWk0dWI5eDcvSGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmhTTkNPWmJPZ1NORnNYVk9UdkNKMUdHc2FNN28yV1lQem1VT0ZJd3ZSd0p6M091ZE5MQnFZM0RNT1BPbDYrRXJEbTJzc0VTN3BmV2lkNkRyYVhnQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGlxd0VMbnJvM3FmVEE3aENDYW1BL3JEVEEzTEpXOVZndG9ZUGhNQkExWnM3RDNaR1pMUDJGM3J3OXdaRUpkTWtWa1luUzVCY1BhdDBtTFFlZ0pqanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0Mjk1MjMzMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkzMDQyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxOcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE5wLmpzb24iOiAie1wia2V5RGF0YVwiOlwicGMzUTdWaXVkTGVmR2FUVVRSd2xCVTRVaHYyNGdoVGhjS2RzQVkxeDUxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDAwNDM5NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
