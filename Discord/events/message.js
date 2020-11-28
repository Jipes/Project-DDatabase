// Modules
const config = require("./../config.json");
const db = require('quick.db');

// Export
module.exports = async (client, message) => {

    // Set
    client.config = config;

    // Check Prefix And Bot
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    //Splits args and command
    const args = message.content.slice(config.prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    //Stores command from the commands folder
    const cmd = client.commands.get(commandName);

    //If command doesnt exist then returns
    if (!cmd) {
    message.channel.send("That's not a command!")
    return
    };

    try {
        cmd.execute(message, args, client);
    } catch (error) {
        console.log(error);
        message.reply('There was an error trying to execute that command!');
    }
}
