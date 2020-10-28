const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const p = ayarlar.prefix
exports.run = (client, message, args) => {
let log = "761155760218177556"
let argüman = new Discord.RichEmbed()
.setTitle(`__HATA__`)
.setDescription(`
**Bir Argüman Belirle ;**
Açmak için => \`-bildirim aç\`
Kapatmak için => \`-bildirim kapat\`
`)
let açık = new Discord.RichEmbed()
.setDescription(`
<a:wumpus_yellow:762801842371297290>** Sen Artık Bir Bilginsin Sunucularımızda Olan Herşeyi Biliyorsun Yeni Yapılan Duyurulardan da Anında Haberdar Oluyorsun!**`)
let kapalı = new Discord.RichEmbed()
.setDescription(`
<a:wumpus_yellow:762801842371297290>** Uzaktan Bir Taş Parçası Kafana Çarptı Birden Bildiğin Herşeyi Unuttun ve İşitme Duyunuda Kaybettin!**`)
let x = args.join(" ")
if(!x) return message.channel.send(argüman)
if (x === "aç"){
message.channel.send(açık)
message.guild.members.get(message.author.id).addRole("762800670658920478")  
client.channels.get(log).send(`${message.author} Adlı Kullanıcı Bildirimleri **Aktif** Hale Getirdi!`)
}
if (x === "kapat"){
message.channel.send(kapalı)
message.guild.members.get(message.author.id).removeRole("762800670658920478") 
client.channels.get(log).send(`${message.author} Adlı Kullanıcı Bildirimleri **Deaktif** Hale Getirdi!`)
}
}
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
 name: 'bildirim',
 description: '',
 usage: ''
};