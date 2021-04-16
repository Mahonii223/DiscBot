module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        //message.channel.send(message.client.channels.toString());
        var channelMap = new Map();
        //channelMap.set('#general', "789170479026012162");
        const channel = message.client.channels.get('789170479026012162');
        channel.send('lorem fucking ipsum');
    }
}