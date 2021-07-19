const Discord = require('discord.js')
module.exports = {
    name: "tshelp",
    aliases: ["ts"],
    description: "ts help",
    category: "help",
    guildOnly: true,
    cooldown: 2,
    async execute(message, args) {

        // Variables:
        const embed = new Discord.MessageEmbed()
            .setColor('#1ad94d')
            .setTitle(`TeamSpeak szerverünk ip címe: hrh.zap-ts3.com`)
            .setDescription('A szerverre való csatlakozáshoz a TeamSpeak szükséges!')
            .addFields({
                name: "Szerverünkre a TeamSpeak 3-as klienssel lehet felcsatlakozni:",
                value: "[innen töltheted le](https://teamspeak.com/en/downloads/)"
            }, {
                name: "Szerverünkre a Tokovoip plugin 1.5.4-es verzió szükséges:",
                value: "[innen töltheted le](https://github.com/Itokoyamato/TokoVOIP_TS3/releases/download/v1.5.6/tokovoip-1.5.4.ts3_plugin)"
            })
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxR5jSyrZQQo1gkRJk4VVfNcCTWpZbbLQew&usqp=CAU')
            .setTimestamp()

        // Executing:
        await message.channel.send(embed)

    },
};