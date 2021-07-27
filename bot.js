const Discord = require("discord.js");

//bot aka client

const client = new Discord.Client();
const auth = require('./auth.json');
const last2msg = [" ", " "];
var voiceChannelMemberCount = 0;
//sever id : 367646145834385408

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    /*client.channels.cache.get("869481092997083196").send(
        "> **`BOT version 0.0.1 release notes`**\n> \n"+
        "> **`prefix`**\n> "+"`#gartic : เพื่อเล่นเกม gaticphone`\n> \n"+
        "> **`คำสั่งใช้Botเปิดเพลงพื้นฐาน`**\n"+
        "> `ใครขอเพลงผิด channel โดนbotตีตูดแน่`\n> \n"+
        "> `hydra`\n> `.p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง`\n> `.pause >> หยุดเพลง`\n> `.skip >> ข้ามเพลงที่เล่นอยู่`\n> `.q >> เเสดงเพลงที่่อยู่ในคิว`\n> \n"+
        "> `Groovy`\n> `/p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง`\n> `/pause >> หยุดเพลง`\n> `/skip >> ข้ามเพลงที่เล่นอยู่`\n> `/q >> เเสดงเพลงที่่อยู่ในคิว`\n> \n"+
        "> `Rythm`\n> `!p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง`\n> `!pause >> หยุดเพลง`\n> `!skip >> ข้ามเพลงที่เล่นอยู่`\n> `!q >> เเสดงเพลงที่่อยู่ในคิว`\n> \n"+
        "> รอ <@295518557817798657> คิดออกก่อนเดี๋ยวมาทำเพิ่ม\n https://tenor.com/view/watchingyou-hack-security-breech-gif-10161294"
    )*/
})

client.on('message', msg => {
    console.log("########## update message log ##########\n");
    console.log(msg.author.username + " :  " + msg.content + "\n");
    console.log("voice channelID : " + msg.member.voice.channelID);
    console.log("text channelID : " + msg.author.lastMessageChannelID);
    if(msg.content == "t"){
        console.log(msg.author);
    }

    if (msg.content == "shutdown") {
        const channels = msg.guild.channels.filter(c => c.parentID === '721028840339669022' && c.type === 'voice');
        
        for (const [channelID, channel] of channels) {
            for (const [memberID, member] of channel.members) {
              member.setVoiceChannel('721028840339669022')
                .then(() => console.log(`Moved ${member.user.tag}.`))
                .catch(console.error);
            }
        }

    }

    if (msg.content.startsWith("!addrole")) {
        
        let role1 = msg.guild.roles.cache.find(r => r.name === "Tier : debugger");
        console.log(role1.name);

        // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
        let member = msg.mentions.members.first();

        // or the person who made started the command: let member = message.member;

        //adds the role
        member.roles.add(role1);

    }
    if(msg.content=="<@710138267646951494>"||msg.content=="<@!710138267646951494>"){
        client.channels.cache.get(msg.author.lastMessageChannelID).send("<:Chartee:866631093506539530>");
    }
    if ((msg.content.startsWith(auth.prefix1) ||
        msg.content.startsWith(auth.prefix2) ||
        msg.content.startsWith(auth.prefix3)) &&
        msg.author.lastMessageChannelID != "836912289604960268") {
        last2msg.push(msg.content);
        last2msg.shift();
        msg.delete({ timeout: 300 });
        client.channels.cache.get("836912289604960268").send("<@" + msg.author.id + ">" + "มาขอเพลงในนี้เส้");
    }
    if ((msg.content.startsWith(auth.prefix1) &&
        msg.author.lastMessageChannelID == "836912289604960268")) {
        last2msg.push(msg.content);
        last2msg.shift();
        msg.delete({ timeout: 300 });
        setTimeout(() => {}, 1000);
        client.channels.cache.get("836912289604960268").send(".q");
    }
    if ((msg.content.startsWith(auth.prefix2) &&
        msg.author.lastMessageChannelID == "836912289604960268")) {
        last2msg.push(msg.content);
        last2msg.shift();
        msg.delete({ timeout: 300 });
        setTimeout(() => {}, 1000);
        client.channels.cache.get("836912289604960268").send("/q");
    }
    if ((msg.content.startsWith(auth.prefix3) &&
    msg.author.lastMessageChannelID == "836912289604960268")) {
    last2msg.push(msg.content);
    last2msg.shift();
    msg.delete({ timeout: 300 });
    setTimeout(() => {}, 1000);
    client.channels.cache.get("836912289604960268").send("!q");
    }

    if(msg.content.startsWith(auth.prefix4)||
    msg.content.startsWith(auth.prefix5)||
    msg.content.startsWith(auth.prefix6)){
        msg.delete({timeout:200});
    }
    else if(msg.content.startsWith(auth.prefix7)||
    msg.content.startsWith(auth.prefix8)||
    msg.content.startsWith(auth.prefix9)){
        msg.delete({timeout:100});
    }

    if(msg.content.startsWith(auth.prefix10)){
        client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://garticphone.com/");
    }
    console.log(" ");
})

//role Tier :  ขาประจำ id : 848123102743363616
//721028840339669022
//295518557817798657
var tagStage = true
// Listeing to the voiceStateUpdate event
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    console.log("########## update voice channel log ##########\n");

    if (newVoiceState.channel) { // The member connected to a channel
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
        //console.log(newVoiceState.channel.members);
        /*++voiceChannelMemberCount;
        console.log("membere in voice chanel : " + voiceChannelMemberCount);
        //console.log(newVoiceState.member.roles.cache.get('848123102743363616'));
        if (newVoiceState.member.roles.cache.get('848123102743363616') != undefined && voiceChannelMemberCount == 1 && tagStage == true) {
            tagStage = false;
            setTimeout(function () {
                //client.channels.cache.get("719848875472715877").send("<@&848123102743363616>" + "เข้ามาเร็วๆดิ๊อย่าช้า");
            }, 5000);
        }*/
    }

    // The member disconnected from a channel.
    else if (oldVoiceState.channel) {
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
        /*--voiceChannelMemberCount;
        if (voiceChannelMemberCount < 1) {
            voiceChannelMemberCount = 0;
            tagStage = true;
        }*/
    }
    console.log(" ");
});
//message.member.guild.roles.add(role);
//848441317973164062
client.on("userUpdate", function (oldUser, newUser) {
    newUser.member.guild.roles.add('848441317973164062');
});


client.login(auth.token);