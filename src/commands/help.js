const fs = require('fs');
const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

module.exports = {
  name: 'help',
  description: 'Show all available commands',
  usage: '!help <command>',
  run(message, args) {
    const commandOptions = {};

    commandFiles.forEach((file) => {
      const command = require(`./${file}`);
      commandOptions[command.name] = command;
    });

    const specificCommand = args[0] || '';

    if (commandOptions.hasOwnProperty(specificCommand)) {
      const command = commandOptions[specificCommand];
      message.reply(
        `\n${command.name} - ${command.description}\nUsage: ${command.usage}`
      );
      return null;
    }

    const allCommands = commandOptions.map((command) => {
      `${allCommands}\n${command.name} - ${command.description}`;
    });

    message.reply(
      `The available commands are: \`\`\`${allCommands}\`\`\` \nTo run a command you have to type !\{command_name\}`
    );
  },
};
