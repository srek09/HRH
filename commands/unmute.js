const Discord = require('discord.js')
module.exports = {
    name: "unmute",
    description: "unmutes the mentioned member",
    category: "moderation",
    guildOnly: true,
    memberpermissions: "MUTE_MEMBERS",
    adminPermOverride: true,
    execute(message, args, client) {
        const muteRole = message.guild.roles.cache.get(process.env.MUTEROLE)
        const mentionedMember = message.mentions.members.first()
        if (!mentionedMember) {
            return message.reply('Valakit meg kell jelölnöd, hogy feloldhasd a némítását!')
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`${mentionedMember.user.username} némtítása le lett véve ${message.author.username} által!`)
            .setAuthor('Happy Roleplay Hungary', client.user.displayAvatarURL() /*, "https://www.hrhgta.hu"*/ )
            .setThumbnail(mentionedMember.user.displayAvatarURL())
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek', 'https://i.imgur.com/cB0Mg0i.png')
            .setTimestamp()
        if (mentionedMember.roles.highest.position > message.member.roles.highest.position) return message.reply('Róla nem veheted le a némítást, ugyanis nagyobb rangja van nálad')
        mentionedMember.roles.remove(muteRole.id)
        message.channel.send(embed)
    },
};