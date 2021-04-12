module.exports = {
    name: 'welcome',
    description: "welcome a new user",
    enabled: true,
    execute(message, args){
        if(args.length == 0){
            message.reply(" welcome who? Dumbass.");
        } else {
        var greet = [
            "Heyyyy, kitt... I mean, fellow discord user!",
            "Howdily doodily, fella!",
            "Greetings, stranger."
            ];
        var question = " Do you make knives? If so, post a picture of a knife you have made in " + message.guild.channels.find(channel => channel.name === "#🔪-knife-pictures").toString(); + " to earn the maker role.";
        message.channel.send(args[0] + greet[Math.floor(Math.random() * greet.length)] + question);
        }
    }
}