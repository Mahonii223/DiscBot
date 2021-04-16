module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        const channel = message.client.channels.get(args.shift().substr(2, 18));
        channel.send(args.join(' '));
        //message.reply(args.shift().substr(2, 18));
    }
}