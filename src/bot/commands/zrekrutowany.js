const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zrekrutowany')
        .setDescription('Nadaj rolę zrekrutowany')
        .addUserOption(option =>
            option
            .setName('gracz')
            .setDescription('Oznacz użytkownika!')
            .setRequired(true)
        ),
}