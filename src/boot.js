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



bot.login(config.token); //Login command to set a new Mr.Nickels session.



