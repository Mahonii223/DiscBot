module.exports = {
    name: 'addpasta',
    description: "saves the best memories",
    perm: 'moderator',
    execute(message, args){
        var fs = require('fs');
        
        fs.appendFile('copypastas.txt', 'Hello content!', function (err) {
            if (err) throw err;
        });

        for(let arg of args){
            message.channel.send("\narg: " + arg);
        }
    }
}