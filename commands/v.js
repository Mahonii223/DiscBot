module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        throw message.client.channels.cache;
        //const channel = message.guild.channels.cache.find(channel => channel.name === args.shift());
        //channel.send(args);
    }
}