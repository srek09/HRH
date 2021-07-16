const Discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "mutes the mentioned member",
    category: "moderation",
    guildOnly: true,
    memberpermissions: "MUTE_MEMBERS",
    adminPermOverride: true,
    execute(message, args, client) {
        const muteRole = message.guild.roles.cache.get(process.env.MUTEROLE)
        const mentionedMember = message.mentions.members.first()
        let reason = args.slice(1).join(' ')
        if (!reason) reason = 'Nincs megadva.'
        if (!mentionedMember) {
            return message.reply('Valakit meg kell jelölnöd, hogy lenémíthasd!')
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`${mentionedMember.user.username} le lett némítva ${message.author.user.username} által!`)
            .setAuthor('Happy Roleplay Hungary', client.user.displayAvatarURL() /*, "https://www.hrhgta.hu"*/ )
            .addFields({
                name: "Indok",
                value: reason,
            })
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek', 'https://i.imgur.com/cB0Mg0i.png')
            .setTimestamp()

        if (mentionedMember.roles.highest.position > message.author.roles.highest.position) return message.reply('Őt nem némíthatod le, ugyanis nagyobb rangja van nálad')
        mentionedMember.roles.add(muteRole.id)
    },
};