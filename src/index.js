const client = require('./setup');
const { prefix } = require('../config.json');
const commands = require('./commands');

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    commands[command](message);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command');
  }
});
