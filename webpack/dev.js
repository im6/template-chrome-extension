const baseConfig = require("./base");

module.exports = {
  ...baseConfig,
  watch: true,
  mode: "development",
  devtool: "cheap-source-map",
};
