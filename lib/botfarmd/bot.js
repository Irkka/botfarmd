'use strict';

function Bot(client) {
  this.client = client;

  this.start = function () {
    this.client.connect();
  };

  this.stop = function () {
    this.client.disconnect();
  };
}

module.exports = Bot;
