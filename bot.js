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
}


client.on('ready', () => {

    console.log('I am ready!');

});
 

client.on('message', message => {

    if(message.author.bot) return;
    if(message.content === "!rank" && Math.floor(Math.random() * 3) == 0){
        var responses = [
            "Hey, Mee. My dad would beat up your dad.",
            "*mumble grumble*",
            "Just so you know, \".rank\" gives better results.",
            "!go_away_mee",
            "Oh, great, this guy again.",
            "**sarcastic clapping**",
            "Wow, you're easy to impress",
            ":rolling_eyes:"    
        ];
        message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
    }
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if(client.commands.has(command)){
        client.commands.get(command).execute(message, args);
    } else if (command === "help"){
        var help = "Here.\n";
        for(let key of client.commands.keys()){
            var command = client.commands.get(key);
            var line = key + " : " + command.description + "\n";
            help = help + line;
        }
        message.channel.send(help);
    } else if(!command.startsWith(".")){
        client.commands.get("default").execute(message, args);
    }
    

});

 


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret