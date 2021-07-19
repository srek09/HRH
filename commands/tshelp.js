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
            .setDescription('A szerveren kötelező a TeamSpeak használata!')
            .addFields({
                name: "Szerverünkre a TeamSpeak 3-as klienssel lehet felcsatlakozni:",
                value: "[link](https://teamspeak.com/en/downloads/)"
            }, {
                name: "Szerverünkre a Tokovoip plugin 1.5.4-es verzió szükséges:",
                value: "[link](https://github.com/Itokoyamato/TokoVOIP_TS3/releases/download/v1.5.6/tokovoip-1.5.4.ts3_plugin)"
            })
            .setFooter('Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek')
            .setTimestamp()

        // Executing:
        await message.channel.send(embed)

    },
};