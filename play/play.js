const Discord = require("discord.js");
const config = require("../secure/config.json");

let bot = new Discord.Client();

const {promises: fs} = require('fs');

/**
 * Event: Ready
 * Args: false, there is no need.
 * Description: Is triggered when the bot is ready to work and has initialized a new session.
 * Once: true, it's only triggered once.
 */
bot.once('ready', () => {
    console.log(`Ready!`);
    console.warn(`PLAY MODE ACTIVATED`);
    console.warn('Starting Mr.Nickels event handling operations');
    bootEventsHandler(bot).then(() => console.log('Event Handling Operations: OK'))
});

const obtainEventObjects = async function(eventDirectory){
    let filesCollection  = await readFilesFromDirectory(eventDirectory);
    let eventObjects = [];
    filesCollection.forEach(file => {
        const eventModule = require('.'.concat(eventDirectory).concat(file));
        eventObjects.push(eventModule);
    })
    return eventObjects
};

const readFilesFromDirectory = async function(filePath){
    let generalFiles = [];
    try {
        generalFiles = await fs.readdir(filePath, {encoding: "utf-8"})
    }catch{
        console.log('Directory Reading Error');
    }
    return generalFiles;
}

async function bootEventsHandler(botInstance) {
    const eventObjectsCollection = await obtainEventObjects('./src/events/general/');

    eventObjectsCollection.forEach(eventObj => {
       const {eventName, eventDescription: description, eventFunction: functionality}  = eventObj;
       botInstance.on(eventName, (...args) => functionality(bot, args));
    });

}
bot.login(config.token); //Login command to set a new Mr.Nickels session.