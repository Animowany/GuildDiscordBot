const { client, cid } = require('../bot');
const { Modal, TextInputComponent, showModal } = require('discord-modals');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;

	if (interaction.customId === 'rekrutacja') {
		const q1 = question('quest1','Jaki masz nick?','SHORT',4,21,'Wpisz tu swój nick',true)
		const q2 = question('quest2','Ile masz lat?','SHORT',2,3,'Wpisz tu swój wiek',true)
		const q3 = question('quest3','Twoje 3 ostatnie gildie i powód odejścia','LONG',1,300,'...',true)
		const q4 = question('quest4','Czy jesteś aktywny na discord?','SHORT',3,3,'Tak/Nie',false)
		const q5 = question('quest5','Od kogo wiesz o rekrutacji?','LONG',1,50,'...',true)
		const modal = new Modal()
		.setCustomId('podaniemodal')
		.setTitle('Podanie o dołączenie do gildii xxxx')
		.addComponents([q1,q2,q3,q4,q5]);
		await showModal(modal, {
			client: client,
			interaction: interaction 
		});
	}
	if (interaction.customId === 'nieobecnosc') {
		const q1 = question('quest1','Jaki masz nick?','SHORT',4,21,'Wpisz tu swój nick',true)
		const q2 = question('quest2','Na jak długo będziesz nieobecny?','SHORT',2,24,'Wpisz daty lub czas',true)
		const q3 = question('quest3','Powód','LONG',1,300,'...',true)
		const modal = new Modal()
		.setCustomId('nieobecnoscmodal')
		.setTitle('Usprawiedliwienie nieobecności')
		.addComponents([q1,q2,q3]);
		await showModal(modal, {
			client: client,
			interaction: interaction 
		});
	}
	if (interaction.customId === 'pomoc') {
		const q1 = question('quest1','Jaki masz nick?','SHORT',4,21,'Wpisz tu swój nick',true)
		const q2 = question('quest2','Tag gildii?','SHORT',2,5,'TAG',true)
		const q3 = question('quest3','Do kogo sprawa?','SHORT',3,21,'Nick',true)
		const q4 = question('quest4','W czym pomóc?','LONG',1,300,'...',true)
		const modal = new Modal()
		.setCustomId('sojuszmodal')
		.setTitle('Pomoc w obronie gildii jako sojusz')
		.addComponents([q1,q2,q3,q4]);
		await showModal(modal, {
			client: client,
			interaction: interaction 
		});
	}
    if (interaction.customId === 'delete') {
        interaction.channel.setParent(cid)
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('deleteforever')
				.setLabel('Usuń całkowicie ticket')
				.setStyle('SUCCESS'),
		);
		interaction.message.edit({components: [row]})
    }
	if (interaction.customId === 'deleteforever') {
		interaction.channel.delete();
	}
	if (interaction.customId.includes('usprawiedliwienie-')) {
		const member = interaction.guild.members.cache.get(interaction.customId.split('-')[1]);
		const embed = new MessageEmbed()
		.setAuthor("Usprawiedliwienie",member.displayAvatarURL())
		  .setColor("9000FF")
		  .setDescription(`<@${member.user.id}> Twoje usprawiedliwienie zostało przyjęte!`)
		  .setThumbnail(member.avatarURL)
		  .setFooter('Oceniono przez: '+interaction.member.id,interaction.member.displayAvatarURL())
		member.send({embeds: [embed]})
		interaction.guild.channels.cache.get('xx').send({embeds: [embed]})
		await interaction.message.delete()
	}
	if (interaction.customId.includes('usprawiedliwienie2-')) {
		const member = interaction.guild.members.cache.get(interaction.customId.split('-')[1]);
		const embed = new MessageEmbed()
		.setAuthor("Usprawiedliwienie",member.displayAvatarURL())
		  .setColor("FF0000")
		  .setDescription(`<@${member.user.id}> Twoje usprawiedliwienie zostało odrzucone!`)
		  .setThumbnail(member.avatarURL)
		  .setFooter('Oceniono przez: '+interaction.member.id,interaction.member.displayAvatarURL())
		member.send({embeds: [embed]})
		interaction.guild.channels.cache.get('xx').send({embeds: [embed]})
		await interaction.message.delete()
	}
	if (interaction.customId === 'verify') {
		await interaction.member.roles.add('xx')
	}
});

function question(id,label,style,maxl,minl,holder,required) {
	const q1 = new TextInputComponent()
	.setCustomId(id)
	.setLabel(label)
	.setStyle(style)
	.setMinLength(maxl)
	.setMaxLength(minl)
	.setPlaceholder(holder)
	.setRequired(required)
	return q1;
}