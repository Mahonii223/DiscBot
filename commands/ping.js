module.exports = {
    name: 'ping',
    description: "eh... pong?",
    enabled: true,
    execute(message, args){
        message.channel.send('Pong. this is getting boring.');
    }
}