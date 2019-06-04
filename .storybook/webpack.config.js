const path = require('path');

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: path.resolve(__dirname, '../components'),
        containers: path.resolve(__dirname, '../containers'),
        utils: path.resolve(__dirname, '../utils')
      }
    }
  };
};
