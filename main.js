require('dotenv').config();
const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
})
const welcome = require("./welcome")
const whitelist = require('./whitelist')
const leave = require("./leave")
const prefix = process.env.PREFIX
const keepAlive = require('./server.js')
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log("Happy Roleplay szolgálatba állt!")
    keepAlive()
    welcome(client)
    whitelist(client)
    leave(client)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)

    } else if (command === 'ip') {
        client.commands.get('ip').execute(message, args, client)

    } else if (command === 'szabaly' || command === 'szabály') {
        client.commands.get('szabaly').execute(message, args, client)

    } else if (command === 'kick') {
        //+kick @jacsika troll
        client.commands.get('kick').execute(message, args, client)

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, client)
    }
})











client.login(process.env.BOT_TOKEN)