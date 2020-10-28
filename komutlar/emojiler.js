const Discord = require("discord.js");
module.exports.run = async (bot, message) => {
    var emojis = message.guild.emojis.array();
    if (!emojis || emojis === []) return message.reply("Sunucuda Emoji Yok!");
  if (emojis.length < 1) return message.reply("Sunucuda Emoji Yok!");
    if (emojis.length > 1) {
        var page = 1;
        var totalpages = emojis.length;
        var embed = new Discord.RichEmbed()
            .setTitle("__Sunucudaki Emojiler__")
            .setImage(emojis[page - 1].url)
            .setFooter(`Sayfa ${page}/${totalpages} | Emoji ID: ${emojis[page - 1].id}`)
            .setColor("BLUE");
        message.channel.send(embed).then(async function (sentEmbed) {
            const emojiArray = ["◀", "▶"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function () { });
            await sentEmbed.react(emojiArray[1]).catch(function () { });
            var reactions = sentEmbed.createReactionCollector(filter, {
                time: 300000
            });
            reactions.on("collect", async function (reaction) {
                await reaction.remove(message.author);
                if (reaction.emoji.name === "◀") {
                    if (page !== 1) {
                        page = page - 1;
                    } else {
                        page = totalpages;
                    }
                } else {
                    if (page !== totalpages) {
                        page = page + 1;
                    } else {
                        page = 1;
                    }
                }
                embed = new Discord.RichEmbed()
                    .setTitle("__Sunucudaki Emojiler__")
                    .setImage(emojis[page - 1].url)
                    .setFooter(`Emoji ${page}/${totalpages}`)
                    .setColor("BALCK");
                sentEmbed.edit(embed).catch(function () { });
            });
            reactions.on("end", () => sentEmbed.edit("Komut Sona Erdi!"));
        }).catch(() => {
            message.reply("Bu Mesajı Gönderemedim.").catch(() => {
                message.author.send(`Komut zaten çalışmakta ${message.channel}`).catch(function () { });
            });
        });
    } else {
        let emojiembed = new Discord.RichEmbed()
            .setTitle("__Sunucudaki Emojiler__")
            .setImage(emojis[0].url)
            .setFooter(`Emoji ${1}/${1}`)
            .setColor("BLACK");
        message.channel.send(emojiembed);
    }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojiler"],
  permLevel: 0
};

module.exports.help = {
  name: 'emoji',
  description: 'Sayfalı emojiler',
  usage: 'sayfalı-emoji'
};