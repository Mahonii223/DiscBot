const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs'); 
client.commands = new Discord.Collection();

var validCommandsMap = new Map();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    client.commands.set(command.name, command);
    validCommandsMap.set(command.name, command.description);
}

validCommandsMap.delete("default");

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if(validCommandsMap.has(command)){
        client.commands.get(command).execute(message, args);
    } else if (command === "help"){
        var help = "Ugh, again? Here's the list of available commands, write it down somewhere and don't bother me again.\n";
        for(let key of validCommandsMap.keys()){
            var line = key + " : " + validCommandsMap.get(key) + "\n";
            help = help + line;
        }
        message.channel.send(help);
    } else if(!message === "." && !command.startsWith(".")){
        client.commands.get("default").execute(message, args);
    } else {
        message.channel.send("Hey, you shouldn't be seeing this message. Let Kuro know. Message I received:"+message);
    }
    

});

 


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret