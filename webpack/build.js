const path = require("path");

module.exports = {
  mode: "production",
  devtool: "cheap-source-map",
  entry: {
    content: "./src/content.js",
    background: "./src/background.js",
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
  },
};
