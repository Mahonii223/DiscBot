module.exports = {
    name: 'v',
    description: "ventriloquize stabby",
    visibility: "hidden",
    enabled: true,
    execute(message, args){
        
        //var channelMap = new Map();
        //channelMap.set(`#general`, `789170479026012162`);
        //const channel = message.client.channels.get(channelMap'789170479026012162');
        //channel.send(args.join(' '));
        throw args.join(' ');
    }
}