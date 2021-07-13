const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: 'kicks the mentioned user',
    execute(message, args, client) {
        // variables
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(' ')
        if (!mentionedMember) return message.channel.send('Valakit meg kell jelölnöd, hogy kirúgd')
        if (!reason) reason = 'Nincs megadva'
        const kickEmbed = new Discord.MessageEmbed()
            .setColor('#f00')
            .setTitle(`Ki lettél rúgva a Happy Roleplay Hungary Discord Szerveréről!`)
            .setAuthor('Happy Roleplay', client.user.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok',
                value: reason,
                inline: true
            }, )

        const kickEmbedServer = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`${mentionedMember.user.username} ki lett rúgva a Happy Roleplay Hungary Discord Szerveréről ${message.author.username} által!`)
            .setAuthor('Happy Roleplay', client.user.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok:',
                value: reason,
                inline: false
            }, )


            .setTimestamp()
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek','https://i.imgur.com/cB0Mg0i.png')
        //conditions (also permission checking)
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Nincs jogosultságod, hogy ezt a parancsot használd!')
        if (!mentionedMember.kickable) return message.channel.send('Ezt a felhasználót nem rúghatod ki!')

        // finishing
        try {
            try {
                mentionedMember.send(kickEmbed)
            } catch (error) {
                console.log(`I couldn't message ${mentionedMember.user.name}`)
            }
            message.channel.send(kickEmbedServer)
            log.send(kickEmbedServer)

            mentionedMember.kick(reason)
        } catch (err) {
            console.log('nibaaaaaaaaaaaaaaaaaaaa')
        }
    }
};