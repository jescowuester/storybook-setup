const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin');

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config) {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.containers = path.join(__dirname, 'containers');
    config.resolve.alias.utils = path.join(__dirname, 'utils');
    // config.plugins = [
    //   new CircularDependencyPlugin({
    //     // exclude detection of files based on a RegExp
    //     exclude: /a\.js|node_modules/,
    //     // add errors to webpack instead of warnings
    //     failOnError: true,
    //     // allow import cycles that include an asyncronous import,
    //     // e.g. via import(/* webpackMode: "weak" */ './file.js')
    //     allowAsyncCycles: false,
    //     // set the current working directory for displaying module paths
    //     cwd: process.cwd()
    //   })
    // ];

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }
      return entries;
    };

    return config;
  }
});
