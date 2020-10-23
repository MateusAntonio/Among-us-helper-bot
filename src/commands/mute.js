const MUTE = true;

module.exports = {
  name: 'mute',
  description: 'Mutes all users in a channel',
  usage: '!mute',
  run(message, _args) {
    if (!message.member.voice.channel)
      return message.reply('You need to be connected into a voice channel');

    const members = message.member.voice.channel.members;

    message.reply('Muting members...');

    console.log('\nMembers to be muted: ');

    members.map(async (member) => {
      console.log('\n', member.displayName);
      await member.voice.setMute(MUTE, 'Game running!');
    });
  },
};
