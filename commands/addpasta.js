module.exports = {
    name: 'addpasta',
    description: "saves the best memories",
    execute(message, args){
        var fs = require('fs');

        fs.appendFile('copypastas.txt', 'Hello content!', function (err) {
            if (err) throw err;
            message.channel.send('Pong. this is getting boring.');
        });
    }
}