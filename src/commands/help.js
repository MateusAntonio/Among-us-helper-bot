const fs = require('fs');
const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

module.exports = {
  name: 'help',
  description: 'Show all available commands',
  run(message) {
    var allCommands = '';

    commandFiles.forEach((file) => {
      const command = require(`./${file}`);
      allCommands = `${allCommands}\n${command.name} - ${command.description}`;
    });

    message.reply(
      `The available commands are: \`\`\`${allCommands}\`\`\` \nTo run a command you have to type !\{command_name\}`
    );
  },
};
