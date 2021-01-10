module.exports = {
    name: 'default',
    description: "default command",
    visibility: "hidden",
    execute(message, args){
        message.reply("are you simple? \"" + message + "\" is not a valid command, you cabbage.");
    }
}