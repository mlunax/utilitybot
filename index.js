const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');

if(config.main.token == ""){
    console.log("Set the token in config.json");
    return;
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', (member) => {
  if(config.userJoin.welcome_msg.lenght <= 0 && config.userJoin.welcome_channel == "") return;
  let msgid = Math.floor(Math.random() * math.floor(config.userJoin.welcome_msg.lenght));
  let msg = config.userJoin.welcome_msg[msgid].replace(/$user/gi, member.displayName);
  msg = msg.replace(/$userm/gi, member.toString);
  msg = msg.replace(/$guild/gi, member.guild.name);
  client.channels.get(config.userJoin.welcome_channel).send();
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(config.main.token);