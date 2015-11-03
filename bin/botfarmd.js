var Bot = require('../lib/bot.js'),
  roost = [];

roost = require('../conf.json').bots.map(function (bot) {
  var bot = new Bot(bot.nick, bot.server, bot.channels)

  bot.client.addListener('error', function (message) {
    console.log(message);
  });

  return bot;
});

roost.forEach(function (bot) {
  console.log('starting: ' + bot.nick);
  bot.start();
});

setTimeout(function () {
  roost.forEach(function (bot) {
    console.log('stopping: ' + bot.nick);
    bot.stop();
  });
}, 200000);
