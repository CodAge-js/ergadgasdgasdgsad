const Discord = require("discord.js");
const db = require('quick.db')
const useful = require('useful-tools')
const tarih = new Date()
module.exports.run = async (client, codage, args) => {

const voity = new Discord.RichEmbed()
.addField("__Bugünün Tarihi__",`\`${useful.tarih(tarih, 'G a Y')}\``)
.setTimestamp()
codage.channel.send(voity)
};                                                                                                                                             
                                                                                               
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tarih',
};