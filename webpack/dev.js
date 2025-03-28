const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  watch: true,
  mode: "development",
  devtool: "cheap-source-map",
  entry: {
    content: "./src/content.js",
    background: "./src/background.js",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src"),
          to: path.join(__dirname, "../dist"),
        },
        {
          from: path.join(__dirname, "../static"),
          to: path.join(__dirname, "../dist/static"),
        },
      ],
    }),
  ],
};
