var Bot = require('./bot.js'),
  irc = require('irc');

function Botpen() {
  this.roost = [];
}

Botpen.prototype.startAll = function () {
  this.roost.forEach(function (bot) {
    bot.start();
  });
};

module.exports = Botpen;
