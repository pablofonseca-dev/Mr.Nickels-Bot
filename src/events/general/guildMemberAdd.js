const Discord = require("discord.js");
const BotEvent = require("../../containers/BotEvent");
/**
 * Event: Guild Member Add
 * Args: true, a GuildMember type object is sent to the event, with the new member joined data.
 * Description: Is triggered when a user joins to the server. The specific objective of this event is to greet the user.
 * Once: false, it could be triggered many times.
 */

const description = "This event is triggered when a user joins to the server."
const name = "guildMemberAdd"
const eventAction = function(bot, ...args){
    const [guildMember] = args[0];
    const serverName = guildMember.guild.name;
    const welcomeChannel = bot.channels.cache.get('869081750893109249');
    const rulesField = {
        name: 'Requirement',
        value: 'Please, read the rules before any action in this server.'
    }
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Welcome to the server ${guildMember.displayName}`)
        .setURL('https://discord.js.org/')
        .setAuthor('Mr.Nickels', 'https://i.imgur.com/FoyPqbs.png', 'https://discord.js.org')
        .setDescription(`Nice to meet you. I'm Mr.Nickels, a Universal Bot in development by the owner of ${serverName}`)
        .setThumbnail('https://i.imgur.com/M7O0Ml9.png')
        .addField(rulesField.name, rulesField.value)
        .setTimestamp()
        .setFooter(serverName, 'https://i.imgur.com/M7O0Ml9.png');

    welcomeChannel.send(welcomeEmbed);
};

const eventObject = new BotEvent(name, description, eventAction);
module.exports = eventObject;


