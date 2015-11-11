'use strict';

var Bot = require('./bot'),
  Plugin = require('./bot/plugin'),
  irc = require('irc'),
  path = require('path');

class Botpen {
  constructor() {
    this.roost = [];
  }

  startAll() {
    this.roost.forEach(bot => {
      bot.start();
    });
  }

  stopAll() {
    this.roost.forEach(bot => {
      bot.stop();
    });
  }

  loadBots(configuration) {
    var configurationFile = require(path.join(process.cwd(), configuration));

    this.roost = configurationFile.bots.map(bot => {
      var client = new irc.Client(bot.server, bot.nick, { channels: bot.channels, autoConnect: false, debug: true }),
        plugins = bot.plugins.map(identifier => Plugin.construct(identifier, client)),
      constructedBot = new Bot(client, plugins);
      constructedBot.client.addListener('error', message => {
        console.log(message);
      });

      constructedBot.activatePlugins();

      return constructedBot;
    });
  }
}

module.exports = Botpen;
