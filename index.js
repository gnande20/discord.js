const { Client, GatewayIntentBits } = require('discord.js');
// Note : selon la version du fork, les importations peuvent varier — vérifie dans le code du repo.

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

const token = process.env.BOT_TOKEN ||'MTQzNTczNDkzNDM0MDc2NzgzNQ.GJWN2B.U5ehVVjeXfzLfON64pnsCROHXH0shgPLlSdJuA';

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('Pong !');
  }
});

client.login(token);
