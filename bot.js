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
    } /*else if (message.content.toLowerCase().includes(" off, stabby") || message.content.toLowerCase().includes(" off stabby")){
        var response = "You " + message.content.toLowerCase().substr(0, message.content.toLowerCase().indexOf(" stabby")) + ".";
        
        message.reply(response);
        return;
    }*/
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try{
    if(client.commands.has(command)){
        var handler = client.commands.get(command);
        /*if(!handler.enabled){
            return;
        }*/
        handler.execute(message, args);
    } else if (command === "help"){
        var help = "Here.\n";
        for(let key of client.commands.keys()){
            var handler = client.commands.get(key);
            if(handler.visibility === "hidden"){
                continue;
            }
            var line = handler.name + " : " + handler.description + "\n";
            help = help + line;
        }
        message.channel.send(help);
    } else if(!command.startsWith(".")){
        client.commands.get("default").execute(message, args);
    }
    } catch (error) {
        message.channel.send("something failed");
    }
    

});

 


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret