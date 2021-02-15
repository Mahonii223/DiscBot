module.exports = {
    name: 'maker',
    description: "Hereby announces a new maker",
    enabled: true,
    execute(message, args){
        message.channel.send('https://i.imgur.com/mKXCEyE.jpg');
    }
}