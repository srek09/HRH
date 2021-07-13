const Discord = require('discord.js')
module.exports = {
    name: "szabaly",
    description: 'Sends the rules',
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle('Szabályzat')
            .setURL('https://youtube.com')
            .setAuthor('Happy Roleplay', client.user.avatarURL())
            .setThumbnail("https://i.imgur.com/cB0Mg0i.png")
            .addFields({
                name: 'Szabály 1',
                value: 'én egy ló vagyok, de te nem lehetsz',
                inline: false
            }, {
                name: 'Szabály 2',
                value: 'én egy ló vagyok',
                inline: false
            }, {
                name: 'Szabály 3',
                value: 'én egy ló vagyok',
                inline: false
            }, {
                name: 'Szabály 4',
                value: 'én egy ló vagyok',
                inline: false
            }, )
            .setTimestamp()
        message.channel.send(embed)
    },
};