const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildbanner",
  async execute(client, message, args) {
    if (!message.guild.banner) {
      const embed1 = new MessageEmbed()
        .setColor("#2F3136")
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setDescription("Sunucunun bannerı bulunmuyor.");
      return message.reply({ embeds: [embed1] });
    } else {
      const embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(message.guild.bannerURL({ size: 4096, dynamic: true }))
        .setTitle(`${message.guild.name} Sunucu Bannerı`);
      return message.reply({ embeds: [embed2] });
    }
  }
};
