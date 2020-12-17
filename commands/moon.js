module.exports = {
    name: 'moon',
    description: "makes traditional wood carving knives",
    execute(message, args){
        var responses = [
            "Offering a product life that is 50 to 200 percent longer than competitors' belts, the Blaze R980P coarse grit cloth narrow backstand belt is the ideal product for coarse grit stock removal applications. Perfect for ensuring grain retention and minimal edge fraying, the belt comes equipped with a waterproof Y-weight polyester backing for durability and reliable results. The Blaze R980P also features a lubricating coating that produces cool cutting action while ensuring minimal loading. When used on stainless steel, cobalt, chrome, titanium, and other metals, this belt improves material integrity while delivering a consistent finish.",
            "Why should I bother, this server is dead anyway",
            "I do not appreciate the black moon reactions under my messages.",
            "Maybe try taping a dremel to your drill press?",
            "<shrugs>"];
        message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
    }
}