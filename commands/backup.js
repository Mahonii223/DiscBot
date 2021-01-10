module.exports = {
    name: 'backup',
    description: "displays all file-saved data",
    visibility: "hidden",
    perm: "moderator",
    execute(message, args){
        var fs = require('fs')
        fs.readFile('copypastas.txt', 'utf8', function (err,data) {
             if (err) {
                return console.log(err);
            }
            message.channel.send(data);
        }); 
    }
}