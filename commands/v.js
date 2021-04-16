module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        //message.channel.send(message.client.channels.toString());
        const channel = message.client.channels.cache.find(channel => channel.name === args.shift());
        channel.send(args);
    }
}