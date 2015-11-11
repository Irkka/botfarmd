'use strict';

var Plugin = require('../plugin'),
  https = require('https');

class Mtg extends Plugin {

  sayCardInfo(client, to, message) {
    https.get('https://api.deckbrew.com/mtg/cards?name=grave%20titan', res => {
      console.log('Got response: ' + res.statusCode);

      var data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        var card;
        card = JSON.parse(data)[0];

        var name, types, cost;
        name = card.name;
        types = card.types.join(', ');
        cost = card.cost;

        client.say(to, name);
      });
    }).on('error', error => {
      console.log(error.message);
    });
  }

  registerListeners(client) {
    var self = this;
    client.addListener('message', (from, to, message) => {
      if (message.match(/^!mtg.*/)) {
        self.sayCardInfo(client, to, message);
      }
    });
  }
}

module.exports = Mtg;
