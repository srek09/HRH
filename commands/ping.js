const Discord = require('discord.js')
module.exports = {
    name: "ping",
    description: 'This is a ping command!',
    execute(message, args) {
        message.reply("pong!")
    },
};