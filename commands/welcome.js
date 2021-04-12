module.exports = {
    name: 'welcome',
    description: "welcome a new user",
    enabled: true,
    execute(message, args){
        var greet = [
            "Heyyyy, kitt... I mean, fellow discord user!",
            "Howdily doodily, fella!",
            "Greetings, stranger."
            ];
        var question = ' Do you make knives? If so, post a picture of a knife you have made #🔪-knife-pictures to earn the maker role.';
        message.reply(args[0] + rankResponses[Math.floor(Math.random() * greet.length)] + greet);
    }
}