
const utils = require("./utils");

module.exports = {
    name: 'default',
    description: "default command",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        var insult = utils.getShInsult();
        message.reply("are you simple? \"" + message + "\" is not a valid command, you " + insult + ".");
    }
}