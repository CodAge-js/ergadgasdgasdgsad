const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const useful = require('useful-tools')

const app = express('express');
app.get("/", (request, response) => {
  console.log(Date.now() + "...");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\
  const tarih = new Date()
////////////////////////////////////////////////////// İSTEK
client.on("message", async codage => {

if(codage.channel.id !== "761155711920635944") return

codage.delete(30)
const istek = new Discord.RichEmbed()
.setTitle(`İstek Bildirildi!`)
.setDescription(`
**İstek İçeriği ;**
\`\`\`
${codage.content}
\`\`\`
**İstek Bildirilme Tarihi » \`${useful.tarih(tarih, 'G a Y')}\`**
**İstek Bildiren Kullanıcı » ${codage.author}**
`)
.setFooter(codage.author.username, codage.author.avatarURL)
        client.channels.get("766946766523990026").send(istek).then(async function (istekdeneme) {
            const emojiArray = ["upvote:766943651040854016", "downvote:766943754363731988"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name)
            await istekdeneme.react(emojiArray[0]).catch(function () { });
            await istekdeneme.react(emojiArray[1]).catch(function () { });
        })
const dm = new Discord.RichEmbed()
.setTitle(`<a:onay2:762055229189390346> İsteğiniz Başarıyla Bildirildi!`)
.setDescription(`İsteğiniz Yetkililerimize Bildirildi, İsteğiniz Cevaplandığında Size Geri Döneceğim.\n‍\n‍`)
.setThumbnail(`${codage.author.avatarURL}`)
.addField("<:zaman:762055137501380658> __İstek Bilgileri ;__", ` ‍
**Bildirilme Tarihi » \`${useful.tarih(tarih, 'G a Y')}\`**
**Bekleme Süresi »** \`1 - 3 Saat Arası Sürebilir.\`
**İstek Durumu »** \`Beklemede\` <a:yukleniyor:762243928543592489> 
**İstek İçeriği »** \`\`\`${codage.content}\`\`\`
**İstek Değeri »** \`JavaScript - Normal\` Olarak Tespit Edildi!\n‍`)
.addField("<a:warn:762055215511240725> __Uyarı ;__",`‍
**»** Eğer Bir Altyapı İstediyseniz İsteğiniz Red Edilir.

**»** Eğer Zaten Bulunan Bir Kod İstediyseniz İsteğiniz Red Edilir.

**»** Eğer Daha Önceden İstediğiniz Birşey İstediyseniz İstek Kanalından Yasaklanırsınız.

**»** Eğer İsteğinizi Komut Kullanarak İstediyseniz İstek Kanalından Yasaklanırsınız.`)
codage.author.send(dm)
client.channels.get("761155760218177556").send(`${codage.author} Adlı Kullanıcı Bir İstek Bildirdi!`)
})

////////////////////////////////////////////////////// OTO KICK
client.on("guildMemberRemove", async member => {
if(member.guild.id !== "761136659910754324") return
client.guilds.get("749937129097789530").members.get(member.id).kick()
client.channels.get("763417975495589888").send(`<@!${member.id}> Adlı Kullanıcı **CodAge** Sunucusundan Çıktığı için Bu Sunucudan Atıldı!`)
})

////////////////////////////////////////////////////// DIĞER
client.on("guildMemberAdd", async member =>{
 let message = member.guild.channels.find(x => x.id === `765658812018982924`)
const hoşgeldin = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`Hoşgeldin Gezgin!`)
.setDescription(`**Hoşgeldin ${member}, Seninle Birlikte \`${message.guild.memberCount}\` Kişiyiz!**\n ‍`)//
.addField("__Kullanıcı__",`${member}`, true)
.addField("__Kullanıcı ID__",`\`${member.id}\``, true)
message.send(hoşgeldin)
})
client.on("guildMemberRemove", async member =>{
 let message = member.guild.channels.find(x => x.id === `765658812018982924`)
const bye = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`Görüşürüz Gezgin!`)
.setDescription(`**Görüşürüz ${member}, Sen Çıktın ve Biz \`${message.guild.memberCount}\` Kişi Kaldık!**\n ‍`)//
.addField("__Kullanıcı__",`${member}`, true)
.addField("__Kullanıcı ID__",`\`${member.id}\``, true)
message.send(bye)
})
client.on('ready', ()=>{
client.channels.get("766203612489318401").join()
   })

client.on("message", async codage => {
if(codage.channel.id !== "766912027243315231") return

codage.delete(30)

const yetkili = new Discord.RichEmbed()
.setTitle(`Yetkili Başvurusu!`)
.setDescription(`
${codage.content}
<:byz_ok:764575934363205674> **Başvuru Tarihi » \`${useful.tarih(tarih, 'G a Y')}\`**
<:byz_ok:764575934363205674> **Başvuran Kullanıcı »** ${codage.author}`)
client.channels.get("761205970696142879").send(yetkili)
})
///////////////////////////////////////////