const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
const komut = new Discord.RichEmbed()
.setTitle(`__HATA__`)
.setDescription(`
Bu Komut Sadece [Ana Sunucumuzun](https://discord.gg/2N5NzSt) <#761153749895872553> Kanalında Kullanabilirsin.`)
   if(message.channel.id !== "761153749895872553") return message.channel.send(komut)
    const js = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('JavaScript')
.setDescription(`JavaScript Sürümü Seçmediniz!
Aşşağıdan Sürümlere Bakarak JavaScript Rolü Alabilirsiniz.
 ‍
 ‍`)
.addField("JavaScript Sürümleri ;\n ‍",`<a:beyaz:761863795177947157> **≫** JavaScript - Normal • \`-js normal\`
<a:mavi:761863737485033472> **≫** JavaScript - Legend • \`-js legend\`
<a:turuncu:761863766467674163> **≫** JavaScript - Ultra • \`-js ultra\`
 ‍
 ‍`)
.setThumbnail(`https://cdn.glitch.com/e967a0f0-8ff1-40bd-b34e-78038564ad07%2F1.gif?v=1601983632203`)
//HATALAR
    const hata = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`Kodların Paylaşıldığı [Sunucuda](https://discord.gg/Ccbu7bz) Bulunmuyorsun, Js Rolü Almak için [CodAge Codes](https://discord.gg/Ccbu7bz) Sunucusunda Bulunman Gerekiyor!`)
    const hatanormal = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`JavaScript Sürümünüz Zaten **JavaScript - Normal** Olarak Ayarlanmış!`)
//LEGEND HATALARI
    const hatalegend = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`JavaScript Sürümünüz Zaten **JavaScript - Legend** Olarak Ayarlanmış!`)
    const hatalegend2 = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`JavaScript Sürümünüz **JavaScript - Normal** Olarak Ayarlanmamış,
Bu da Js Sürümünüzü **JavaScript - Legend**'e Yükseltmenizi Engelliyor!`)
    const hatalegend3 = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`Sürümünüzü **JavaScript - Legend**'e Yükseltemedim!
**Gerekli Davet Sayısı** • **10**
`)
//ULTRA HATALARI
    const hataultra = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`JavaScript Sürümünüz Zaten **JavaScript - Ultra** Olarak Ayarlanmış!`)
    const hataultra2 = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`JavaScript Sürümünüz **JavaScript - Legend** Olarak Ayarlanmamış,
Bu da Js Sürümünüzü **JavaScript - Ultra**'ya Yükseltmenizi Engelliyor!`)
    const hataultra3 = new Discord.RichEmbed().setColor('RED').setTitle(`__HATA__`).setDescription(`Sürümünüzü **JavaScript - Ultra**'ya Yükseltemedim!
**Gerekli Davet Sayısı** • **20**
`)


//KOMUT
   if(!bot.guilds.get("749937129097789530").members.get(message.author.id)) return message.channel.send(hata)
let x = args[0]
if(!x) return message.channel.send(js)
//NORMAL
  if (x === "normal"){
if(bot.guilds.get("749937129097789530").members.get(message.author.id).roles.has("760109614715895808")) return message.channel.send(hatanormal)
      await bot.guilds.get("749937129097789530").members.get(message.author.id).addRole("760109614715895808")
    const normal = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('BAŞARILI')
      .setDescription(`JavaScript Sürümünüz **JavaScript - Normal** Olarak Ayarlandı!
 ‍
 ‍`)
.addField("JavaScript Sürümleri ;\n ‍",`<a:beyaz:761863795177947157> **≫** JavaScript - Normal • <:byz_tik:764575934094245920>\n<a:mavi:761863737485033472> **≫** JavaScript - Legend • \`-js legend\`\n<a:turuncu:761863766467674163> **≫** JavaScript - Ultra • \`-js ultra\`\n ‍\n ‍`)
.setThumbnail(`https://cdn.glitch.com/e967a0f0-8ff1-40bd-b34e-78038564ad07%2F1.gif?v=1601983632203`)
message.channel.send(normal)
}
//LEGEND
  if (x === "legend"){
if(!bot.guilds.get("749937129097789530").members.get(message.author.id).roles.has("760109614715895808")) return message.channel.send(hatalegend2)
if(!message.guild.members.get(message.author.id).roles.has("761926237093494784")) return message.channel.send(hatalegend3)
if(bot.guilds.get("749937129097789530").members.get(message.author.id).roles.has("760109652247314433")) return message.channel.send(hatalegend)

      await bot.guilds.get("749937129097789530").members.get(message.author.id).addRole("760109652247314433")
    const normal = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('BAŞARILI')
      .setDescription(`JavaScript Sürümünüz **JavaScript - Legend** Olarak Ayarlandı!
 ‍
 ‍`)
.addField("JavaScript Sürümleri ;\n ‍",`<a:beyaz:761863795177947157> **≫** JavaScript - Normal • <:byz_tik:764575934094245920>\n<a:mavi:761863737485033472> **≫** JavaScript - Legend • <:byz_tik:764575934094245920>\n<a:turuncu:761863766467674163> **≫** JavaScript - Ultra • \`-js ultra\`\n ‍\n ‍`)
.setThumbnail(`https://cdn.glitch.com/e967a0f0-8ff1-40bd-b34e-78038564ad07%2F1.gif?v=1601983632203`)
message.channel.send(normal)
}
//ULTRA
  if (x === "ultra"){
if(!bot.guilds.get("749937129097789530").members.get(message.author.id).roles.has("760109652247314433")) return message.channel.send(hataultra2)
if(!message.guild.members.get(message.author.id).roles.has("761926272494338048")) return message.channel.send(hataultra3)
if(bot.guilds.get("749937129097789530").members.get(message.author.id).roles.has("760109728192921610")) return message.channel.send(hataultra)

      await bot.guilds.get("749937129097789530").members.get(message.author.id).addRole("760109728192921610")
    const normal = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('BAŞARILI')
      .setDescription(`JavaScript Sürümünüz **JavaScript - Ultra** Olarak Ayarlandı!
 ‍
 ‍`)
.addField("JavaScript Sürümleri ;\n ‍",`<a:beyaz:761863795177947157> **≫** JavaScript - Normal • <:byz_tik:764575934094245920>\n<a:mavi:761863737485033472> **≫** JavaScript - Legend • <:byz_tik:764575934094245920>\n<a:turuncu:761863766467674163> **≫** JavaScript - Ultra • <:byz_tik:764575934094245920>\n ‍\n ‍`)
.setThumbnail(`https://cdn.glitch.com/e967a0f0-8ff1-40bd-b34e-78038564ad07%2F1.gif?v=1601983632203`)
message.channel.send(normal)
}

};                                     
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "js rolu",
  usage: "js"
};
