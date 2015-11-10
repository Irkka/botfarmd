'use strict';

class Plugin {
  constructor(identifier, client) {
    this.identifier = identifier;
    this.client = client;
  }

  registerListeners(client) {
  }
}

Plugin.construct = function (identifier, client) {
  var PluginSubtype = require('./plugin/' + identifier);

  return new PluginSubtype(identifier, client);
};

module.exports = Plugin;
