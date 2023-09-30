const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name: 'kullanici-bilgi',
        description: 'Kullanıcı bilgisini gösterir.',
    },
    async execute(interaction) {
        if (interaction.isButton() && interaction.customId === 'kullaniciBilgi') {
            const user = interaction.user;

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Kullanıcı Bilgisi')
                .setThumbnail(user.displayAvatarURL())
                .addField('Kullanıcı Adı', user.username)
                .addField('Kullanıcı ID', user.id);

            const guilds = interaction.client.guilds.cache.filter((guild) => guild.members.cache.has(user.id));
            const guildNames = guilds.map((guild) => guild.name);

            if (guildNames.length > 0) {
                embed.addField('Bulunduğu Sunucular', guildNames.join('\n'));
            } else {
                embed.addField('Bulunduğu Sunucular', 'Bu kullanıcı hiçbir sunucuda bulunmuyor.');
            }

            await interaction.reply({ embeds: [embed] });
        }
    },
};
