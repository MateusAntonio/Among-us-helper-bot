module.exports = {
  name: 'clear',
  description: '',
  run(message) {
    message.channel.bulkDelete(100, true);
  },
};
