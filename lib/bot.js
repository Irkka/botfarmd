var irc = require('irc');

function Bot(nick, server, channels) {
  this.nick = nick;
  this.server = server;
  this.channels = channels;
  this.client = new irc.Client(this.server, this.nick, { channels: this.channels, autoConnect: false, debug: true });

  this.start = function () {
    this.client.connect();
  };

  this.stop = function () {
    this.client.disconnect();
  };
}

module.exports = Bot;
