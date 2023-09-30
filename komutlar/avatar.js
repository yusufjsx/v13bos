const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`, user.displayAvatarURL({ dynamic: true }))
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }));

    return message.reply({ embeds: [embed] });
  },
};
