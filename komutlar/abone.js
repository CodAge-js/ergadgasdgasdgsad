const Discord = require('discord.js');
const moment = require('moment')
const ayarlar = require('../ayarlar.json')
const p = ayarlar.prefix
exports.run = (client, message, args) => {
let zaman = moment().format("DD/MM/YYYY (HH:mm:ss)")
let abone = "765663691655217183"
let logkanal = "761317068674433064"
let sunucu = "749937129097789530"
let yetkili = "761156712740552734"

if(!message.guild.members.get(message.author.id).roles.has(yetkili)) return message.channel.send(`**Yetkili Değilsin Bu Komutu Kullanamazsın!**`)

let user = message.mentions.users.first();
if(!user) return message.channel.send(`Abone Rolü Verilicek Kullanıcıyı Belirlemedin!`) 
   if(!client.guilds.get("749937129097789530").members.get(user.id)) return message.channel.send(`${user}`, new Discord.RichEmbed().setColor("RED").setTitle(`__HATA__`).setDescription(`Kullanıcı [Codes](https://discord.gg/Ccbu7bz) Sunucumuzda Bulunmuyor, Bu Altyapılar Rolünü Almasını Engelliyor!`))
client.guilds.get(sunucu).members.get(user.id).addRole(abone)

const embed = new Discord.RichEmbed()
.setColor("#ff0000")
.setThumbnail(`${user.avatarURL}`)
.setTitle(`Altyapılar Rolü Verildi!`)
.setDescription(`Artık Codes Sunucumuzda Altyapılar Rolüne Sahipsin!`)
.addField("__Yetkili__",`• ${message.author}`)
.addField("__Kullanıcı__",`• ${user}`)
.addField("__Önemli__",`<#766016196004020224> Kanalında Size Etiket Attım, Kanala Giderek Altyapıları Görebilirsin!`)
message.channel.send(`${user}`, embed)
client.channels.get("766016196004020224").send(`${user}`, new Discord.RichEmbed().setTitle(`Merhaba!`).setDescription(`Artık Altyapılar Rolüne Sahipsin ${user}, Aşşağıdaki Kanallardan Altyapıları Görebilirsin! \n\`${zaman}\``))
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["a"],
    permLevel: 0
  };
  
exports.help = {
 name: 'abone',
};