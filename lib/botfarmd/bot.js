'use strict';

class Bot {
  constructor(client, plugins) {
    this.client = client;
    this.plugins = plugins;
  }

  start() {
    this.client.connect();
  }

  stop() {
    this.client.disconnect();
  }

  activatePlugins() {
    var self = this;
    this.plugins.forEach(plugin => {
      plugin.registerListeners(self.client);
    });
  }
}

module.exports = Bot;
