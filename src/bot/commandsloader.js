const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { token } = require("../config/config.js");
const { client } = require('./bot.js');
const { Collection } = require('discord.js');
const fs = require('fs')

const commandFiles = fs.readdirSync('./src/bot/commands').filter(file => file.endsWith('.js'))

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	commands.push(command.data.toJSON())
	client.commands.set(command.data.name, command)
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		await rest.put(Routes.applicationGuildCommands('xx', 'xx'), { body: commands });
	} catch (error) {
		console.error(error);
	}
})();