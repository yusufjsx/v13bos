const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "banner",
  async execute(client, message, args) {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((member) => member.user.username.toLowerCase().includes(args[0])) || message.member;

    try {
      const banner = await client.banners.getBanner(target.user.id, { dynamic: true, size: 2048, format: 'png' });
      const bannerURL = banner.includes('https') ? banner : "https://cdn.discordapp.com/attachments/820773975827284019/866093745203183616/no_banner.png";

      const embed = new MessageEmbed()
        .setDescription(`Banner for ${target.user.tag}`)
        .setImage(bannerURL)
        .setColor("#2F3136");

      return message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      return message.reply("An error occurred. Banner not found.");
    }
  }
}
