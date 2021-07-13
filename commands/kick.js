const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: 'kicks the mentioned user',
    execute(message, args, client) {
        // variables
        const mentionedMember = message.mentions.members.first();
        const reason = args.slice(1).join(' ')
        const kickEmbed = new Discord.MessageEmbed()
            .setColor('#f00')
            .setTitle(`Ki lettél rúgva a Happy Roleplay Hungary Discord Szerveréről!`)
            .setAuthor('Happy Roleplay', client.user.displayAvatarURL())
            .setThumbnail('Happy Roleplay', 'https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok',
                value: reason,
                inline: true
            }, )

            .setTimestamp()
            .setFooter('https://i.imgur.com/cB0Mg0i.png')
        //conditions (also permission checking)
        if (!reason) reason = 'no reason given'
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Nincs jogosultságod, hogy ezt a parancsot használd!')
        if (!mentionedMember.kickable) return message.channel.send('Ezt a felhasználót nem rúghatod ki!')

        // finishing
        try {
            message.channel.send(kickEmbed)
            mentionedMember.kick(reason)
            try {
                mentionedMember.send(kickEmbed)
            } catch (error) {
                console.log(`I couldn't message ${mentionedMember.user.name}`)
            }
        } catch (err) {
            console.log(err)
        }
    }
};