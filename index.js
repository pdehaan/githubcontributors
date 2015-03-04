'use strict';

var Hapi = require('hapi');

var routes = require('./routes/index');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.route(routes);
server.start(function () {
  console.log('Hapi server running at: %s', server.info.uri);
});
