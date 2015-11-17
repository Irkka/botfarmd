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
    this.plugins.forEach(plugin => {
      plugin.registerListeners(this.client);
    });
  }
}

module.exports = Bot;
