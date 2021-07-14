const leave = process.env.LEAVECHANNEL
const Discord = require('discord.js')
module.exports = (client) => {
    client.on('guildMemberRemove', (member) => {
        channel = member.guild.channels.cache.get(leave)
        const embed = new Discord.MessageEmbed()
            .setAuthor('Happy Roleplay Hungary', client.user.displayAvatarURL())
            .setColor('#1ad94d')
            .setTitle(`Köszönjük, hogy itt voltál ${member.user.username}!`)
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek', 'https://i.imgur.com/cB0Mg0i.png')
            .setTimestamp()
        channel.send(embed)
    })
}