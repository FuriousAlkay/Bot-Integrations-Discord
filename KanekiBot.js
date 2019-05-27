const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();;

 
// Set the prefix

client.on("message", message => {
    if (message.author.bot) return;
    // This is where we'll put our code.
    if (message.content.indexOf(config.prefix) !== 0) return;
   
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
   
    if(command === 'ping') {
      message.channel.send('Pong!');
    } else
    if (command === 'blah') {
      message.channel.send('Meh.');
    } else
    if (command === "asl") {
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else
    if(command === "kick") {
        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        member.kick(reason);
    } else
    if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } 

  });
 
client.login(config.token);