const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: 'bans the mentioned user',
    execute(message, args, client) {
        // variables
        const mentionedMember = message.mentions.members.first()
        const reason = args.slice(1).join(' ')
        if (!mentionedMember) return message.channel.send('Valakit meg kell jelölnöd, hogy kitiltsd')
        if (!reason) reason = 'Nincs megadva'
        const banEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`Ki lettél tiltva a Happy Roleplay Hungary Discord Szerveréről!`)
            .setAuthor('Happy Roleplay', client.user.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok:',
                value: reason,
                inline: false
            }, )
            .setTimestamp()
            .setFooter('Happy Roleplay', 'https://i.imgur.com/cB0Mg0i.png')

        const banEmbedServer = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`${mentionedMember.user.username} ki lett tiltva a Happy Roleplay Hungary Discord Szerveréről ${message.author.user.username}!`)
            .setAuthor('Happy Roleplay', client.user.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok:',
                value: reason,
                inline: false
            }, )

            .setTimestamp()
            .setFooter('Happy Roleplay', 'https://i.imgur.com/cB0Mg0i.png')


        //conditions (also permission checking)
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Nincs jogosultságod, hogy ezt a parancsot használd!')
        //if (!mentionedMember.banable) return message.channel.send('Ezt a felhasználót nem tilthatod ki!')

        // finishing
        try {
            try {
                mentionedMember.send(banEmbed)
            } catch (err) {
                console.log(`I couldn't message ${mentionedMember.user.name}`)
            }
            message.channel.send(banEmbedServer)
            mentionedMember.ban({
                days: 0,
                reason: reason
            })
        } catch (err) {
            console.log(err)
        }
    }
}