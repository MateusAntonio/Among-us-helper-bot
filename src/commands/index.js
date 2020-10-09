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
  const members = await message.guild.members.fetch();
  members.map((member) => {
    if (!member.voice.channel) return;
    console.log('Members to be muted: ', member.displayName);
    message.reply('Muting all members...');
    member.voice.setDeaf(true, 'Game running');
    member.voice.setMute(true, 'Game running');
  });
};

const unmute = async (message) => {
  const members = await message.guild.members.fetch();
  members.map((member) => {
    if (!member.voice.channel) return;
    console.log('Members to be unmuted: ', member.displayName);
    message.reply('Unmuting all members...');
    console.log(member.displayName);
    member.voice.setDeaf(false, 'Discuss');
    member.voice.setMute(false, 'Discuss');
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
