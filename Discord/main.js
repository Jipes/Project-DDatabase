// Modules
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
const path = require('path')
const db = require('quick.db');

// Set 
client.commands = new Discord.Collection();

client.config = config;


// Handler Finder
fs.readdir('./handlers/', (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => {

        const event = require(path.join(__dirname, "handlers", file));
        event.run(client);

    })

    // Shut Down
    process.on( "SIGINT", function() {
    console.log("\nShutting down.")
    client.destroy()
    process.exit()
});

// Login
client.login(config.token);

// Export
exports.client = client;
})
