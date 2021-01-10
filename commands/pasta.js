module.exports = {
    name: 'pasta',
    description: "brings back the best memories",
    execute(message, args){
        var fs = require('fs')
        if(args.length === 0){
            message.channel.send("Pasta what?");
            return;
        }
        var title = args.shift();
        message.channel.send("reached here.1");
        fs.readFile('copypastas.txt', 'utf8', function (err,data) {
        if (err) {
            message.channel.send("Error occured reading the file: " + err.message);
        }
        message.channel.send("reached here.");
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
        });
    }
}