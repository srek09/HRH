const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: 'bans the mentioned user',
    execute(message, args, client) {
        // variables
        const mentionedMember = message.mentions.members.first();
        const reason = args.slice(1).join(' ')
        if (!mentionedMember) return message.channel.send('Valakit meg kell jelölnöd, hogy kitiltsd')
        if (!reason) reason = 'Nincs megadva'
        const banEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`Ki lettél tiltva a Happy Roleplay Hungary Discord Szerveréről!`)
            .setAuthor(client.user.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/cB0Mg0i.png')
            .addFields({
                name: 'Indok:',
                value: reason,
                inline: false
            }, )
            .setTimestamp()
            .setFooter('Happy Roleplay', 'https://i.imgur.com/cB0Mg0i.png');

        const banEmbedServer = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`<@${mentionedMember}> ki lett tiltva a Happy Roleplay Hungary Discord Szerveréről!`)
            .setAuthor(client.user.displayAvatarURL())
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
        //if (!mentionedMember.bannable) return message.channel.send('Ezt a felhasználót nem tilthatod ki!')

        // finishing
        try {
            message.channel.send(banEmbedServer)
            mentionedMember.ban(reason)
            try {
                mentionedMember.send(banEmbed)
            } catch (error) {
                console.log(`I couldn't message ${mentionedMember.user.name}`)
            }
        } catch (err) {
            console.log(err)
        }
    }
};