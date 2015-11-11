'use strict';

var GithubApi = require('github');
var Plugin = require('../plugin');

class Github extends Plugin {
  sayIssues(client, channel, user) {
    var github = new GithubApi({
      version: '3.0.0'
    });

    return github.issues.repoIssues({
      user: 'FunctionalTeam',
      repo: 'news-hopper'
    }, (err, res) => {
      res.forEach(issue => {
        client.say(channel, issue.title);
      });
    });
  }

  registerListeners(client) {
    var self = this;
    client.addListener('message', (from, to, message) => {
      if (message === '!issues') {
        self.sayIssues(client, to, from);
      }
    });
  }
}


module.exports = Github;
