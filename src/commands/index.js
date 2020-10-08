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

const avatar = (message) => {
  if (!message.mentions.users.size) {
    return message.channel.send(
      `Your avatar: <${message.author.displayAvatarURL({
        format: 'png',
        dynamic: true,
      })}>`
    );
  }
  const avatarList = message.mentions.users.map((user) => {
    return `${user.username}'s avatar: <${user.displayAvatarURL({
      format: 'png',
      dynamic: true,
    })}>`;
  });
  message.channel.send(avatarList);
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
  message.channel.bulkDelete(100);
};

module.exports = {
  mention,
  server,
  avatar,
  join,
  leave,
  clear,
};
