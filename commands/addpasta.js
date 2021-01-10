module.exports = {
    name: 'addpasta',
    description: "saves the best memories",
    perm: 'moderator',
    execute(message, args){
        var fs = require('fs');
        if(args.length === 0){
            message.channel.send("Maybe give me something to add then.");
            return;
        } else if (args.length === 1){
            message.channel.send("Pasta needs a title AND content. Like a book. Maybe try reading one.");
            return;
        }
        
        var content = args.join(" ");

        fs.appendFile('copypastas.txt', "<$pasta$>"+content, function (err) {
            if (err) throw err;
            message.channel.send("Pasta saved.");
        });
    }
}