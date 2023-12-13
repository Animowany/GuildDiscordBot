const { MessageEmbed, Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token, rekruterid, nickid, closedid, wyslij } = require("../config/config.js")
const discordModals = require('discord-modals');
discordModals(bot);
const { MessageActionRow, MessageButton } = require('discord.js');
bot.on('ready', () => {
	console.log(`Zalogowano jako ${bot.user.tag}!`);
	require('./handlers/modalSubmit')
	require('./handlers/interactionButton')
	require('./handlers/nickChange')
	require('./handlers/interactionCommand')
	if (wyslij === 'tak') {
	bot.channels.fetch('xx').then(channel => { //rekrumsg
		const embed = new MessageEmbed()
		.setTitle("Rekrutacja do gildii xxxx")
		.setDescription("tak")
		.setThumbnail(bot.user.displayAvatarURL())
		.setColor('#9000FF')
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('rekrutacja')
				.setLabel('Stwórz ticket')
				.setStyle('SUCCESS'),
		);
		channel.send({embeds: [embed],components: [row]})
	})
	bot.channels.fetch('xx').then(channel => { //nieobmsg
		const embed = new MessageEmbed()
		.setTitle("Chcę zgłosić nieobecność")
		.setDescription("tak")
		.setThumbnail(bot.user.displayAvatarURL())
		.setColor('#9000FF')
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('nieobecnosc')
				.setLabel('Stwórz ticket')
				.setStyle('SUCCESS'),
		);
		channel.send({embeds: [embed],components: [row]})
	})
	bot.channels.fetch('xx').then(channel => { //pomocgmsg
		const embed = new MessageEmbed()
		.setTitle("Jestem z sojuszu")
		.setDescription("tak")
		.setThumbnail(bot.user.displayAvatarURL())
		.setColor('#9000FF')
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('pomoc')
				.setLabel('Stwórz ticket')
				.setStyle('SUCCESS'),
		);
		channel.send({embeds: [embed],components: [row]})
	})
	bot.channels.fetch('xx').then(channel => { //weryfikacja
		const embed = new MessageEmbed()
		.setTitle("Weryfikacja")
		.setDescription("tak")
		.setThumbnail(bot.user.displayAvatarURL())
		.setColor('#9000FF')
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('verify')
				.setLabel('Zweryfikuj sie pedancie jebany')
				.setStyle('SUCCESS'),
		);
		channel.send({embeds: [embed],components: [row]})
	})
	}
});

module.exports = {
	client: bot,
	rid: rekruterid,
	nid: nickid,
	cid: closedid
}

bot.login(token);