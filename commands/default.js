import { getShInsult } from utils/shakespeareanInsults.js


module.exports = {
    name: 'default',
    description: "default command",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        var insult = getShInsult();
        message.reply("are you simple? \"" + message + "\" is not a valid command, you " + insult + ".");
    }
}