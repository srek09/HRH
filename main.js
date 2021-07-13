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
        client.commands.get('ping').execute(message, args)
    } else if (command === 'ip') {
        client.commands.get('ip').execute(message, args)
    } else if (command === 'szabaly' || command === 'szabály') {
        client.commands.get('szabaly').execute(message, args)
    }
})

client.login(process.env.BOT_TOKEN)