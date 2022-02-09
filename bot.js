const Discord = require("discord.js");

//bot aka client

const client = new Discord.Client();
const auth = require('./auth.json');
const crit = require('./criti_rate.json');
const reb = require('./rebound.json')
const last2msg = [" ", " "];
var curse = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


client.on('message', msg => {
    console.log("########## update message log ##########\n");
    console.log(msg.author.username + " :  " + msg.content + "\n");
    console.log("voice channelID : " + msg.member.voice.channelID);
    console.log("text channelID : " + msg.author.lastMessageChannelID);
    if(msg.content == "t"){
        console.log(msg.author);
    }
    if(msg.content.startsWith("#update")){
        const embedupdate = new Discord.MessageEmbed()
        .setColor('#6dff00')
	    .setTitle('BOT version 2.0 release notes')
        .setDescription(
        "**New update**\n"+"\u2002Watch Party\n\u2002 `#watchparty | #yt | #wpt `\u2002:\u2002เพื่อรับลิงค์watch party\n\n"+
        "**commands**\n"+"\u2002`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+
        "\u2002`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n\u2002`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n\u2002`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n\u2002`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n"+
        "\u2002`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n\u2002`#curse + แท็กuser`\u2002:\u2002บอทจะserver muteคนที่ถูกเเท็กแบบสุ่มเวลา\n \n\n"+
        "**คำสั่งใช้Botเปิดเพลงพื้นฐาน**\nHydra เปิดเพลงจากyoutubeไม่ได้แล้วสามารถใช้ link spotify มาเปิดเเทนได้ \n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "**hydra**\n\u2002`.p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`.pause`\u2002 >> หยุดเพลง\n \u2002`.skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`.q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**ProBot**\n\u2002`*p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`*pause`\u2002 >> หยุดเพลง\n \u2002`*skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`*q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"
        )
        
        .setImage('https://c.tenor.com/t_ck4w9u9lAAAAAM/123-we-are-watching.gif')
        .setTimestamp()
        .setFooter('รอคิดออกก่อนเดี๋ยวมาทำเพิ่ม')
        client.channels.cache.get("869481092997083196").send(embedupdate);
    }

    if (msg.content.startsWith("test")) {
        const embedupdate = new Discord.MessageEmbed()
        .setColor('#6dff00')
	    .setTitle('BOT version 2.0 release notes')
        .setDescription(
        "**New update**\n"+"\u2002Watch Party\n\u2002 `#watchparty | #yt | #wpt `\u2002:\u2002เพื่อรับลิงค์watch party\n\n"+
        "**commands**\n"+"\u2002`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+
        "\u2002`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n\u2002`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n\u2002`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n\u2002`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n"+
        "\u2002`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่\n\u2002`#curse + แท็กuser`\u2002:\u2002บอทจะserver muteคนที่ถูกเเท็กแบบสุ่มเวลา\n \n\n"+
        "**คำสั่งใช้Botเปิดเพลงพื้นฐาน**\nHydra เปิดเพลงจากyoutubeไม่ได้แล้วสามารถใช้ link spotify มาเปิดเเทนได้ \n"+
        " ใครขอเพลงผิด channel โดนbotตีตูดแน่\n\n"+
        "**hydra**\n\u2002`.p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`.pause`\u2002 >> หยุดเพลง\n \u2002`.skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`.q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"+
        "**ProBot**\n\u2002`*p + ชื่อเพลงหรือลิงค์ที่จะฟัง`\u2002 >>\u2002 บอทจะเปิดเพลงให้ฟัง\n \u2002`*pause`\u2002 >> หยุดเพลง\n \u2002`*skip`\u2002 >>\u2002 ข้ามเพลงที่เล่นอยู่\n \u2002`*q`\u2002 >> เเสดงเพลงที่่อยู่ในคิว\n\n"
        )
        .setImage('https://c.tenor.com/t_ck4w9u9lAAAAAM/123-we-are-watching.gif')
        .setTimestamp()
        .setFooter('รอคิดออกก่อนเดี๋ยวมาทำเพิ่ม')
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedupdate);
        return 0;
    }
    if (msg.content.startsWith("#watchparty") || msg.content.startsWith("#yt") || msg.content.startsWith("#wpt")) {
        client.channels.cache.get(msg.author.lastMessageChannelID).send(
            "**🍿Watch par-kee**\n > **🍻โคตรว่าง🍻**\n     ↳ https://discord.gg/rCpTb2tDB8"+
            "\n > **🥂ว่างโคตร🥂**\n     ↳ https://discord.gg/MWgEcgp8cz"
            );
        return 0;
    }
    //developing
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
    
    //move everyone to voice channel
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


    if(msg.content.search("<@847866885017174057>") >= 0||msg.content.search("<@!847866885017174057>") >= 0){
        msg.react("<:grey_question:>");
    }

    //tag : cheetar , jacky
    if(msg.content.search("<@710138267646951494>") >= 0||msg.content.search("<@!710138267646951494>") >= 0){
        msg.react("<:Chartee:866631093506539530>");
    }

    if(msg.content.search("<@260718023621607424>") >= 0||msg.content.search("<@!260718023621607424>") >= 0){
        msg.react("<:jacky:869516637718601778>");
    }

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
        client.channels.cache.get("836912289604960268").send("*q");
    }
    if ((msg.content.startsWith(auth.prefix3) &&
        msg.author.lastMessageChannelID == "836912289604960268")) {
        last2msg.push(msg.content);
        last2msg.shift();
        msg.delete({ timeout: 300 });
        setTimeout(() => {}, 1000);
        client.channels.cache.get("836912289604960268").send("!q");
    }

    if ((msg.content.startsWith(auth.prefix18) &&
    msg.author.lastMessageChannelID != "836912289604960268")) {
    last2msg.push(msg.content); 
    last2msg.shift();
    msg.delete({ timeout: 300 });
    client.channels.cache.get("836912289604960268").send("<@" + msg.author.id + ">" + "มาขอเพลงในนี้เส้ ละก็ใช้ * (ดอกจัน) เเทน # ด้วยมันทับกับคำสั่งกูเว้ยย");
    }

    if(msg.content.startsWith(auth.prefix4)||
        msg.content.startsWith(auth.prefix5)||
        msg.content.startsWith(auth.prefix6)){
        msg.delete({timeout:300});
    }
    
    if(msg.content.startsWith(auth.prefix16)){
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
    }

    //help
    if(msg.content.startsWith(auth.prefix15)){
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#f8ff00')
	    .setTitle("Commands :")
        .setDescription("`#avalon`\u2002:\u2002เพื่อเล่นเกม avalon\n`#dixit`\u2002:\u2002เพื่อเล่นเกม dixit\n`#spyfall`\u2002:\u2002เพื่อเล่นเกม spyfall\n`#howtoplay`\u2002:\u2002เพื่อดูวิธีเล่นเกมต่างๆ\n"+
            "`#gartic`\u2002:\u2002เพื่อเล่นเกม gaticphone\n"+ "`#movetohere`\u2002:\u2002ย้ายทุกคนมาที่voice channelที่คนใช้คำสั่งอยู่")
        client.channels.cache.get(msg.author.lastMessageChannelID).send(embedhelp);
    }

    //curse
    if(msg.content.startsWith(auth.prefix16)){
        var k_pos = Math.floor(Math.random() * 10);
        console.log(k_pos)
        var kback = reb.rebound[k_pos];
        console.log(kback)

        console.log(curse)
        if(kback == "0"){
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
                    //decurse
                if(msg.content.startsWith(auth.prefix17)){
                    msg.member.cache.get(target).voice.setMute(false)
                }
                    curse = true
                }
            },6*10000)
            console.log(curse)
        }
        if(kback == "1"){
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
                client.channels.cache.get(msg.author.lastMessageChannelID).send("<@!"+target+"> >> 💣REBOUNDDDD💣 >> "+"<@!"+msg.author.id+">")
                const embedrmugen = new Discord.MessageEmbed()
                .setColor('#ffffff')
                .setTitle('Mugen! But Rebounddd😈')
                .addFields(
                    { name: 'Critical Rate  |', value: '20%',inline : true},
                    { name: 'Mute   ', value: time*10+" sec"+cri_check,inline : true  }
                )
                .setImage('https://64.media.tumblr.com/cbf2f6fcd1285887cb89bb67382e5e08/ea6ffafc3e28d5c3-85/s500x750/2013f504c877ae5a9216b2a3621bcd8bab126fd2.gif')
                client.channels.cache.get(msg.author.lastMessageChannelID).send(embedrmugen);
                msg.guild.members.cache.get(msg.author.id).voice.setMute(true)
                setTimeout(function(){
                    msg.guild.members.cache.get(msg.author.id).voice.setMute(false)
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
                    //decurse
                if(msg.content.startsWith(auth.prefix17)){
                    msg.member.cache.get(target).voice.setMute(false)
                }
                    curse = true
                }
            },6*10000)
            console.log(curse)
        }
        
    }
    console.log(" ");
})



// Listeing to the voiceStateUpdate event
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    console.log("########## update voice channel log ##########\n");
     // The member connected to a channel
    if (newVoiceState.channel) {
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
    }

    // The member disconnected from a channel.
    else if (oldVoiceState.channel) {
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
    }
    console.log(" ");
});
var key = process.env.api_key;
client.login(key);