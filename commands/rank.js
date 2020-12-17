module.exports = {
    name: 'rank',
    description: "Provides your current rank",
    execute(message, args){
        var rankResponses = [
            "Who cares? I don't. We have that other fella for that, but last time I've seen him he was getting a wedgie from Rhythm.", 
            "Zero, as far as I'm considered.", 
            "Hundred, what do I care? Whatever let's you sleep at night.",
            "Maybe focus on your real world achievements for now, fella.",
            "Well, you ain't the sharpest tool in the shed, let's put it that way.",
            "Rank? What am I, some mee bitchboy?"];
        message.reply(rankResponses[Math.floor(Math.random() * rankResponses.length)]);
    }
}