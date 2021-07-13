require('dotenv').config()
const whitelistChannel = process.env.WHITELISTCHANNEL
const Discord = require("discord.js")
const whitelistRang = process.env.WHITELISTRANG

module.exports = (client) => {
    client.on('messageReactionAdd', async (messageReaction, user) => {
        if (messageReaction.message.partial) await messageReaction.message.fetch()
        if (messageReaction.partial) await messageReaction.fetch() 
        if (user.bot) return
        if (!messageReaction.message.guild) return
        if (messageReaction.message.channel.id == whitelistChannel) await messageReaction.message.guild.members.cache.get(user.id).roles.add(whitelistRang)
        
    })
    client.on('messageReactionRemove', async (messageReaction, user) => {
        if (messageReaction.message.partial) await messageReaction.message.fetch()
        if (messageReaction.partial) await messageReaction.fetch() 
        if (user.bot) return
        if (!messageReaction.message.guild) return
        if (messageReaction.message.channel.id == whitelistChannel) await messageReaction.message.guild.members.cache.get(user.id).roles.remove(whitelistRang)
    })
}