module.exports = {
    name: 'ping',
    description: "eh... pong?",
    execute(message, args){
        message.channel.send('Pong. this is getting boring.');
    }
}