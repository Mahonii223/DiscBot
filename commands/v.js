module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        
        //var channelMap = new Map();
        //channelMap.set(`#general`, `789170479026012162`);
        const channel = message.client.channels.get(args.shift().substr(3, 18));
        channel.send(args.join(' '));
    }
}