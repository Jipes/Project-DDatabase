// Module
module.exports = (client, message, db) => {
    
    // Ignore Bots
    if (message.author.bot) return;
  
    // Prefix
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Lets
    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = client.commands.get(command);
    let messge = message; 
   
    // Run
    if (!cmd) return;
    cmd.run(client, messge, args, config, db);
  };
