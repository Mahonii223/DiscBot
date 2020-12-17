const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs'); 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    var validCommands = [
        "ping", 
        "rank",
        "midget",
        "choil",
        "heagly",
        "maker",
        "moon",
        "myne",
    ];
    if(validCommands.includes(command)){
        client.commands.get(command).execute(message, args);
    } else if(!command.startsWith(".")){
        client.commands.get("default").execute(message, args);
    }
    

});

 


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret