class BotEvent{
    eventName
    eventDescription
    eventFunction

    constructor(name, description, eventFunction){
        this.eventName = name;
        this.eventDescription = description;
        this.eventFunction = eventFunction;
    }
}

module.exports = BotEvent;
