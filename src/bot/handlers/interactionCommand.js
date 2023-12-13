const { client, rid } = require('../bot');
const { MessageEmbed } = require('discord.js')
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;
	if (!interaction.member.roles.cache.has(rid)) {
		interaction.reply({content: 'nie masz dostempu pajacu',ephemeral: true})
	}
	if (interaction.commandName === 'zrekrutowany') {
		const member = interaction.options.getUser('gracz')
		if (!member) {return interaction.channel.send("Nie oznaczyłeś osoby!")}
		const role1 = "xx"; //role którą nada
		const role2 = "xx"; //role którą nada
		const role3 = "xx"; //role która usuwa range
		interaction.guild.members.fetch(member.id).then(membero => {
			membero.roles.add(role1);
			membero.roles.add(role2);
			membero.roles.remove(role3);
		})
		const embed = new MessageEmbed()
		.setAuthor("Rekrutacja",member.displayAvatarURL())
		  .setColor("9000FF")
		  .setThumbnail(member.avatarURL)
		  .setFooter('Przyznano przez: '+interaction.member.id,interaction.member.displayAvatarURL())
		  .setDescription(`Niestety dostałeś się do gildii c:`);
		await interaction.reply({content:'Przyjąłeś gracza do gildii', ephemeral: true})
		await member.send({embeds: [embed]})
	}

    if (interaction.commandName === 'niezrekrutowany') {
		const member = interaction.options.getUser('gracz')
		if (!member) {return interaction.channel.send("Nie oznaczyłeś osoby!")}
		const embed = new MessageEmbed()
		  .setAuthor("Rekrutacja",member.displayAvatarURL())
		  .setColor("FF0000")
		  .setThumbnail(member.avatarURL)
		  .setFooter('Przyznano przez: '+interaction.member.id,interaction.member.displayAvatarURL())
		  .setDescription(`Niestety nie dostałeś się do gildii :c`);
		await interaction.reply({content:'Oblałeś gracza', ephemeral: true})
		await member.send({embeds: [embed]})
	}
});
