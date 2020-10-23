const MAX_AMOUNT = 100;
module.exports = {
  name: 'clear',
  description:
    'Deletes the specified amount of messages in the channel, otherwise deletes the last 100 messages',
  usage: '!clear <amount>',
  run(message, args) {
    const amount = args[0] || MAX_AMOUNT;
    console.log(`Deleting the last ${amount} message(s)`);
    message.channel.bulkDelete(amount, true);
  },
};
