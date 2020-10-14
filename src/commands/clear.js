module.exports = {
  name: 'clear',
  description: 'Deletes the last 100 messages in the channel',
  run(message) {
    message.channel.bulkDelete(100, true);
  },
};
