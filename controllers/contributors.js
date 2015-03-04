'use strict';

var topGitHubContributors = require('top-gh-contribs');

module.exports = function (request, reply) {
  topGitHubContributors(request.params).then(reply, reply);
};
