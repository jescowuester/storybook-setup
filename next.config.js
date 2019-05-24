const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["containers"] = path.join(__dirname, "containers");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    return config;
  }
};
