const client = require('./setup');
const { prefix } = require('../config.json');

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    message.reply(
      'Ops! This command is not supported! Try `!help` to see the supported commands.'
    );
    return;
  }

  try {
    client.commands.get(command).run(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command');
  }
});
