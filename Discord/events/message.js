// Modules
const config = require("./../config.json");
const db = require('quick.db');

// Export
module.exports = async (client, message) => {

    // Set
    client.config = config;

    // Check
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // Split
    const args = message.content.slice(config.prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    // Const
    const cmd = client.commands.get(commandName);

    // Check
    if (!cmd) {
    message.channel.send("That's not a command!")
    return
    };

    // Execute
    try {
        cmd.execute(message, args, client);
    } catch (error) {
        console.log(error);
        message.reply('There was an error trying to execute that command!');
    }
}
