const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');

if(config.main.token == ""){
    console.log("Set the token in config.json");
    return;
}

if(config.main.prefix == ""){
  console.log("Set the prefix in config.json");
  return;
}

const prefix = config.main.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', (member) => {
  if(config.userJoin.welcome_msg.length <= 0 && config.userJoin.welcome_channel == "") return;
  let msgid = Math.floor(Math.random() * math.floor(config.userJoin.welcome_msg.length));
  let msg = config.userJoin.welcome_msg[msgid].replace(/$user/gi, member.displayName);
  msg = msg.replace(/$userm/gi, member.toString);
  msg = msg.replace(/$guild/gi, member.guild.name);
  client.channels.get(config.userJoin.welcome_channel).send();
});

client.on("message", (message) => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let msg = message.content.slice(prefix.length);
  if(msg.split(" ")[0] === "bc"){
    msg = msg.substring(msg.split(" ")[0].length+1);
    let cname = msg.split(" ")[0];
    let txt = msg.substring(cname.length+1);
    message.guild.channels.find(x=>x.name === cname).send(txt);
  }
});

client.login(config.main.token);