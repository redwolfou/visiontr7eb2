const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("535461700225204235");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**:Yoo: WelcomE  `×` To `×` Outside , ! :8631_HyperHeart:  **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء