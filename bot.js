const Discord = require("discord.js");

//bot aka client

const client = new Discord.Client();
const auth = require('./auth.json');
const last2msg = [" ", " "];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    console.log("########## update message log ##########\n");
    console.log(msg.author.username + " :  " + msg.content);
    console.log("voice channelID : " + msg.member.voice.channelID);
    console.log("text channelID : " + msg.author.lastMessageChannelID);
    if (msg.content == "shutdown") {
        const user = msg.author;
        msg.channel.send("<@295518557817798657>");
        //client.channels.cache.get("847872381581656084").send();
    }
    if ((msg.content.startsWith(auth.prefix1) ||
        msg.content.startsWith(auth.prefix2) ||
        msg.content.startsWith(auth.prefix3)) &&
        msg.author.lastMessageChannelID != "836912289604960268") {
        last2msg.push(msg.content);
        last2msg.shift();
        msg.delete({ timeout: 300 });
        client.channels.cache.get("836912289604960268").send("<@" + msg.author.id + ">" + "มาขอเพลงในนี้เส้บักหรรมเอ้ย");
    }
    console.log(" ");
})


client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    console.log("########## update voice channel log ##########\n");
    if (newVoiceState.channel) { // The member connected to a channel
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
    }
    else if (oldVoiceState.channel) { // The member disconnected from a channel.
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
    };
});


client.login(auth.token);