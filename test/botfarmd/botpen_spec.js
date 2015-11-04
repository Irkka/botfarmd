'use strict';

var sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  Botpen = require('../../lib/botfarmd/botpen');

describe('Botpen', function () {
  var botpen;

  beforeEach(function () {
    botpen = new Botpen();
  });

  describe('@roost', function() {
    it('should be an instance property', function () {
      expect(botpen).to.have.property('roost');
    });

    it('should be of type array', function() {
      expect(botpen.roost).to.be.an('array');
    })
  });

  describe('#startAll', function () {
    it('should be an instance method', function () {
      expect(botpen.startAll).to.be.a('function');
    });

    it('should invoke #start once on each bot in the @roost', function () {
      botpen.roost = [];
      for (var i = 3; i >= 0; i--) {
        botpen.roost.push({ start: sinon.spy() });
      }

      botpen.startAll();

      botpen.roost.forEach(function (bot) {
        expect(bot.start.called).to.equal(true);
      });
    });
  });

  describe('#stopAll', function () {
    it('should be an instance method', function () {
      expect(botpen.stopAll).to.be.a('function');
    });

    it('should invoke #stop once on each bot in the @roost', function () {
      botpen.roost = [];
      for (var i = 3; i >= 0; i--) {
        botpen.roost.push({ stop: sinon.spy() });
      }

      botpen.stopAll();

      botpen.roost.forEach(function (bot) {
        expect(bot.stop.called).to.equal(true);
      });
    });
  });

  describe('#loadBots', function () {
    it('should be an instance method', function () {
      expect(botpen.loadBots).to.be.a('function');
    });

    xit('should create new Bot instance for each entry provided in botfarmd.json', function () {
      botpen.loadBots('botfarmd.json');
    })
  })
});
