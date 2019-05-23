const merge = require('lodash/merge');

const defaultConfig = require('./default');

module.exports = merge(defaultConfig, {
  app: {
    titleTemplate: '%s - Intersport Bra Finder'
  }
});
