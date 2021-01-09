module.exports = {
    name: 'pasta',
    description: "brings back the best memories",
    execute(message, args){
        var fs = require('fs')
        fs.readFile('copypastas.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        message.channel.send('data');
});
    }
}