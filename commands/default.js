module.exports = {
    name: 'default',
    description: "default command",
    execute(message, args){
        message.reply("Are you simple? \"" + message + "\" is not a valid command, you cabbage.");
    }
}