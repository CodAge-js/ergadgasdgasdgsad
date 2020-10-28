const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const belirlenmedi = new Discord.RichEmbed().setColor('BLACK').setTitle('Kod Kontrol').setDescription(`Kontrol Ediceğiniz Kodları Seçmediniz\nAşşağıdan Kategorileri Görebilir/Kullanabilirsiniz.\n ‍\n ‍`).addField("Kod Kategorileri ;\n ‍",`**≫** js legend\n<a:turuncu:761863766467674163> **≫** js ultra\n<a:mor:763316877140819998> **≫** altyapılar\n ‍\n ‍\n**Örnek Kullanım ;**\n\`-kontrol js legend\`\n\`         js ultra\`\n\`         altyapılar\``)

let x = args.join(" ")
if(!x) return message.channel.send(belirlenmedi)
 
 if (x === "js legend"){
let kategori = client.guilds.get('749937129097789530').channels.find(y => y.id === '760106938187907102')
let isimler = kategori.children.map(y => y.name )
let idler = kategori.children.map(y => y.id )

const embed = new Discord.RichEmbed()
.setThumbnail(`https://cdn.glitch.com/6b56d277-e694-418b-8e08-f976b178ea6b%2FCodAge.gif?v=1602765760748`)
.setTitle("JavaScript - Legend")
.setDescription(`10 Davet ile Erişebiliceğiniz Kodların Bilgileri,`)
.addField(`__Kod İsimleri__`,`\`\`\`${isimler.join(`\n`)}\`\`\``,true)
.addField(`__Kanallar__`,`・<#${idler.join(`>\n・<#`)}>`,true)
.setFooter(message.guild.name, message.guild.iconURL)
message.author.send(embed)
message.channel.send(`**DM Kutunu Kontrol Et Lütfen** 📬`)
 }
 if (x === "js ultra"){
let kategori = client.guilds.get('749937129097789530').channels.find(y => y.id === '760107014788612166')
let isimler = kategori.children.map(y => y.name )
let idler = kategori.children.map(y => y.id )

const embed = new Discord.RichEmbed()
.setThumbnail(`https://cdn.glitch.com/6b56d277-e694-418b-8e08-f976b178ea6b%2FCodAge.gif?v=1602765760748`)
.setTitle("JavaScript - Ultra")
.setDescription(`20 Davet ile Erişebiliceğiniz Kodların Bilgileri,`)
.addField(`__Kod İsimleri__`,`\`\`\`${isimler.join(`\n`)}\`\`\``,true)
.addField(`__Kanallar__`,`・<#${idler.join(`>\n・<#`)}>`,true)
.setFooter(message.guild.name, message.guild.iconURL)
message.author.send(embed)
message.channel.send(`**DM Kutunu Kontrol Et Lütfen** 📬`)
 }
 if (x === "altyapılar"){
let kategori = client.guilds.get('749937129097789530').channels.find(y => y.id === '760109430066511942')
let isimler = kategori.children.map(y => y.name )
let idler = kategori.children.map(y => y.id )

const embed = new Discord.RichEmbed()
.setThumbnail(`https://cdn.glitch.com/6b56d277-e694-418b-8e08-f976b178ea6b%2FCodAge.gif?v=1602765760748`)
.setTitle("CodAge - Altyapılar")
.addField(`__Kod İsimleri__`,`\`\`\`${isimler.join(`\n`)}\`\`\``,true)
.addField(`__Kanallar__`,`・<#${idler.join(`>\n・<#`)}>`,true)
.setFooter(message.guild.name, message.guild.iconURL)
message.author.send(embed)
message.channel.send(`**DM Kutunu Kontrol Et Lütfen** 📬`)
 }
  
};

exports.conf = {
  enabled: true,
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kontrol',
};