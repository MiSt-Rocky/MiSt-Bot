const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
	console.log('#' + message.channel.name + ': ' + message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
	if (message.content === prefix + 'test') {
		message.channel.send('Test succesful!');
	} else if (message.content === prefix + 'beep') {
		message.channel.send('Boop.');
	} else if (message.content === prefix + 'server') {
		message.channel.send('Server name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
	} else if (message.content === prefix + 'user-info') {
		message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
	} else if (message.content === prefix + 'ping') {
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
		message.channel.send('@everyone');
	} else if (message.content === prefix + 'what') {
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('<@!326926635599396875>');
		message.channel.send('Sorry!');	
	} else if (command === 'test2') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
	else if (args[0] === 'lol') {
		return message.channel.send('no u');
	}

	message.channel.send(`First argument: ${args[0]}`);
	message.channel.send(`Second argument: ${args[1]}`);
	message.channel.send(`Third argument: ${args[2]}`);
	message.channel.send(`Much argument: ${args[3]}`);
	} else if (command === 'kick') {
	// grab the "first" mentioned user from the message
	// this will return a `User` object, just like `message.author`
	if (!message.mentions.users.size) {
	return message.reply('you need to tag a user in order to kick them!');
}
	const taggedUser = message.mentions.users.first();

	message.channel.send(`You wanted to kick: ${taggedUser.username} for reason: ${args[1]} for time: ${args[2]}`);
}});

client.login(process.env.BOT_TOKEN);
