const UNMUTE = false;

module.exports = {
  name: 'unmute',
  description: 'Unmuttes all users in a channel',
  usage: '!unmute',
  run(message) {
    if (!message.member.voice.channel)
      return message.reply('You need to be connected into a voice channel');

    const members = message.member.voice.channel.members;

    message.reply('Unmuting members...');
    console.log('\nMembers to be unmuted: ');
    members.map((member) => {
      console.log('\n', member.displayName);
      member.voice.setMute(UNMUTE, 'Discuss time!');
    });
  },
};
