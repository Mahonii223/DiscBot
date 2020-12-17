module.exports = {
    name: 'rank',
    description: "Provides your current rank",
    execute(message, args){
        var rankResponses = [
            "who cares? I don't. We have that other fella for that, but last time I've seen him he was getting a wedgie from Rhythm.", 
            "your rank is zero, as far as I'm considered.", 
            "I dunno, hundred, what do I care? Whatever let's you sleep at night.",
            "maybe focus on your real world achievements for now, fella.",
            "well, you ain't the sharpest tool in the shed, let's put it that way.",
            "rank? What am I, some mee bitchboy?"];
        message.reply(rankResponses[Math.floor(Math.random() * rankResponses.length)]);
    }
}