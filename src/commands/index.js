const mention = (message) => {
  if (!message.mentions.users.size)
    return message.reply('You need to tag someone');
  const taggedUser = message.mentions.users.first();
  message.channel.send(`You mentioned ${taggedUser.username}`);
};

const server = (message) => {
  message.channel.send(
    `This server's name is: ${message.guild.name}\nWe currently have: ${message.guild.memberCount} members`
  );
};

const join = async (message) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
  } else {
    message.reply('You need to join a voice channel first!');
  }
};

const leave = async (message) => {
  if (message.member.voice.channel) {
    await message.member.voice.channel.leave();
  }
};

const clear = (message) => {
  message.channel.bulkDelete(100, true);
};

const mute = async (message) => {
  if (!message.member.voice.channel)
    return message.reply('You need to be connected into a voice channel');

  const members = message.member.voice.channel.members;

  message.reply('Muting members...');
  members.map((member) => {
    console.log('Members to be muted: ', member.displayName);
    member.voice.setDeaf(true, 'Game running!');
    member.voice.setMute(true, 'Game running!');
  });
};

const unmute = async (message) => {
  if (!message.member.voice.channel)
    return message.reply('You need to be connected into a voice channel');

  const members = message.member.voice.channel.members;

  message.reply('Unmuting members...');
  members.map((member) => {
    console.log('Members to be unmuted: ', member.displayName);
    member.voice.setDeaf(false, 'Discuss time!');
    member.voice.setMute(false, 'Discuss time!');
  });
};

module.exports = {
  mention,
  server,
  join,
  leave,
  clear,
  mute,
  unmute,
};
