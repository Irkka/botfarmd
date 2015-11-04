'use strict';

function Bot(client, plugins) {
  this.client = client;
  this.plugins = plugins;

  this.registerPlugins(this.client);
}

Bot.prototype.registerPlugins = function (client) {
  this.plugins.forEach(function (plugin) {
    plugin.registerHandler(client);
  });
}

Bot.prototype.start = function () {
  this.client.connect();
};

Bot.prototype.stop = function () {
  this.client.disconnect();
};

module.exports = Bot;
