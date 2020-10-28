const Discord = require('discord.js');
const useful = require('useful-tools')

exports.run = async (client, message, args) => {
let log = "761155760218177556"
let kullanıcı = message.mentions.user.first()
if(!kullanıcı) return message.channel.send(`İstek Bildiren Kullanıcıyı Gir.`)
if(!args[1]) return message.channel.send(`İstek Kategorisini Gir.`)
if(!args[2]) return message.channel.send(`İstek Kanalını Gir.`)

client.channels.get(log).send(`
**\`${kullanıcı.username}\` Adlı Kullanıcının İsteği Yerine Getirildi!**
**Kategori** • **${args[1]}**
**Kanal** • ${args[2]}`);
kullanıcı.send(`
**İsteğiniz Yerine Getirildi!**
**Kategori** • **${args[1]}**
**Kanal** • ${args[2]}`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tamamlandı',
  description: 'Tarihi gösterir.',
  usage: 'tarih'
};