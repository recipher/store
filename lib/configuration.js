var _ = require('lodash')
  , configuration = require('@ftbl/configuration');

module.exports = function(config) { 
  config = _.defaults(config || {}, {
    url: configuration('rethinkdb:url')
  , port: configuration('rethinkdb:port')
  , host: configuration('rethinkdb:host')
  , database: configuration('rethinkdb:database')
  });

  console.log(process.env)

  if (config.url) {
    var url = require('url').parse(config.url);

    return {
      port: parseInt(url.port, 10)
    , host: url.hostname
    , database: config.database
    };
  } else {
    return {
      port: config.port || 28015
    , host: config.host || 'localhost'
    , database: config.database
    };
  }
};