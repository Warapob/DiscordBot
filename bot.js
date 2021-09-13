const Discord = require("discord.js");

//bot aka client

const client = new Discord.Client();
const auth = require('./auth.json');
const crit = require('./criti_rate.json');
const last2msg = [" ", " "];
var curse = true;
var curse_count = 1;
var voiceChannelMemberCount = 0;
//sever id : 367646145834385408

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
/*
      const embedupdate = new Discord.MessageEmbed()
        .setColor('#6dff00')
	    .setTitle('BOT version 1.0 release notes')
        .setDescription(
        "**New update**\n"+"\u2002อัพเดทคำสั่ง\u2002 `#curse + แท็กคนอื่น`\u2002:\u2002บอทจะserver muteคนนั้นโดยสุ่มเวลา\nnormal ATK = 10 วิ critical rate(โดน 60 วิ) จาก 6% => 20% \n\n"+
        "**commands**\n"+"\u2002`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+
        "\u2002`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n\u2002`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n\u2002`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n\u2002`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n"+
        "\u2002`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n \n\n"+
        "**คำสั่งใช้Botเปิดเพลงพื้นฐาน**\n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "**hydra**\n\u2002`.p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`.pause`\u2002 >> หยุดเพลง\n \u2002`.skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`.q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**Groovy**\n\u2002`-p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`-pause`\u2002 >> หยุดเพลง\n \u2002`-skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`-q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**Rythm**\n\u2002`!p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`!pause`\u2002 >> หยุดเพลง\n \u2002`!skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`!q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"
        )
        
        .setImage('https://c.tenor.com/t_ck4w9u9lAAAAAM/123-we-are-watching.gif')
        .setTimestamp()
        .setFooter('รอคิดออกก่อนเดี๋ยวมาทำเพิ่ม')
        client.channels.cache.get("869481092997083196").send(embedupdate);*/
    /*client.channels.cache.get("869481092997083196").send("```"+
        "BOT version 0.0.3 release notes\n\n"+
        "New update\n"+" #เขย่าตัว + <แท็กคนที่จะเขย่าในvoice channel> : ย้ายคนที่หลับในvoice channelสลับห้องไปมา\n \n"+
        "prefix\n"+" #gartic : เพื่อเล่นเกม gaticphone\n"+
        " #movetohere : ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n \n\n"+
        "คำสั่งใช้Botเปิดเพลงพื้นฐาน\n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "hydra\n .p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n .pause >> หยุดเพลง\n .skip >> ข้ามเพลงที่เล่นอยู่\n .q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "Groovy\n -p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n -pause >> หยุดเพลง\n -skip >> ข้ามเพลงที่เล่นอยู่\n -q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "Rythm\n !p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n !pause >> หยุดเพลง\n !skip >> ข้ามเพลงที่เล่นอยู่\n !q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "```"+
        "รอ <@295518557817798657> คิดออกก่อนเดี๋ยวมาทำเพิ่ม\n https://tenor.com/view/watchingyou-hack-security-breech-gif-10161294"
        )*/
})
function hello(){
    console.log("hello")
}


client.on('message', msg => {
    console.log("########## update message log ##########\n");
    console.log(msg.author.username + " :  " + msg.content + "\n");
    console.log("voice channelID : " + msg.member.voice.channelID);
    console.log("text channelID : " + msg.author.lastMessageChannelID);
    if(msg.content == "t"){
        console.log(msg.author);
    }

    if (msg.content.startsWith("shutdown")) {
        console.log(msg.content.search("!"))
        var target = msg.content.slice(msg.content.search("!")+1,msg.content.search(">"))
        var c_pos = Math.floor(Math.random() * 100);
        console.log("critical : "+crit.crit[c_pos])
        console.log("rand result : "+c_pos)
        msg.guild.members.cache.get(target).voice.setMute(true)
        setTimeout(function(){
            msg.guild.members.cache.get(target).voice.setMute(false)
        },crit.crit[c_pos]*10000)
        /*msg.member.voice.setMute(true)
        let Member = "869500994550108262"
        msg.guild.members.cache.get(Member).voice.setMute(true)
        setTimeout(function(){
            msg.guild.members.cache.get(Member).voice.setMute(false)
        },15000)*/
        /*const embedupdate = new Discord.MessageEmbed()
        .setColor('#6dff00')
	    .setTitle('BOT version 0.0.5 release notes')
        .setDescription(
        "**New update**\n"+"\u2002`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n\u2002`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n\u2002`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n\u2002`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n\n"+
        "**commands**\n"+"\u2002`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+
        "\u2002`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n \n\n"+
        "**คำสั่งใช้Botเปิดเพลงพื้นฐาน**\n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "**hydra**\n\u2002`.p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`.pause`\u2002 >> หยุดเพลง\n \u2002`.skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`.q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**Groovy**\n\u2002`-p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`-pause`\u2002 >> หยุดเพลง\n \u2002`-skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`-q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**Rythm**\n\u2002`!p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`!pause`\u2002 >> หยุดเพลง\n \u2002`!skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`!q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"
        )
        
        .setImage('https://c.tenor.com/t_ck4w9u9lAAAAAM/123-we-are-watching.gif')
        .setTimestamp()
        .setFooter('รอคิดออกก่อนเดี๋ยวมาทำเพิ่ม')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedupdate);

        console.log(msg.author.id)
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("```"+
        "BOT version 0.0.3 release notes\n\n"+
        "New update\n"+" #เขย่าตัว + <แท็กคนที่จะเขย่าในvoice channel> : ย้ายคนที่หลับในvoice channelสลับห้องไปมา\n \n"+
        "prefix\n"+" #gartic : เพื่อเล่นเกม gaticphone\n"+
        " #movetohere : ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n \n\n"+
        "คำสั่งใช้Botเปิดเพลงพื้นฐาน\n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "hydra\n .p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n .pause >> หยุดเพลง\n .skip >> ข้ามเพลงที่เล่นอยู่\n .q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "Groovy\n -p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n -pause >> หยุดเพลง\n -skip >> ข้ามเพลงที่เล่นอยู่\n -q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "Rythm\n !p + ชื่อเพลงหรือลิงค์ที่จะฟัง >> บอทจะเปิดเพลงให้ฟัง\n !pause >> หยุดเพลง\n !skip >> ข้ามเพลงที่เล่นอยู่\n !q >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "```"+
        "รอ <@295518557817798657> คิดออกก่อนเดี๋ยวมาทำเพิ่ม\n https://tenor.com/view/watchingyou-hack-security-breech-gif-10161294"
        //)*/
    }

    if (msg.content.startsWith("#เขย่าตัว")&& msg.author.id == "295518557817798657") {
        msg.react("😴");
        /*var index0 = msg.content.search("<@!")+3;
        var index1 = msg.content.search(">");
        var userID = msg.content.slice(index0,index1);
        const channel = msg.member.voice.channelID;
        console.log(userID)
        client.channels.cache.get(msg.author.lastMessageChannelID).send("กำลังเขย่าตัว <@!"+userID+">");
        for(let i = 0;i<10;i++){
            msg.guild.member(userID).voice.setChannel("833617613648035850")
            setTimeout(() => {}, 500);
            msg.guild.member(userID).voice.setChannel(channel);
        }*/
    }
    else if(msg.content.startsWith("#เขย่าตัว")){
        client.channels.cache.get(msg.author.lastMessageChannelID).send("ปิดปรับปรุงชั่วคราว ⛔");
        /*const embedgif = new Discord.MessageEmbed()
        .setImage("https://c.tenor.com/Cpe0tHMQNr0AAAAC/%E0%B9%81%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C-%E0%B8%95%E0%B8%B1%E0%B9%8A%E0%B8%81.gif")
        msg.react("🤪");
        client.channels.cache.get(msg.author.lastMessageChannelID).send("แกกก ไม่มี สิทธิ์\n");
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedgif);*/
        
    }

    if (msg.content == "#movetohere") {
        const channel = msg.member.voice.channel;
        client.channels.cache.get(msg.author.lastMessageChannelID).send("กำลังย้ายทุกคนมาที่ "+msg.member.voice.channel.name);
        msg.guild.members.cache.forEach(member => {
         //guard clause, early return
         console.log(channel)
        
        if(member.id === msg.member.id || !member.voice.channel) return;
        member.voice.setChannel(channel);
        });
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


    if(msg.content.search("<@847866885017174057>") >= 0||msg.content.search("<@!847866885017174057>") >= 0){
        msg.react("<:grey_question:>");
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("<:Chartee:866631093506539530>");
    }
    //tag : cheetar , jacky
    if(msg.content.search("<@710138267646951494>") >= 0||msg.content.search("<@!710138267646951494>") >= 0){
        msg.react("<:Chartee:866631093506539530>");
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("<:Chartee:866631093506539530>");
    }
    if(msg.content.search("<@260718023621607424>") >= 0||msg.content.search("<@!260718023621607424>") >= 0){
        msg.react("<:jacky:869516637718601778>");
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("<:jacky:869516637718601778>");
    }
    /*
    if(msg.content.search("<@295518557817798657>") >= 0||msg.content.search("<@!295518557817798657>") >= 0){
            client.channels.cache.get(msg.author.lastMessageChannelID).send("แปปที่ไม่รู้เเปปสั้นหรือนาน");
    }*/

    //dj bots commands
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
        client.channels.cache.get("836912289604960268").send("-q");
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
        msg.delete({timeout:300});
    }
    else if(msg.content.startsWith(auth.prefix7)||
        msg.content.startsWith(auth.prefix8)||
        msg.content.startsWith(auth.prefix9)){
        msg.delete({timeout:300});
    }

    //gartic command
    if(msg.content.startsWith(auth.prefix10)){
        const embedgartic = new Discord.MessageEmbed()
        .setColor('#4300ff')
	    .setTitle('Gartic Phone')
        .setURL('https://garticphone.com/')
        .setDescription('ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\nhttps://garticphone.com/')
        .setImage('https://garticphone.com/images/thumb.png')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedgartic);
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://garticphone.com/");
    }
    //dixit command
    if(msg.content.startsWith(auth.prefix11)){
        const embeddixit = new Discord.MessageEmbed()
        .setColor('#00ffbc')
	    .setTitle('Dixit')
        .setURL('https://play-dixit.online/en/')
        .setDescription('ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\nhttps://play-dixit.online/en/')
        .setImage('https://play-dixit.online/dixit.png')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embeddixit);
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://play-dixit.online/en/");
    }

    //avalon command
    if(msg.content.startsWith(auth.prefix12)){
        const embedavalon = new Discord.MessageEmbed()
        .setColor('#20ff00')
	    .setTitle('Dixit')
        .setURL('https://avalon.fun/')
        .setDescription('ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\nhttps://avalon.fun/')
        .setImage('https://avalon.fun/img/game-screenshot-desktop.44d62692.png')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedavalon);
        
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://avalon.fun/login");
    }
    //spyffall command
    if(msg.content.startsWith(auth.prefix13)){
        const embedsp = new Discord.MessageEmbed()
        .setColor('#ff9600')
	    .setTitle('Spyfall')
        .setURL('https://spyfall.adrianocola.com/')
        .setDescription('ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\nhttps://spyfall.adrianocola.com/')
        .setImage('https://www.spyfall.app/assets/spy_black-cf2b6875f4c1337d4bde866dd460688f08ffac3bc97dab27dfa04bdd8009b8a1.png')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedsp);
        
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://avalon.fun/login");
    }
    //how to play
    if(msg.content.startsWith(auth.prefix14)){
        const embedhowto = new Discord.MessageEmbed()
        .setColor('#f8ff00')
	    .setTitle('How to play')
        .setDescription('ถ้านอ่านลิงค์แล้วไม่เข้าใจก็กดเปิดดูข้อความที่ปิดไว้นะ')
        .addFields(
            { name: 'Gartic', value: 'วาดรูปตามคนอื่นบอกแต่ละโหมดจะมีเงื่อนไขต่างกันไป' },
            { name: 'Dixit', value: 'https://www.mercular.com/dixit-board-game \n||https://www.youtube.com/watch?v=AhUqIxTMDEs||' },
            { name: 'Avalon', value: 'https://www.mercular.com/avalon-board-game-english-version \n||https://www.youtube.com/watch?v=mPr26Lza0Yk||'},
            { name: 'Spy fall ', value: 'https://inskru.com/idea/-LpsZiHciXOJO2i8ghj8 \n||https://www.youtube.com/watch?v=swTqiWPvEVk||'}
        )
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedhowto);
        
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://avalon.fun/login");
    }
    //help
    if(msg.content.startsWith(auth.prefix15)){
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#f8ff00')
	    .setTitle("Commands :")
        .setDescription("`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n"+
            "`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+ "`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่")
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedhelp);
        
        //client.channels.cache.get(msg.author.lastMessageChannelID).send("ให้คนนึงเป็นหัวห้องกดเข้าไปในลิงค์ละส่งinviteมาให้คนอื่นอีกทีนะเเจ๊ะ\n https://avalon.fun/login");
    }
    //curse
    if(msg.content.startsWith(auth.prefix16)){
        console.log(curse)
        if(curse == true){
            console.log(msg.content.search("!"))
            var target = msg.content.slice(msg.content.search("!")+1,msg.content.search(">"))
            var c_pos = Math.floor(Math.random() * 100);
            var time = crit.crit[c_pos];
            var cri_check = '';
            console.log("critical : "+time)
            if(time == "6"){
                cri_check = '💥💥💥'
            }
            console.log("rand result : "+c_pos)
            client.channels.cache.get(msg.author.lastMessageChannelID).send("<@!"+target+"> โดนไปซะะะ")
            const embedmugen = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('Mugen!')
            .addFields(
                { name: 'Critical Rate  |', value: '20%',inline : true},
                { name: 'Mute   ', value: time*10+" sec"+cri_check,inline : true  }
            )
            .setImage('https://64.media.tumblr.com/cbf2f6fcd1285887cb89bb67382e5e08/ea6ffafc3e28d5c3-85/s500x750/2013f504c877ae5a9216b2a3621bcd8bab126fd2.gif')
            client.channels.cache.get(msg.author.lastMessageChannelID).send(embedmugen);
            msg.guild.members.cache.get(target).voice.setMute(true)
            setTimeout(function(){
                msg.guild.members.cache.get(target).voice.setMute(false)
            },crit.crit[c_pos]*10000)
            curse = false
        }
        else{
            const embedcooldown = new Discord.MessageEmbed()
            .setColor('#c50000')
            .setTitle('Mugen is cooling down...')
            client.channels.cache.get(msg.author.lastMessageChannelID).send(embedcooldown);
        }
        setTimeout(function(){
            if(curse == false){
                console.log("Mugen is ready now.")
                curse = true
            }
        },6*10000)
        console.log(curse)
        
    }
    //decurse
    if(msg.content.startsWith(auth.prefix17)){
        msg.member.voice.setMute(false)
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
/*client.on("userUpdate", function (oldUser, newUser) {
    newUser.member.guild.roles.add('848441317973164062');
});*/

token = process.env.api_key
client.login(auth.token);