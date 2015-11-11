Botpen = require('./botfarmd/botpen');

botpen = new Botpen();
botpen.loadBots('botfarmd.json');
botpen.startAll();

setTimeout(() => {
  botpen.stopAll();
}, 200000);
