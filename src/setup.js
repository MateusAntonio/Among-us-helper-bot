require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
  console.log('ready!');
});

module.exports = client;
