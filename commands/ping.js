module.exports = {
    name: 'ping',
    description: "standard ping command",
    execute(message, args){
        message.channel.send('Pong. this is getting boring.');
    }
}