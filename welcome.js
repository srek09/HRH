require('dotenv').config()
const betoppano = process.env.BETOPPANO
const Discord = require("discord.js")
module.exports = (client) => {
    const channelId = betoppano;
    client.on("guildMemberAdd", (member) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`Köszöntünk a Happy Roleplay Hungary Discord szerverén <@${member.user.username}> !`)
            .setAuthor('Happy Roleplay Hungary', client.user.displayAvatarURL() /*, "https://www.hrhgta.hu"*/ )
            .setDescription("[👍 Facebook](https://www.facebook.com/happyroleplayhungary/ '') | [🎧 Teamspeak](https://www.facebook.com/happyroleplayhungary/ 'Hamarosan...') | [🌍 Site](https://www.facebook.com/happyroleplayhungary/ 'Hamarosan...')")
            .addFields({
                name: "Kellemes játékot és jó szórakozást Kíván a HRH csapata!",
                value: "A szabályzatot tartsd be akkor is, ha nem olvastad el!"
            })
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(embed);
    });
};