module.exports = {
    name: 'addpasta',
    description: "saves the best memories",
    perm: 'moderator',
    execute(message, args){
        var fs = require('fs');
        
        var content = args.join(" ");

        fs.appendFile('copypastas.txt', "<$pasta$>"+content, function (err) {
            if (err) throw err;
            message.channel.send("Pasta saved.");
        });
    }
}