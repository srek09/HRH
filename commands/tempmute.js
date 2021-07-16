const ms = require('ms')
const Discord = require('discord.js')
module.exports = {
    name: "tempmute",
    description: "temporary mutes the person",
    category: "moderation",
    guildOnly: true,
    memberpermissions: "MUTE_MEMBERS",
    adminPermOverride: true,
    cooldown: 2,
    args: args,
    async execute(message, args, client) {
        // Variables:
        const mentionedMember = message.mentions.members.first()
        let time = args[1]
        let reason = args.slice(2).join(' ')
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`${mentionedMember.user.username} le lett némítva ${message.author.username} által!`)
            .setAuthor('Happy Roleplay Hungary', client.user.displayAvatarURL() /*, "https://www.hrhgta.hu"*/ )
            .addField(`Indok: ${reason}`, `Idő: ${time}`)
            .setThumbnail(mentionedMember.user.displayAvatarURL())
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek', 'https://i.imgur.com/cB0Mg0i.png')
            .setTimestamp()

        // Input checking:
        if (!mentionedMember) return message.reply('Valakit meg kell jelölnöd, hogy lenémíthasd!')
        if (!time) return message.reply('Meg kell adnod, hogy mennyi időre szeretnéd lenémítani az adott személyt!')
        if (mentionedMember.roles.highest.position > message.member.roles.highest.position) return message.reply(`Nem némíthatod le \`${mentionedMember.user.username}\` ugyanis nagyobb rangban van nálad!`)
        if (!reason) reason = 'Nincs megadva'

        // Executing:
        await mentionedMember.roles.add(process.env.MUTEROLE).catch(err => console.log(err))
        await message.channel.send(embed)
        setTimeout(async function () {
            await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err))
            await mentionedMember.send(`Your mute has been lifted in ${message.guild.name}`).catch(err => console.log(err))
        }, ms(time));

    },
};