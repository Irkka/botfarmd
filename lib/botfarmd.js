Botpen = require('./botfarmd/botpen');

botpen = new Botpen();
botpen.loadBots('botfarmd.json');
botpen.startAll();

setTimeout(function () {
  botpen.stopAll();
}, 200000);
