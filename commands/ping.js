module.exports = {
    name: "commandName",
    description: 'This is a ping command!',
    execute(message, args) {
        message.reply("pong!")
    },
};