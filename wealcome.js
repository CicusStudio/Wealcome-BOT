const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config({ path: './config.cfg' }); 

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log('Welcome System Caricato');
});

client.on('guildMemberAdd', async (member) => {
  try {
    const defaultRole = member.guild.roles.cache.get(process.env.DEFAULT_ROLE);
    if (defaultRole) {
      await member.roles.add(defaultRole);
    }

    const welcomeEmbed = new EmbedBuilder()
      .setColor(process.env.EMBED_COLOR || '#00FF00') 
      .setTitle(`Benvenuto, ${member.user.username}!`)
      .setDescription(process.env.WELCOME_TEXT || 'Siamo felici di averti con noi!')
      .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 128 }))
      .setTimestamp();

    const channel = await client.channels.fetch(process.env.CHANNEL_ID);

    channel.send({ embeds: [welcomeEmbed] });
  } catch (error) {
    console.error('Errore durante il processo di benvenuto:', error);
  }
});

client.login(process.env.TOKEN);