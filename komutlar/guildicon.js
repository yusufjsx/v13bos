const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildicon",
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
      .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
      .setDescription("Sunucu İkonu");

    return message.reply({ embeds: [embed] });
  }
};
