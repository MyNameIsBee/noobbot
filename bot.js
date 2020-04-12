// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    if (message.content === '!intro') {
        // bot introduces itself
        message.channel.send('Hello I am noob bot, the noobiest bot on Discord. I am currently under construction, if you have any questions or requests you can send my creator <@262751310074478602> a message.');
    }

    if (message.content === '!noob') {
        message.channel.send("You're the noob not me!", {
            file: "https://i.gyazo.com/d3be8f87161e040534f9e888cf1b3d84.png" // Or replace with FileOptions object
        });
    }


    if (message.content.startsWith('!high5')) {
        if (message.mentions.members.size === 1) {
            var member = message.mentions.members.first();
            const rando_imgs = [
                "https://media3.giphy.com/media/11HM9kWdlO1dS/giphy.gif?cid=790b76115cc321dd3542676c77249814&rid=giphy.gif",
                "https://media2.giphy.com/media/BP9eSu9cnnGN2/giphy.gif?cid=790b76115cc70d517479705a67656d69&rid=giphy.gif",
                "https://media.giphy.com/media/HX3lSnGXZnaWk/giphy.gif",
                "https://media.giphy.com/media/3oEduV4SOS9mmmIOkw/giphy.gif",
                "https://media.giphy.com/media/M9TuBZs3LIQz6/giphy.gif",
                "https://media.giphy.com/media/lr2bkSkxMWFCo/giphy.gif",
                "https://media.giphy.com/media/26ufgSwMRqauQWqL6/giphy.gif",
            ]
            message.channel.send(message.author + " gave " + member + " a high five!", {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
        }
        else if (message.mentions.members.size > 1) {
            message.channel.send("You can only high five one person at once noob!")
        }
        else {
            message.channel.send("Please mention who you want to high five noob!")
        }

    }

    if (message.content.startsWith('!hug')) {
        if (message.mentions.members.size === 1) {
            var member = message.mentions.members.first();
            const rando_imgs = [
                'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
                "https://media0.giphy.com/media/8tpiC1JAYVMFq/giphy.gif?cid=790b76115cc322854a67797a73a31920&rid=giphy.gif",
                "https://media.giphy.com/media/mrICUqFpz6gDK/giphy.gif",
                "https://media0.giphy.com/media/OiKAQbQEQItxK/giphy.gif",
                "https://media.giphy.com/media/ueNJkRh9awrhS/giphy.gif",
                "https://66.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
            ]
            message.channel.send(message.author + " gave " + member + " a hug!", {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
        }
        else if (message.mentions.members.size > 1) {
            message.channel.send("You can only hug one person at once noob!")
        }
        else {
            message.channel.send("Please mention who you want to hug noob!")
        }

    }

    if (message.content ==="!help") {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Commands For Noob Bot')
            .setURL('')
            .setAuthor('Noob Bot', 'https://i.redd.it/i2q0r20gyeo21.png', '')
            .setDescription('Here are the following commands for the bot:')
            .setThumbnail('https://i.redd.it/i2q0r20gyeo21.png')
            .addField('!help', 'Brings up this help box')
            .addField('!hug', 'Send a hug to someone in the server!')
            .addField('!high5', 'Give someone a high five!')
            //.addBlankField()
            //.addField('Inline field title', 'Some value here', true)
            //.addField('Inline field title', 'Some value here', true)
            //.addField('Inline field title', 'Some value here', true)
            .setImage('https://i.redd.it/i2q0r20gyeo21.png')
            .setTimestamp()
            .setFooter('Created By Billy', 'https://i.redd.it/i2q0r20gyeo21.png');
        message.channel.send(exampleEmbed);
    }

    if (message.content.startsWith('!n00b')) {
        if (message.mentions.members.size === 1) {
            return message.channel.send("yay");
        }
        else {
            return message.channel.send("nay");
        }

    }

    if (message.content === '!test') {
        message.channel.send("Hey" + message.author)
    }

});

// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);