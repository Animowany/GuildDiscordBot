const { client, rid } = require('../bot');
const { MessageEmbed } = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
client.on('modalSubmit', async (modal) => {
	if(modal.customId === 'podaniemodal') {
		modal.guild.channels.create("rekrutacja-"+modal.member.displayName, {
				type: "GUILD_TEXT",
				parent: modal.guild.channels.cache.find(channel => channel.type == "GUILD_CATEGORY" && channel.name == "REKRUTACJA").id,
				permissionOverwrites: [
					{
					 id: modal.member.id,
					 allow: ['VIEW_CHANNEL','SEND_MESSAGES']
				   },
				   {
					id: rid,
					allow: ['VIEW_CHANNEL','SEND_MESSAGES']
				   },
				   {
					 id: modal.guild.roles.everyone,
					 deny: ['VIEW_CHANNEL']
				   }
				],
			  }).then(channel => {
			const embed = new MessageEmbed()
			.setTitle('Podanie gracza '+modal.member.displayName)
			.setDescription(
			'Jaki masz nick? - '+modal.getTextInputValue('quest1')+'\n'+
			'Ile masz lat? - '+modal.getTextInputValue('quest2')+'\n'+
			'Twoje 3 ostatnie gildie i powód odejścia - '+modal.getTextInputValue('quest3')+'\n'+
			'Czy jesteś aktywny na discord? - '+modal.getTextInputValue('quest4')+'\n'+
			'Od kogo wiesz o rekrutacji? - '+modal.getTextInputValue('quest5'))
			.setColor('#9000FF')
			.setThumbnail(client.user.displayAvatarURL())
			.setFooter(`Zaaplikowano przez: ${modal.member.id}`,modal.member.displayAvatarURL())
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('delete')
					.setLabel('Zamknij ticket')
					.setStyle('DANGER'),
			);
			channel.send({embeds: [embed],components: [row]})
			channel.send({content:'<@&'+rid+'>'}).then(msg => {
				msg.delete()
			})
	}).catch(console.error);
	await modal.reply({content: "Ticket stworzony!", ephemeral: true})
	}
	if(modal.customId === 'nieobecnoscmodal') {
		modal.guild.channels.fetch('xx').then(channel => { 
			const embed = new MessageEmbed()
			.setTitle('Usprawiedliwienie gracza '+modal.member.displayName)
			.setDescription(
			'Jaki masz nick? - '+modal.getTextInputValue('quest1')+'\n'+
			'Na jak długo będziesz nieobecny? - '+modal.getTextInputValue('quest2')+'\n'+
			'Powód - '+modal.getTextInputValue('quest3'))
			.setColor('#9000FF')
			.setThumbnail(client.user.displayAvatarURL())
			.setFooter(`Zaaplikowano przez: ${modal.member.id}`,modal.member.displayAvatarURL())
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('usprawiedliwienie-'+modal.member.id)
					.setLabel('Przyjmij')
					.setStyle('SUCCESS'),
			);
			const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('usprawiedliwienie2-'+modal.member.id)
					.setLabel('Odrzuć')
					.setStyle('DANGER'),
			);
			channel.send({embeds: [embed],components: [row,row2]})
			channel.send({content:'<@&'+rid+'>'}).then(msg => {
				msg.delete()
			})
	}).catch(console.error);
	await modal.reply({content: "Ticket stworzony!", ephemeral: true})
	}
	if(modal.customId === 'sojuszmodal') {
		modal.guild.channels.create("sojusz-"+modal.member.displayName, {
				type: "GUILD_TEXT",
				parent: modal.guild.channels.cache.find(channel => channel.type == "GUILD_CATEGORY" && channel.name == "REKRUTACJA").id,
				permissionOverwrites: [
					{
					 id: modal.member.id,
					 allow: ['VIEW_CHANNEL','SEND_MESSAGES']
				   },
				   {
					id: rid,
					allow: ['VIEW_CHANNEL','SEND_MESSAGES']
				   },
				   {
					 id: modal.guild.roles.everyone,
					 deny: ['VIEW_CHANNEL']
				   }
				],
			  }).then(channel => {
			const embed = new MessageEmbed()
			.setTitle('Prośba o pomoc gracza '+modal.member.displayName)
			.setDescription(
			'Jaki masz nick? - '+modal.getTextInputValue('quest1')+'\n'+
			'Tag gildii? - '+modal.getTextInputValue('quest2')+'\n'+
			'Do kogo sprawa? - '+modal.getTextInputValue('quest3')+'\n'+
			'W czym pomóc? - '+modal.getTextInputValue('quest4'))
			.setColor('#9000FF')
			.setThumbnail(client.user.displayAvatarURL())
			.setFooter(`Zaaplikowano przez: ${modal.member.id}`,modal.member.displayAvatarURL())
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('delete')
					.setLabel('Zamknij ticket')
					.setStyle('DANGER'),
			);
			channel.send({embeds: [embed],components: [row]})
			channel.send({content:'<@&'+rid+'>'}).then(msg => {
				msg.delete()
			})
	}).catch(console.error);
	await modal.reply({content: "Ticket stworzony!", ephemeral: true})
	}
});