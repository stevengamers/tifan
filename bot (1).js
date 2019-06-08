const Discord = require('discord.js');
const Util = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const coins = require("./coins.json")
const devs = ["348143440405725184", "523836549390139392", "569841293837074432", "476503634411257858", "505423733230534656", "511260487397408768"]; //test
const emojis = '566320808121729088';


const client = new Discord.Client({disableEveryone: true});


client.on('ready', () => {
    setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
});
;
const client2 = new Discord.Client({disableEveryone: true});
const prefix = "."
 
 
 
 
// quran package
const ytdl = require('ytdl-core');
const yt = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const YouTube = require('simple-youtube-api');
const gyp = require("node-gyp");
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const queue = new Map();
//
 
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nikonbote.glitch.me/`);
}, 280000);
 
 
 
 
 
 
/*var con = mysql.createConnection({
  host: "sql3.freemysqlhosting.net",
  user: "sql3291259",
  password: "J4Acw4fEwC"
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/
 
 
// http://expressjs.com/en/starter/basic-routing.html
 
 
 
 
client.commands = new Discord.Collection();
 
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
 
  jsfile.forEach((f) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});client.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
}
 jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  client.commands.set(props.help.name, props);
  });
});
 
client.on("message", message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = ".";
 
 
  //checks if message contains a command and runs it
  let commandfile = client.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
})
 
   
client.on("message", msg =>{
var args = msg.content.split(" ").slice(1).join(" ")
if(!args) return;
if(msg.content.startsWith(prefix+"setIcon")) {
msg.guild.setIcon(args)
 .then(msg.reply("**Done ✅ **"))
 .catch(console.error);
}else if(msg.content.startsWith(prefix+"setName")) {
    msg.guild.setName(args)
 .then(g => msg.reply(`**Updated guild name to ${g} :white_check_mark:**`))
 .catch(console.error);
}
});
 
client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("574957435807203348");
 
 
   
    let joinEmbed = new Discord.RichEmbed()
      .setThumbnail(guild.iconURL)
      .setAuthor(`NikonBot. Joined A Server ✅`)
      .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
     
    guildCreateChannel.send(joinEmbed);
 
});
 
client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("574957460511653888");
 
  let leaveEmbed = new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
  .setAuthor(`NikonBot. left A Server ❎`)
  .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
  guildCreateDelete.send(leaveEmbed);
});
 
 
client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`NikonBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
}
});
 
 
 
 
 
client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
 
    if(message.content === ".support")
    message.channel.send(`${em1} | **Server Support** : \nhttps://discord.gg/P96Cjzh `)
});
   
client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
   
 
    if(message.content === ".invite" || message.content === ".inv")
    message.channel.send(`${em1} | **Bot Invite** : \nhttps://discordapp.com/api/oauth2/authorize?client_id=574939069084205066&permissions=8&scope=bot`)
});
 
 
client.on('ready',  () => {
 
 
    console.log('~ Bot On !  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
 
 
client.on('message', message => {
 
  let command = message.content.toLowerCase().split(' ')[0];
    command = command.slice(prefix.length)
    if (message.channel.type !== 'text') return;
if (command === 'server' || command === "guild") {
    let emoji = {
        online: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Bot')}`
  }
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`**You Don't Have Enough Permissions**.`).then(msg => msg.delete(3000));
    message.guild.fetchBans().then(bans => {
      var bansSize = bans.size;
     
      var server = new Discord.RichEmbed()
     
      .setDescription (`• **Some Info About __${message.guild.name}__**
**\`\`\`js
Server ID : (${message.guild.id})
AFK Room : (${message.guild.afkChannel || "I Can't Find It"})\`\`\`** `)
      .addField(`• **__Server Owner__**`, `**↝** [ **${message.guild.owner}** ]`)
      .addField(`• **__Server Type__**`, `**↝** [ ** ${message.guild.region}** ]`, true)
      .addField(`• **__Server Created At__**`, `**↝ **[ **${moment(message.guild.createdAt).format("LL")}** ]`, true)
      .addField(`• **__Roles Amount__**`, `**↝** [ **${message.guild.roles.size}** ]`, true)
      .addField(`• **__Channels__**`, `**↝ \`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}**`, true)
      .addField(`• **__Bans Amount__**`, `**↝** [ **${bansSize}** ]`, true)
      .addField(`• **__Last Member__**`, `**↝** [ **${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}** ]`, true)
      .addField(`• **__Members__**`, `**↝ ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n↝ ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\`**`, true)
        .setFooter('Requested By : ' + message.author.username,message.author.displayAvatarURL)
      .setTimestamp()
      .setColor('#36393e')
      .setThumbnail(message.guild.iconURL)
      message.channel.send(server)
 
    })
}
 
});
   
 
 
client.on('message', async message => {
if (message.content != prefix + "ping") return undefined;
  var pingEmbed = new Discord.RichEmbed()
  .setColor(message.guild.me.displayHexColor)
  .setAuthor(`${client.user.username} Connection Info;`,client.user.displayAvatarURL)
  .setFooter('Requested By : ' + message.author.username,message.author.displayAvatarURL)
  .setTimestamp();
  var awaited = await message.channel.send({embed: pingEmbed
                                           .setDescription(`${message.author} | pinging :sparkles:`)
                                           });
  awaited.edit({embed: pingEmbed
              .setDescription(`\`\`\`apache\nWebsocket; ${Math.floor(client.ping)}\nTimetaken; ${Math.floor(Date.now() - message.createdTimestamp)}\`\`\`
`)
               });
  });
 
 
 
 
 
client.on('message', dark => {
       let servers = client.guilds.size;
       var users = client.users.size;
       var channels = client.channels.size;
       var name = client.user.username;
       let pretty = require('pretty-ms');
       let cpu = require('cpu');
       let stackos = require('stackos').info;
       var owners = ["<@!569841293837074432> `[Owner]`\n<@!476503634411257858> `[Dev]`\n<@523836549390139392> `[Dev]`\n<@416231778366390272> `[Dev]`"]
    let command = dark.content.toLowerCase().split(' ')[0];
    command = command.slice(prefix.length)
    if (dark.content === ".bot" || dark.content === ".stats") {
 
      var night = new Discord.RichEmbed()
       
       .setColor('#36393e')
     
       .setDescription(`** → ℹ Bot Information**
**\`\`\`js
BotName : ${name}
Bot Ping : ${Date.now() - dark.createdTimestamp} MS
Uptime : ${pretty(client.uptime, { verbose: true })}\`\`\`**`)
     
       .addField('→ General Info :' , `⇏ __**Servers**__ : ${servers} \n⇏ __**Users**__ : ${users} \n⇏ __**Channels**__ : ${channels}` , true)
 
       .addField('→ Deving Info :' , `⇏ __**Node**__ :${process.version} \n⇏ __**CPU**__ : ${Math.round((process.cpuUsage().user + process.cpuUsage().system) / 2048)} MB ( ${cpu.num()} % ) \n⇏ __**Platform**__ : ${stackos.os} ( ${stackos.arch} Bit ) \n⇏ __**Procsser**__ : ${(stackos.cpus.model).split("(R)")[1]} ( ${stackos.cpus.cores} Cores ) \n⇏ __**Discord Version**__ : ${require('./package.json').dependencies["discord.js"].replace('^', '') + ' v'} \n⇏ __**Ram Usage**__ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB ` , true)
     
       .addField('→ Bot Devs :' , `${owners}`)
        .setFooter('Requested By : ' + dark.author.username ,dark.author.displayAvatarURL)
      .setTimestamp()
      dark.channel.send(night)
    }
});
 
client.on('message', message => {
    if (!message.channel.guild) return;
    let emoji = {
        online: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Bot')}`
    }
    if (message.content.startsWith(prefix + 'fm')) {
        var Nikon = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('✽ Filter Members', `» ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(Nikon);
    }
});
 
 
 
 
 
client.on('message', message => {
  let emoji = {
        right: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'right')}`,
        wrong: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'wrong')}`,
        no: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'load')}`
     
    }
 
if(message.author.bot) return
  var command = message.content.split(" ")[0];
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.channel.send(``);
   const guild = message.guild;
   
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`${emoji.no} | **You Don't Have Enough Permissions**.`);
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`${emoji.wrong} | **I Don't Have Enough Permissions**.`);
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send(`${emoji.load} | **Mention A Member**.`);
  if (!message.guild.member(user).kickable) return message.channel.send(`${emoji.load} | **I Can't Give Him Kick Because His Rank Is Higher More Than Me**.`);
if (user.id == message.guild.ownerID) return message.channel.send(`${emoji.no} |** How I Can Give The OwnerShip Kick. **`)
    message.channel.send(`**${emoji.right} | ${user.tag} He Take Kick By : <@${message.author.id}> ! :airplane:** `)
  message.guild.member(user).kick(reason)
  guild.owner.send(`Server : ${guild.name}
**Done Kicked** :${user.tag}  
**By** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
});
 
client.on('message', async message =>{
        let emoji = {
        right: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'right')}`,
        wrong: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'cd')}`,
        no: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'load')}`
     
    }
    if (message.author.boss) return;
      var prefix = ".";
 
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
              if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **You Don't Have Enough Permissions**.`).then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **I Don't Have Enough Permissions**`).then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply(`${emoji.load} | **Please Make A Role With Name __\`\`Muted\`\`__`).then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply(`$[emoji.load} | **Mention A Member**.`).then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} You Took Mute
  ${message.author.tag} By
  [ ${reason} ] : Reason
  `)
          .setFooter(`In : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage(`${emoji.cd} | **You Don't Have Enough Permissions**.`).then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **I Don't Have Enough Permissions**.`).then(msg => msg.delete(6000))
 
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage(`${emoji.load} | **Mention A Member**.`);
 
    let role = message.guild.roles.find (r => r.name === "Muted");
   
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`**He Didn't Take A Mute Before**.`)
 
    await toMute.removeRole(role)
    message.channel.sendMessage(`${emoji.right} | **Done**.`);
 
    return;
 
    }
 
  });
   
 
 
 
 
 
client.on('message', message => {
  let emoji = {
        right: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'right')}`,
        wrong: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'wrong')}`,
        no: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'load')}`
     
    }
  if (message.author.codes) return;
 
 
  let command = message.content.split(" ")[0];
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":information_source: | **You Don't Have Enough Permissions**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(":information_source: | **I Don't Have Enough Permissions**");
  let user = message.mentions.users.first();
 
  if (message.mentions.users.size < 1) return message.channel.send(`${emoji.load} | **Mention A Member**. `);
  if (!message.guild.member(user)
  .bannable) return message.channel.send(`${emoji.load} | **I Can't Give Him Kick Because His Rank Is Higher More Than Me**.`);
 
 
  message.guild.member(user).ban(7, user);
 
message.channel.send(`**${emoji.right} |  ${user.tag} banned from the server ! :airplane: **  `)
 
}
});
 
 
 
client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let t = [':white_check_mark:'];
    let f = [':x:'];
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    let request = require('snekfetch');
    if (command === `.npm`) {
        // https://www.npmjs.com/package/snekfetch
        if (!args[0]) return message.channel.send(`**${f} | Specify an arg to search for in npmjs.com.**`);
        let url = args.includes(" ") ? args.replace(" ", "-") : args;
        url = `https://registry.npmjs.com/${url[0].toLowerCase()}`;
        request.get(url).then(r => {
                message.channel.send(new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png")
                    .setTitle(`❯ \`${args[0]}\`.`)
                    .setColor("#000")
                    .addField("» **Version**", `- ${r.body['dist-tags'].latest}`, true)
                    .addField("» **License**", `- ${r.body.license}`, true)
                    .addField("» **Homepage**", `- [\`Click Here\`](${r.body.homepage})`, true)
                    .addField("» **Description**", `- ${r.body.description || "- Without description."}`, true)
                    .addField("» **Contributors**", `- ${r.body.contributors ? r.body.contributors.map(r => r.name).join(', ') : "None"}`, true)
                    .addField("» **Keyboards**", `- ${r.body.keywords ? r.body.keywords.map(r => r).join(', ') : "None"}`, true));
            })
            .catch(e => {
                if (e) message.channel.send(`**${f} |  Couldn't find the package \`${args[0]}\` .**`);
                if (e) console.log(e.message);
            });
    }
});
 
client.on('message' , DâRK => { //Coded By Narox & DâRKNîghT#1001
 //prefix bot
    let online = client.guilds.get("569987960989155340").emojis.find(r => r.name === "Online");
      if(DâRK.content.startsWith(`<@${client.user.id}>`)) //id bot
       var Dark = new Discord.RichEmbed()
      .setColor('#36393e')
      .setDescription(`Hey Im **${client.user.username}! ${online}
\`\`\`My Prefix : .
MyID : ${client.user.id}\`\`\`**`)
      .addField('• **__Try To Use__**' , `\`.help\`` ,true)
      .addField('• **__Add Bot__**' , `[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=574939069084205066&permissions=8&scope=bot)` ,true)
      .addField('• **__Support Server__**' , `[Support Server](https://discord.gg/P96Cjzh)` ,true)
      .setFooter('Reqused By : ' + DâRK.author.username, DâRK.author.avatarURL)
       .setTimestamp()
      DâRK.channel.send(Dark)
  });
 
client.on('ready', function() {
     
   // const statuslist = [
     // `.help | ${client.guilds.size} Servers`,
     // `.help | ${client.channels.size} Channels`,
     // `.help | ${client.users.size} Users`
   // ];
  //  const random = Math.floor(Math.random() * statuslist.length);/
 
    try {
       client.user.setPresence({
        game: {
          name: `Ramadan 🌙 | ${prefix}help`,
          type: "WATCHING",
          url: "https://www.twitch.tv/murtajaziad"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
 
});
 
 
client.on('message', message => {
 if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
 
  let coinAmt = Math.floor(Math.random() * 12) + 1;
  let baseAmt = Math.floor(Math.random() * 12) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);
 
  if(message.author.bot) return;
  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(baseAmt)
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
 
  }      
});
 
client.on('message', message => {
         if(message.content.startsWith(prefix + "cadd")) {
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
 if(isNaN(args1[0])) return message.reply("This is not a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(args1)
    };  
 
message.channel.send(`You added __${args1}__ NCoins and now you have __${coins[message.author.id].coins}__**.**`)
     }  
})
 
client.on('message', message => {
         if(message.content.startsWith(prefix + "cremove")) {
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
 if(isNaN(args1[0])) return message.reply("This is not a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins - parseInt(args1)
    };  
 
message.channel.send(`You removed __${args1}__ NCoins and now you have __${coins[message.author.id].coins}__**.**`)
     }  
})
 
client.on('message', message => {
         if(message.content.startsWith(prefix + "cset")) {
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
 if(isNaN(args1[0])) return message.reply("This is not a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins = parseInt(args1)
    };  
 
message.channel.send(`You set you NCoins to __${coins[message.author.id].coins}__**.**`)
     }  
})
 
 
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
 
 
 
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const setc = require("./setc.json")
const setrole = require("./setrole.json")
let tchannels  = [];
let current    = 0;
/*client.on("message", message => {
  let args = message.content.split(" ");
  if(message.content === prefix + 'mtickets')
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
        if(args[1] && args[1].toLowerCase() === "enable") {
            mtickets = true;
            message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
        } else if(args[1] && args[1].toLowerCase() === "disable") {
            mtickets = false;
            message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
        } else if(!args[1]) {
            if(mtickets === true) {
            mtickets = false;
            message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
            } else if(mtickets === false) {
            mtickets = true;
            message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
            }
        }
})
*/
 
client.on("message", async message => {
   
   
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
    if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
        const category = setc[message.guild.id].category
        let newcategory = message.content.split(' ').slice(1).join(' ');
        let thiscategory = message.guild.categories.find('name', newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor(embedFail);
    if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor(embedFail);
    if(!newcategory) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
        if(!thiscategory) return message.channel.send(CANT);
    const filtr = new Discord.RichEmbed()
     .setDescription(`:x: This not a category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
        if(fltrc) return message.channel.send(filtr);
      setc[message.guild.id].category = newcategory
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor(embedSuccess);
    message.channel.send(D1);
       
    }
});
 
 
 
client.on("message", async message => {
         
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
    if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
 
        const role = setrole[message.guild.id].role
        let newrole = message.content.split(' ').slice(1).join(' ');
        let thisrole = message.guild.roles.find('name', newrole);
        let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
         const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor(embedFail);
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor(embedFail);
    if(!newrole) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this role \`\`${newrole}\`\``)  
     .setColor(embedFail);
        if(!thisrole) return message.channel.send(CANT);
      setrole[message.guild.id].role = newrole 
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor(embedSuccess);
    message.channel.send(D1);
       
    }
});
 
client.on("message", async message => {
     
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' ');
  var numbers = [1, 2, 3, 4];
   //let ticketnumber = message.author.username
   current++;
    if(!subject[0]){
           
                 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\` | Or do \`\`.setrole rolename\`\``)  
     .setColor(embedFail);         
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
        ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
   
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , `No subject has been given`)
     .setColor(embedColor)
     .setFooter(`NikonBot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
    }
   
 
 
 if(subject[0]){
           
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor(embedFail);         
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
           ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , subject)
     .setColor(embedColor)
     .setFooter(`NikonBot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
      }  
}
 
if(message.content.toLowerCase().startsWith(prefix + `close`)) {   
 
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor(embedFail);
   
         const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor(embedFail);
    if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
     const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor(embedColor);
 
    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '.close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
       .catch(() => {
          const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor(embedFail);
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
 
});
                       
client.on('message', message => {
  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed4 });
    return
    }
    const nothere = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField('NikonBot.', 'Please Mention a User Or Bot');
   
    let addedmember = message.mentions.members.first();
    if (!addedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`NikonBot.`, '**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed5 });
 
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed6 });
    return
    }
    const nothere = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField('NikonBot.', 'Please Mention a User Or Bot');
    let removedmember = message.mentions.members.first();
    if (!removedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`NikonBot.`, '**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed7 });
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `forceclose`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
   
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.delete()
    }
 
      if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
 
        let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
        var args = message.content.split(' ');
    if (!message.channel.name.startsWith(`ticket-`)) {
     
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.setName(`ticket-${args[1]}`)
        var donere = new Discord.RichEmbed()
        .setColor(embedSuccess)
        .addField('NikonBot.', `\`${args[1]}\` تم تغيير اسم الروم الى`)
      message.channel.send(donere)  
      }                    
 
})
 
 
client.on("message", message => {
    var args = message.content.split(' ').slice(1);
 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
  let roleremove = new Discord.RichEmbed()
  .setDescription(`
  أمثله على الأوامر :
  .roleremove @mention rolename : لسحب رتبة لعضو معين
  .roleremove all rolename : لسحب رتبة للجميع
  .roleremove humans rolename : لسحب رتبة للاشخاص فقط
  .roleremove bots rolename : لسحب رتبة لجميع البوت`);
  let roleadd = new Discord.RichEmbed()
   .setDescription(`**Role Add :
\`\`\`JS
.role @mention <RoleName> : To Give A Rank To One Member Only,
.role all <RoleName> : To Give A Rank To All,
.role bots <RoleName> : To Give A Rank To All Bots Only,
.role humans <RoleName> : To Give A Rank To All Humans Only.\`\`\`**`)
    if( !msg.startsWith('.role')) return;
          if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
              if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But I Dont Have Permission** `MANAGE_GUILD`' );
 
 
    if( msg.toLowerCase().startsWith('fvfgdf' )){ // ....محد يغيره
        if( !args[0] ) return message.channel.send(roleremove);
        if( !args[1] ) return message.channel.send(roleremove);
 //if(!message.guild.channel) return message.reply("hi")
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.channel.send(roleremove);if( message.mentions.members.first() ){
 
            message.mentions.members.first().removeRole( role1 );
            //return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
 
      const e = new Discord.RichEmbed()
   
     
             .setDescription(':white_check_mark:** Change Role For **'+args[0]+'**,** '+'**'+'-'+'`'+role1.name+'`'+'**')
             .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
             .setColor('BLACK')
              message.channel.send(e)
        }
        if( args[0].toLowerCase() == "all" ){
 
      const e1 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`All\`\`**,** '+'**'+'-'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.channel.send(e1)
        } else if( args[0].toLowerCase() == "bots" ){
 
      const e2 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`Bots\`\`**,** '+'**'+'-'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.channel.send(e2)
        } else if( args[0].toLowerCase() == "humans" ){
 
      const e3 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`Humans\`\`**,** '+'**'+'-'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.channel.send(e3)
        }  
    } else {
        if( !args[0] ) return message.channel.send(roleadd);
        if( !args[1] ) return message.channel.send(roleadd);
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.channel.send(roleadd);if( message.mentions.members.first() ){
 
            message.mentions.members.first().addRole( role1 );
            //return message.reply(`**:white_check_mark: \`\`[ ${role1.name} ]\`\` رتبة \`\`[ ${args[0]} ]\`\` لقد تم اعطاء **`);
     const e = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **'+args[0]+'**,** '+'**'+'+'+'`'+' '+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
     
     
   
     
    }
      if( args[0].toLowerCase() == "all" ){
 
       const e1 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`All\`\`**,** '+'**'+'+'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.channel.send(e1)
        } else if( args[0].toLowerCase() == "bots" ){
 
      const e2 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`Bots\`\`**,** '+'**'+'+'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.channel.send(e2)
        } else if( args[0].toLowerCase() == "humans" ){
 
       const e3 = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Change Roles For **\`\`Humans\`\`**,** '+'**'+'+'+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.channel.send(e3)
        }
    }
});
 
client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
      if (args > 99) return message.reply("**🛑 || The Number Must To Be Less Than 100.**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages))
   const embed = new Discord.RichEmbed()
      .setColor(embedSuccess)
      .setDescription(`Cleared \`\`${args}\`\` messages.`);
    message.channel.send(embed).then(messages => messages.delete(5000));
  }
  })
 
client.on('message', function(message) {
  if(message.author.bot) return;
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('``NEW MESSAGE!!``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("576078834420547597").send({embed:Dark});
    }
});
 
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + `topservers`)) {
 
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
       message.channel.send(`**⇏ Top 10 Servers: **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`)
        }
});
 
 
 
 
 
 
 
 
 
 
 
const log = JSON.parse(fs.readFileSync('./log.json' , 'utf8'));
//Perfect log Code
client.on('message', message => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    let room = message.content.split(" ").slice(1);
   
    if(message.content.startsWith(prefix + "setlog")) {
if (message.author.bot) return;
        if(!message.channel.guild) return message.reply('**This Command is Just For Servers!**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if (!room) return message.channel.send('Please Type The Channel Name')
 
let embed = new Discord.RichEmbed()
.setDescription(`${em1} | **Done
\`\`\`js
Channel : ${room}\`\`\`**`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
log[message.guild.id] = {
channel: room,
onoff: 'On'
}
fs.writeFile("./log.json", JSON.stringify(log), (err) => {
if (err) console.error(err)
})
    }
})
 
client.on('message', message => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    if(message.content.startsWith(prefix + "logtoggle")) {
if (message.author.bot) return;
        if(!message.channel.guild)
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!log[message.guild.id]) log[message.guild.id] = {
          onoff: 'Off'
        }
          if(log[message.guild.id].onoff === 'Off') return [message.channel.send(`${em1} | **The Log Has been activated**`), log[message.guild.id].onoff = 'On']
          if(log[message.guild.id].onoff === 'On') return [message.channel.send(`${em1} | **Activation canceled**`), log[message.guild.id].onoff = 'Off']
          fs.writeFile("./log.json", JSON.stringify(log), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
         
        })
 
 
client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
                        if(!log[message.guild.id]) log[message.guild.id] = {
          onoff: 'Off'
        }
    if(log[message.guild.id].onoff === 'Off') return;
    var logChannel = message.guild.channels.find(c => c.name === `${log[message.guild.id].channel}`);
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**Message Deleted**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`:wastebasket: | **There Are A Message Was Deleted In ${message.channel} (\`\`${message.channel.name}\`\`) The Message Was Sent By : <@${message.author.id}> The Message :__\`\`\`${message}\`\`\`__**`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
                        if(!log[oldMessage.guild.id]) log[oldMessage.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMessage.guild.id].onoff === 'Off') return;
    var logChannel = oldMessage.guild.channels.find(c => c.name === `${log[oldMessage.guild.id].channel}`);
    if(!logChannel) return;
 
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**Message Edited**')
   
    .setColor('BLUE')
    .setDescription(`:link: | **There Are A Link Was Sent In ${oldMessage.channel} (\`\`${oldMessage.channel.name}\`\`) The Link Was Sent By: __<@${oldMessage.author.id}>__ \`\`\`${oldMessage}\`\`\`**`)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
client.on('roleCreate', role => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[role.guild.id]) log[role.guild.id] = {
          onoff: 'Off'
        }
    if(log[role.guild.id].onoff === 'Off') return;
    var logChannel = role.guild.channels.find(c => c.name === `${log[role.guild.id].channel}`);
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**Role Created**')
        .setDescription(`${em1} | **There Is A Role Created.\nRole Name : __\`\`${role.name}\`\`__\nBy : __<@${userID}>__**`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[role.guild.id]) log[role.guild.id] = {
          onoff: 'Off'
        }
    if(log[role.guild.id].onoff === 'Off') return;
    var logChannel = role.guild.channels.find(c => c.name === `${log[role.guild.id].channel}`);
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**Role Deleted**')
        .setThumbnail(userAvatar)
        .setDescription(`${em1} | **There Is A Role Deleted.\nRole Name : __\`\`${role.name}\`\`__ \nBy: __<@${userID}>__ **`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "Load");
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[oldRole.guild.id]) log[oldRole.guild.id] = {
          onoff: 'Off'
            }
    if(log[oldRole.guild.id].onoff === 'Off') return;
    var logChannel = oldRole.guild.channels.find(c => c.name === `${log[oldRole.guild.id].channel}`);
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            if(log[oldRole.guild.id].onoff === 'Off') return;
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**Role Name Update**')
 
            .setColor('BLUE')
            .setDescription(`${em1} | **There Is A Role Its Name Was Edited.\nOld Name : __\`\`${oldRole.name}\`\`__\*New Name : __\`\`${newRole.name}\`\`__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
 
    })
});
 
 
client.on('channelCreate', channel => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[channel.guild.id]) log[channel.guild.id] = {
          onoff: 'Off'
        }
    if(log[channel.guild.id].onoff === 'Off') return;
    var logChannel = channel.guild.channels.find(c => c.name === `${log[channel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**Channel Create**')
 
        .setDescription(`${em1} | **There Is A New Channel Was Created.\nIts Type : __${roomType}__ channel.\nChannel Name : __\`\`${channel.name}\`\`__\nBy :__<@${userID}>__**`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");    
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[channel.guild.id]) log[channel.guild.id] = {
          onoff: 'Off'
        }
    if(log[channel.guild.id].onoff === 'Off') return;
    var logChannel = channel.guild.channels.find(c => c.name === `${log[channel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**channel Deleted**')
 
        .setDescription(`${em1} | **There Is A Channel Was Deleted.\nIts Type : __${roomType}__ channel.\nChannel Name : __\`\`${channel.name}\`\`__\nBy : __<@${userID}>__**`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "load");
    if(!oldChannel.guild) return;
            if(!log[oldChannel.guild.id]) log[oldChannel.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldChannel.guild.id].onoff === 'Off') return;
    var logChannel = oldChannel.guild.channels.find(c => c.name === `${log[oldChannel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**Channel Edited**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`${em1} | **There Is A Channel Was Edited\nIts Type : __${channelType}__ \nChannel Name\nOld Name : __\`\`${oldChannel.name}\`\`__\nNew Name : __\`\`${newChannel.name}\`\`__\nBy : __<@${userID}>__ **`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
 
    })
});
 
 
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[guild.guild.id]) log[guild.guild.id] = {
          onoff: 'Off'
        }
    if(log[guild.guild.id].onoff === 'Off') return;
    var logChannel = guild.channels.find(c => c.name === `${log[guild.guild.id].channel}`);
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**Ban**')
        .setColor('DARK_RED')
        .setDescription(`:airplane: | **__${user.username}__ Took Ban From the server!\nUser : __<@${user.id}>__ By : __<@${userID}>__**`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
   
})});
 
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   if(!log[guild.guild.id]) log[guild.guild.id] = {
          onoff: 'Off'
        }
    if(log[guild.guild.id].onoff === 'Off') return;
    var logChannel = guild.channels.find(c => c.name === `${log[guild.guild.id].channel}`);
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**UnBan**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`:unlock: | **__${user.username}__ UnBan From the server\nUser : __<@${user.id}>__\nBy : __<@${userID}>__**`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
                if(!log[oldGuild.guild.id]) log[oldGuild.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldGuild.guild.id].onoff === 'Off') return;
    var logChannel = oldGuild.channels.find(c => c.name === `${log[oldGuild.guild.id].channel}`);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**Change Guild Name**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`${em1} | **Guild Name Was Changed.\nFrom : __\`\`${oldGuild.name}\`\`__\nTo : __\`\`${newGuild.name}\`\`__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            if(log[newGuild.regon.guild.id].onoff === 'Off') return;
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**Change Guild Regin**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`:earth_asia: | **The Guild Regin Was Changed\nFrom : __${oldGuild.region}__\nTo : __${newGuild.region}__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    if(!oldMember.guild) return;
                if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMember.guild.id].onoff === 'Off') return;
    var logChannel = oldMember.guild.channels.find(c => c.name === `${log[oldMember, newMember.guild.id].channel}`);
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
 
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
                            if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember.guild.id].onoff === 'Off') return;
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**Role Add**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`${em1} | **__${oldMember.user.username}__ Took A Role\nUser : __<@${oldMember.id}>__ \nRole : __\`\`${role.name}\`\`__ \nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
                            if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**Role Remove**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`${em1} | **__${oldMember.user.username}__ Removed From Him A Role\nUser : __<@${oldMember.user.id}>__ \nRole : __\`\`${role.name}\`\`__ \nBy : __<@${userID}>__ **`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
                    if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
        if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
        let newOwner = new Discord.RichEmbed()
        .setTitle('**Guild Owner**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`${em1} | **The OwnerShip Was Transfered.\nFrom : __<@${oldMember.user.id}>__ \nTo : __<@${newMember.user.id}>__**`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
 
 
client.on('guildMemberAdd', member => {
        let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    if(!member.guild) return;
                if(!log[member.guild.id]) log[member.guild.id] = {
          onoff: 'Off'
        }
    if(log[member.guild.id].onoff === 'Off') return;
    var logChannel = member.guild.channels.find(c => c.name === `${log[member.guild.id].channel}`);
    if(!logChannel) return;
 
    let fsf = new Discord.RichEmbed();
 fsf.setTimestamp();
 fsf.setColor('#056320');
fsf.setTitle('**Member Joined**')
  fsf.setAuthor(member.author.tag,member.author.avatarURL)
 fsf.setThumbnail(member.user.displayAvatarURL);
 fsf.addField(`${em1} | **Members Count** `,member.guild.members.size);
 fsf.addField(`Joined Discord From :`, `\`${moment(member.user.createdAt).format('D/M/YYYY h:m A')}\` \n**${moment(member.user.createdAt).locale("eg-eg").fromNow()}**`, true);
 logChannel.send(fsf)
});
 
 
 
client.on('guildMemberRemove', member => {
let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    if(!member.guild) return;
                if(!log[member.guild.id]) log[member.guild.id] = {
          onoff: 'Off'
        }
    if(log[member.guild.id].onoff === 'Off') return;
    var logChannel = member.guild.channels.find(c => c.name === `${log[member.guild.id].channel}`);
    if(!logChannel) return;
    let fsff = new Discord.RichEmbed();
 fsff.setTimestamp();
  fsff.setTitle('**Member Left**')
 fsff.setColor('#bc1010');
  fsff.setAuthor(member.author.tag,member.author.avatarURL)
 fsff.setThumbnail(member.user.displayAvatarURL);
 fsff.addField(`Members Count : `,member.guild.members.size);
 logChannel.send(fsff)
});
 
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
                    if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
    if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
    var logChannel = voiceOld.guild.channels.find(c => c.name === `${log[voiceOld, voiceNew.guild.id].channel}`);
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**Voice Mute**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`:shield: | **User : __${voiceOld}__ \nBy : __<@${userID}>__ \In : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**Voice UnMute**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`:microphone2: | **User : ${voiceOld} \nBy : __<@${userID}>__\nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**Voice Deafen**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`:outbox_tray: | **User : __${voiceOld}__\nBy : __<@${userID}>__\nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**VOICE UNDEAF**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`:inbox_tray: | **User : __${voiceOld}__ \nBy : __<@${userID}>__ \nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__ **`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
   
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
                        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
        if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`:satellite: | **There Is One Changed His Voice Room.\nFrom : __\`\`${voiceOld.voiceChannel.name}\`\`__\nTo : __\`\`${voiceNew.voiceChannel.name}\`\`__\nUser : __${voiceOld}__**`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});
 
 
 
client.on('message', message => {
    let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "right");
    let em2 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "false");
    if (message.content.startsWith('.verfiy')) {
 
        var activated_servers = ['574928675284451339'];
 
        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {
 
            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`**${em2} | You Aren't Owner Of Any Server Where Bot Is In It**`)
 
            } else if (guildr >= 1) {
                if (message.guild.member(message.author).roles.find(x => x.name === `# - Users,`)) return message.channel.send(`**${em2} | You Has This Role Aready**`);;
                message.channel.send(`**${em1} | I Found You In A Server Which You Are The Owner**`)
                message.member.addRole(message.guild.roles.find(x => x.name === `# - Users,`));
            }
        } else {
            return;
        }
 
    }
});
 
 
 
client.on('message', omar => {
                        var prefix = ".";
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`Done I Have Deleted All Roles `")
                        }
                        });
 
 
///islamic cmds
 
 
 
 
 
 
 
client.on('guildMemberAdd', m => {
 
  let enabled = db.get(`autorole.${m.guild.id}.enabled`)
  if(enabled === 'off') return
  let roleID = db.get(`autorole.${m.guild.id}.role`)
  if(roleID === null) return
  let role = m.guild.roles.get(roleID)
  if(role === undefined) return
  m.addRole(role,'auto role')
})
client.on('message', msg => {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(msg.author.bot) return;
  if(msg.content.startsWith(prefix + "autorole")) {
    if(params[1].toLowerCase() === 'set') {
      if(!params[2]) return msg.channel.send(`**Write Or Mention The Role**`)
    const role = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name.toLowerCase().startsWith(params[2].toLowerCase()))
    if(role === undefined) return msg.channel.send(`**I Can't Find It**`)
    db.set(`autorole.${msg.guild.id}.role`, role.id)
    msg.channel.send(`Done : ${role}`)
  }
    if(params[1].toLowerCase() === 'off') {
      let enabled = db.get(`autorole.${msg.guild.id}.enabled`)
      if(enabled === 'off') return msg.channel.send(`**It's Already Closed**`)
      db.set(`autorole.${msg.guild.id}.enabled`, 'off')
        msg.channel.send(`**Done The Close**`)
    }
    if(params[1].toLowerCase() === 'on') {
      let enabled = db.get(`autorole.${msg.guild.id}.enabled`)
      if(enabled === 'on') return msg.channel.send(`**It's Already Actived**`)
 
      db.set(`autorole.${msg.guild.id}.enabled`, 'on')
      msg.channel.send(`**Done The Active*`)
    }
  }
})
 
var Enmap = require('enmap');
client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
var prefix = ".";
if(codes.content.startsWith(prefix + "antibots on")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("AntiBots Join Is On");
}
if(codes.content.startsWith(prefix + "antibots off")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("AntiBots Join Is Off");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});
 
 
 
 
client.on('message', message => {
   let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "dollar");
  let em2 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "man");
  let em3 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "balance");
  let em4 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "load");
  let em5 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "load2");
if (message.content.startsWith(prefix + "id")) {
   var args = message.content.split(" ").slice(1);
 
     let user = message.mentions.users.first();
  var men = message.mentions.users.first();
 
     var heg;
     if(men) {
        heg = men
     } else {
        heg = message.author
     }
     var mentionned = message.mentions.members.first();
     var h;
     if(mentionned) {
        h = mentionned
     } else {
        h = message.member
     }
           moment.locale('EN-US');
     
     var guild = message.guild
     let inviteandstuff = undefined;
     var nul = 0;
   if (inviteandstuff == undefined) {
       inviteandstuff = "";
       }
      guild.fetchInvites()
       .then(invites => {
        invites.forEach(invite => {
           if (invite.inviter === heg) {
             inviteandstuff=invite.inviter
                nul+=invite.uses
               }
             });
     
 
        let uCoins = coins[message.author.id].coins;
 
               var id = new Discord.RichEmbed()
     .setDescription(`**• Some Information About __${message.author.username}__ :
\`\`\`js
ID : ${message.author.id}
Status : ${message.author.presence.status.toUpperCase()}
He Is A Bot : ${message.author.bot.toString().toUpperCase()}\`\`\`**`)
     .addField(`${em5} | Joined Discord From :`, `__${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')}__ **\n** \**${moment(heg.createdTimestamp).fromNow()}\**` ,true)
     .addField(`${em4} | Joined Server From :`, `__${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')}__ \n \**${moment(h.joinedAt).fromNow()}\**`, true)              
     .addField(`${em3} | Invites :`, `**__${nul}__**`, true)  
     .addField(`${em1} | Coins :`, `**__${uCoins}__**`, true)          
     .addField(`${em2} | I See U In :`,`** __${client.guilds.filter(g => g.members.find(m => m.id == message.author.id)).size}__ Guild** `)
             
     .setThumbnail(heg.avatarURL)
     message.channel.send(id)
      })
}});
     
     
 
client.on('message', () => {
 
client.channels.get('577242619650768896').edit({
        name: `» Servers: ${client.guilds.size}`
    })
 
 
 
})
 
 
 
client.on('ready', () => {
  client.channels.get('577242678052519937').edit({
        name: `» Users: ${client.users.size}`
    })
 
})
 
client.on('guildCreate', () => {
  client.channels.get('577242678052519937').edit({
        name: `» Users: ${client.users.size}`
    })
 
})
 
client.on('guildDelete', () => {
  client.channels.get('577242678052519937').edit({
        name: `» Users: ${client.users.size}`
    })
 
})
 
 
 
 
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Number Only**");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**Numbers Only**");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only**");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | Type Number **");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | Type Number **");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only**");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Many Channels**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Make Many Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} He Tried To Ban Many People**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} He Tried To Kick Many People**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} He Tried To Ban Many People**`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
 
 
client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "settings2");
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content.startsWith(prefix + 'config')) {
      // MrxDev
    var mrx = new Discord.RichEmbed()
   
    .setTitle(`**${em1} | __${message.guild.name}__ , Server Settings**`)
    .setThumbnail(message.guild.iconURL)
   
    .addField('Log Info', `
**• | Status : __\`${log[message.guild.id].onoff}\`__
• | Channel : __\`${log[message.guild.id].channel || "I Can't Find It"} \`__**
`)
   
 
   .addField('Antibots Info', `
**• | Status : __\`${client.antibots.get(message.guild.id).onoff}\`__**
`)
   
    .addField('Ban Limit Info', `
**• | Count : __\`${config[message.guild.id].banLimit} \`__**
`)
        .addField('Kick Limit Info', `
**• | Count : __\`${config[message.guild.id].kickLimits} \`__**
`)
    .addField('Role Delete Limit Info', `
**• | Count : __\`${config[message.guild.id].roleDelLimit} \`__**
`)
   
    .addField('Role Create Limit Info', `
**• | Count : __\`${config[message.guild.id].roleCrLimits} \`__**
`)
    .addField('Channel Delete Limit Info', `
**• | Count : __\`${config[message.guild.id].chaDelLimit} \`__**
`)
   
    .addField('SelfRole Info', `
**• | Role : __\`${monsterking[message.guild.id].role || "I Can't Find It"} \`__**
`)
    //.setFooter(message.author.avatarURL, message.author.tag)
message.channel.sendEmbed(mrx);
    }
});
 
const monsterking = JSON.parse(fs.readFileSync("./roleget.json", "utf8"));
 
client.on("message", monster =>{
let commandking = monster.content.split(" ")[0].slice(prefix.length);
let toxicmk = monster.content.split(" ").slice(1);
if(monster.author.bot || monster.channel.type == 'dm') return;
if(commandking === "setselfrole") {
    let newKing = toxicmk.join(" ");
    if(!monster.member.hasPermission("ADMINISTRATOR")) return monster.reply("You must have the **`ADMINISTRATOR`** permission!")
    if(!monster.guild.me.hasPermission("ADMINISTRATOR")) return monster.reply("I must have the **`ADMINISTRATOR`** permissions!")
    if(!monster.guild.roles.find(x => x.name === newKing)) return monster.reply("Usage: **`(role name)`**");
    if(monster.guild.roles.find(x => x.name === newKing).position >= monster.guild.me.highestRole.position) return monster.reply("My highgest role must be higher than the mentioned role!")
    monster.channel.send(`Successfully applied SelfRole to \`${newKing}\``)
    monsterking[monster.guild.id] = {
      guild: monster.guild.name,
      role: newKing
    }
    fs.writeFile("./roleget.json", JSON.stringify(monsterking, null, 4), err => {
        if(err) throw err;
          });
      }
});
client.on('message', monster => {
let commandking = monster.content.split(" ")[0].slice(prefix.length);
if(commandking === "selfrole"){
  if(monster.author.bot || monster.channel.type == 'dm') return;
  let rolegetid = monster.guild.roles.find(mk => mk.name === monsterking[monster.guild.id].role)
    if(!rolegetid) return monster.channel.send("Sorry But there's no selrole Command on our system activated!!")
        var mking = monster.member.roles.get(rolegetid.id);
        if(mking) {
          monster.channel.send(`${monster.author}, You've the role already`);
       }else{
         monster.member.addRole(rolegetid);
         monster.channel.send(`Done! ${monster.author}, You've Got the role: \`${rolegetid.name}\``);
        }
  }
});
 
client.on('message',message => {
  if(message.content === prefix + 'help') {
   
 
 
    message.channel.send(`**
• __Activation__ __Commands__ :
__\`.setselfrole\`__ : To Set Self Role Or Role Get , If This Command Was Actived Use \`.selfrole\`
__\`.setlog\`__ : To Set Log Room , To Active And Close It \`.logtoggle\`
__\`.antibots on\`__ : To Make Bots Don't Join The Server
__\`.antibots off\`__ : To Make Bots Join The Server
__\`.autorole\`__ : To If Anyone Joined The Server Take A Role To Set The AutoRole Use : \`.autorole set @role/<rolename>\` , To Active It Use \`.autorole on\` , To Close It Use : \`.autorole off\`
• __Tickets__ __Commands__ :
__\`.setcategory\`__ : To Set Category To Tickets
__\`.setrole\`__ : To Set Role Staff To Tickets
__\`.new\`__ : To Open Ticket
__\`.close\`__ : To Close Ticket
__\`.add\`__ : To Add SomeOne To Ur Ticket
__\`.remove\`__ : To Remove SomeOne From Ur Ticket
__\`.rename\`__ : To Rename Ur Ticket
__\`.forceclose\`__ : To Close Ur Ticket
• __Other__ __Commands__ :
__\`.topservers\`__ : To See Top Servers
__\`.stats\`__ : To See Bot Info
__\`.support\`__ : To Join The Server Support
__\`.invite\`__ : To Invite The Bot
__\`.servers\`__ : To See Servers Which The Bot In It**`)
 
 
  }})
 
client.on('message',message => {
  if(message.content === prefix + 'help') {
   
 
 
    message.channel.send(`**• __General__ __Commands__ :
__\`.fm\`__ : To FilterMembers
__\`.ping\`__ : To See Bot's Ping
__\`.avatar\`__ : To See Ur Avatar Or Server Avatar
__\`.npm\`__ : To Get Package Informations
__\`.id\`__ : To See Ur Id Card
• __Staff__ __Commands__ :
__\`.kick\`__ : To Kick A Member
__\`.ban\`__ : To Ban A Member
__\`.mute\`__ : To Give A Member Text Mute
__\`.unmute\`__ : To Remove Text Mute
__\`.server\`__ : To Get Information About The Server
__\`.config\`__ : To See Server Setting
• __Personal__ __Commands__ :
__\`.coins\`__ : To See Ur Coins
__\`.claim\`__ : To Take Ur Daily
__\`.pay\`__ : To Give Coins To Member
• __Safety__ __Commands__ :
__\`.settings limitsban\`__ : To Determine Limit Bans
__\`settings limitslick \`__ : To Determine Limit Kick
__\`.settings limitsroleD\`__ : To Determine Limit Role Delete
__\`.settings limitsroleC\`__ : To Determine Limit Role Create
__\`.setiing limitschannelD\`__ : To Determine Limit Channel Delete
**`)
 
 
  }})
 
client.login("");