const Discord = require('discord.js')
module.exports = {
    name: "purge",
    aliases: ["clear"],
    description: "deletes messages",
    category: "channelManagement",
    guildOnly: true,
    memberpermissions: "MANAGE_MESSAGES",
    adminPermOverride: true,
    cooldown: 2,
    async execute(message, args, client) {
        // Variables:
        const amountToDelete = Number(args[0], 10) + 1;

        // Input checking:
        if (isNaN(amountToDelete)) return message.reply(`Ez nem egy szám.`)
        if (!amountToDelete) return message.reply('Meg kell adnod, hogy hány üzenet kerüljön törlésre (+purge \'szám\'')
        if (!Number.isInteger(amountToDelete)) return message.reply('Ez nem egy egész szám!')
        if (amountToDelete < 2 || amountToDelete > 100) return message.reply('A számnak 2 és 100 között kell lennie!')

        // Executing:
        try {
            await message.channel.fetch({
                limit: amountToDelete
            }).then(messages => {
                bulkDelete(messages)
            })
        } catch (err) {
            console.log(err)

        }
    },
};