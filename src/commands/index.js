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

module.exports = {
  mention,
  server,
  join,
  leave,
  clear,
};
