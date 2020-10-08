const { token } = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.once('ready', () => {
  console.log('ready!');
});

module.exports = client;
