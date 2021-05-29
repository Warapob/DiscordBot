const Discord = require("discord.js");

//bot aka client

const client = new Discord.Client();
const auth = require('./auth.json');
const last2msg = [" ", " "];
var voiceChannelMemberCount = 0;
//sever id : 367646145834385408

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

//role Tier :  ขาประจำ id : 848123102743363616
var tagStage = true
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    console.log("########## update voice channel log ##########\n");
    if (newVoiceState.channel) { // The member connected to a channel
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
        ++voiceChannelMemberCount;
        console.log("membere(Tier :  ขาประจำ role) in voice chanel : "+voiceChannelMemberCount);
        //console.log(newVoiceState.member.roles.cache.get('848123102743363616'));
        if (newVoiceState.member.roles.cache.get('848123102743363616')!=undefined&&voiceChannelMemberCount == 1 && tagStage == true){
            tagStage = false;
            setTimeout(function(){
                client.channels.cache.get("719848875472715877").send("<@&848123102743363616>" + "เข้ามาเร็วๆดิ๊อย่าช้า");
            },4000);
        }
    }
    else if (oldVoiceState.channel) { // The member disconnected from a channel.
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
        --voiceChannelMemberCount;
        if(voiceChannelMemberCount <1){
            voiceChannelMemberCount=0;
            tagStage = true;
        }
    }
    console.log(" ");
});


client.login(auth.token);