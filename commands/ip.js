const Discord = require('discord.js')
const ip = process.env.IP
module.exports = {
    name: 'ip',
    description: 'Send IP to chat',
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`A Happy Roleplay Hungary ip címe: ${ip}`)
            .setTimestamp()
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek', 'https://i.imgur.com/cB0Mg0i.png')
        message.channel.send(embed)
    }
}