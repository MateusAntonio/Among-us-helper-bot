const MAX_AMOUNT = 100;
const clear = {
  name: 'clear',
  description:
    'Deletes the specified amount of messages in the channel, otherwise deletes the last 100 messages',
  usage: '!clear <amount>',
  run(message, args) {
    const inputAmount = args[0] + 1;

    if (typeof inputAmount !== 'number') {
      message.channel.send(`Incorrect usage.\nUsage: ${clear.usage}`);
      return null;
    }

    const amount = inputAmount || MAX_AMOUNT;
    console.log(`Deleting the last ${amount} message(s)`);
    message.channel.bulkDelete(amount, true);
  },
};

module.exports = clear;
