require('dotenv').config();
const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
})
const welcome = require("./welcome")
const whitelist = require('./whitelist')
const prefix = process.env.PREFIX
const ip = process.env.IP
const keepAlive = require('./server.js')

client.commands = new Discord.Collection();

const commandFiles = fs.readFileSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command7 = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}



client.on("ready", () => {
    console.log("Happy Roleplay szolgálatba állt!")
    keepAlive()
    welcome(client)
    whitelist(client)
})

client.on('message', message => {
    /*
        BASIC CONDITION CHECKING
                                  */
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    /*
        COMMANDS
                  */
    if (command === 'ping') {
        client.commands.get('ping')
    } else if (command === 'ip') {
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`A Happy Roleplay Hungary ip címe: ${ip}`)
            .setTimestamp()
        message.channel.send(embed)
    } else if (command === 'szabaly' || command === 'szabály') {
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
    }
})


client.login(process.env.BOT_TOKEN)