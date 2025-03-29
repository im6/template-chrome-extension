const baseConfig = require("./base");

module.exports = {
  ...baseConfig,
  mode: "production",
  devtool: "cheap-source-map",
};
