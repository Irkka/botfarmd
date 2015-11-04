'use strict';

function Plugin(identifier, handler) {
  this.identifier = identifier;
  this.handler = handler;
}

Plugin.prototype.registerHandler = function (client) {
  client.addListener('message', this.handler.hello);
};

Plugin.construct = function (identifier) {
  var handler = require('./plugin/' + identifier);

  return new Plugin(identifier, handler);
};

module.exports = Plugin;
