let config;

if (__DEV__) {
  config = require('./default');
} else {
  config = require('./prod');
}

module.exports = config;
