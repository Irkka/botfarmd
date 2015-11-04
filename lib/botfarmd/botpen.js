var Bot = require('./bot'),
  Plugin = require('./bot/plugin'),
  irc = require('irc'),
  path = require('path');

function Botpen() {
  this.roost = [];
}

Botpen.prototype.startAll = function () {
  this.roost.forEach(function (bot) {
    bot.start();
  });
};

Botpen.prototype.stopAll = function () {
  this.roost.forEach(function (bot) {
    bot.stop();
  });
};

Botpen.prototype.loadBots = function(configuration) {
  configurationFile = require(path.join(process.cwd(), configuration));

  this.roost = configurationFile.bots.map(function (bot) {
    var constructedBot = new Bot(new irc.Client(bot.server, bot.nick, { channels: bot.channels, autoConnect: false, debug: true }), bot.plugins.map(function (plugin) {
      return Plugin.construct(plugin);
    }));

    constructedBot.client.addListener('error', function (message) {
      console.log(message);
    });

    return constructedBot;
  });
};

module.exports = Botpen;
