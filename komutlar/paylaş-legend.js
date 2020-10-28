const Discord = require('discord.js');
const db = require('quick.db')
const useful = require('useful-tools')
const tarih = new Date()
exports.run = (client, msg, args) => {

let logkanal = "766236509291675648"
let yetkili = "760158563204202517"
let kategori = "760106938187907102"


if(!msg.member.roles.has(yetkili))if(!msg.member.roles.has("752857228138119180")) return msg.channel.send(`Bu Komutu Kullanmak için \`Kod Paylaş\` Yetkisine Sahip Olmalısın!`)

let kodIsım = args[0]
let kodLink = args[1]
if(!kodIsım) return msg.channel.send("Kod İsmi Belirt!")
if(!kodLink) return msg.channel.send("Kod Linki Belirt")


msg.guild.createChannel(`🔵・${kodIsım}`, {
type: "text",
parent: kategori
}).then(channel => {

let log = new Discord.RichEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/765861125765857281/766209074432835584/CodAge.gif`)
.setTitle(`Legend Kod Paylaşıldı!`)
.setDescription(`10 Davet ile Erişebiliceğiniz Bir Kod Paylaşıldı!\n ‍`)
.addField("__Bilgiler__", `<:locked_channel:767026931103170581> **Yetkili** • ${msg.author}\n\n <:channel:767025851187068939> **Kod İsmi** • \`${kodIsım}\`\n <:channel:767025851187068939> **Kod Kategorisi** • \`legend\`\n <:channel:767025851187068939> **Kod Kanalı** • ${channel}`)
.setColor("BLUE")

msg.channel.send(`**\`${kodIsım}\` Adlı Kod Paylaşıldı!**`)

client.channels.get(logkanal).send(log)

const kod = new Discord.RichEmbed()
.setTitle(`JavaScript - Legend
 ‍`)
.addField("__Yetkili Bilgileri__",`**Yetkili** • ${msg.author}\n**Yetkili ID** • \`${msg.author.id}\``, true)
.addField("__Kod Bilgileri__",`**İsim** • \`${kodIsım}\`\n**Link** • [Tıkla Git!](${kodLink})\n**Kategori** • \`Legend\`\n**Tarih** • \`${useful.tarih(tarih, 'G a Y')}\``, true)
.setImage(`https://cdn.glitch.com/6b56d277-e694-418b-8e08-f976b178ea6b%2FCodAge%20Header.gif?v=1602753522928`)
.setColor("BLUE")
channel.send(kod)

const yetkili = new Discord.RichEmbed()
.setTitle(`Legend Kod Paylaşıldı!`)
.addField("Gerekli Bilgiler",`<#${logkanal}>`)
.addField("Linki",`${kodLink}`)
client.channels.get("768795123165036544").send(yetkili)
})

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['legend-paylaş', 'legendpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'legend'
};