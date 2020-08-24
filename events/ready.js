// Consts
const Parser = require('rss-parser');
const parser = new Parser();
const Discord = require('discord.js');
const enmap = require("enmap")
const db = new enmap({name: "db"})

// Module
module.exports = (client, messge, args, config) => {
  
  // Ready Messages
  console.log(`Logged in with account ${client.user.tag}.`)

  // Time Controller
 setInterval(async()=>{
    
      // Feed
      let feed = await parser.parseURL('https://www.iltalehti.fi/rss/uutiset.xml');

      // Checker
      if (feed.items[0].title == db.get("iltalehtis")) { 
        return
      }

      // Embed
      const iltalehti = new Discord.MessageEmbed()
	       .setColor('#0099ff')
         .setTitle(feed.items[0].title)
         .setURL(feed.items[0].link)
         .addField(feed.items[0].link)
         .setFooter('Foter');
      client.channels.cache.get("698823564412977163").send(iltalehti)
      
      // Set
      db.set("iltalehtis", feed.items[0].title)
      
  // End
}, 60 * 1000)
}
