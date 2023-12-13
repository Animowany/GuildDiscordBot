const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('niezrekrutowany')
        .setDescription('Oblej kogoś!')
        .addUserOption(option =>
            option
            .setName('gracz')
            .setDescription('Oznacz użytkownika!')
            .setRequired(true)
        ),
}