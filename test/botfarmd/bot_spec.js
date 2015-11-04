'use strict';

var sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  Bot = require('../../lib/botfarmd/bot');

describe('Bot', function () {
  var client, test_bot;

  beforeEach(function () {
    client = {
      disconnect: sinon.spy(),
      connect: sinon.spy()
    },
    test_bot = new Bot(client);
  });

  describe('#start', function () {
    it('should invoke #connect on its client property', function () {
      test_bot.start();
      expect(client.connect.called).to.equal(true);
    });
  });

  describe('#stop', function () {
    it('should invoke #disconnect on its client property', function () {
      test_bot.stop();
      expect(client.disconnect.called).to.equal(true);
    });
  });
});
