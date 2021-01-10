module.exports = {
    name: 'pasta',
    description: "brings back the best memories",
    execute(message, args){
        /**var fs = require('fs')
        var title = args.shift();
        fs.readFile('copypastas.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        const pastas = data.split("<$pasta$>");
        var output = "";
        for(let pasta of pastas){
            var content = pasta.split(" ",2);
            if(content.shift() === title){
                output = content.shift();
            }
        }

        if(output.trim() === ""){
            message.channel.send("No such pasta.");
        } else {
            message.channel.send(output);
        }
        });**/
    }
}