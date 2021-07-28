/*
    Author: Pablo Fonseca
    Developer Signature: pafom
    Last Date Updated: 07/27/2021
    Description: Boot is the main bot file, it's purpose is to start the bot and get it working and logged in each server.
 */

const Discord = require("discord.js");
const config = require("../secure/config.json");

let bot = new Discord.Client();

const { welcome_channel: welcomeChannel, prefix} = config;
/**
 * Event: Ready
 * Args: false, there is no need.
 * Description: Is triggered when the bot is ready to work and has initialized a new session.
 * Once: true, it's only triggered once.
 */
bot.once('ready', () => {
    console.log(`Ready!`);
});

/**
 * Event: Guild Member Add
 * Args: true, a GuildMember type object is sent to the event, with the new member joined data.
 * Description: Is triggered when a user joins to the server. The specific objective of this event is to greet the user.
 * Once: false, it could be triggered many times.
 */
bot.on('guildMemberAdd', (member) => {
    const serverName = member.guild.name;
    const welcomeChannel = bot.channels.cache.get('869081750893109249');
    const rulesField = {
        name: 'Requirement',
        value: 'Please, read the rules before any action in this server.'
    }
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Welcome to the server ${member.displayName}`)
        .setURL('https://discord.js.org/')
        .setAuthor('Mr.Nickels', 'https://i.imgur.com/FoyPqbs.png', 'https://discord.js.org')
        .setDescription(`Nice to meet you. I'm Mr.Nickels, a Universal Bot in development by the owner of ${serverName}`)
        .setThumbnail('https://i.imgur.com/M7O0Ml9.png')
        .addField(rulesField.name, rulesField.value)
        .setTimestamp()
        .setFooter(serverName, 'https://i.imgur.com/M7O0Ml9.png');

    welcomeChannel.send(welcomeEmbed);
});

bot.login(config.token); //Login command to set a new Mr.Nickels session.



