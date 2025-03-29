const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: "./src/content/index.js",
    background: "./src/background/index.js",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src/manifest.json"),
          to: path.join(__dirname, "../dist/manifest.json"),
        },
        {
          from: path.join(__dirname, "../src/view"),
          to: path.join(__dirname, "../dist/view"),
        },
        {
          from: path.join(__dirname, "../static"),
          to: path.join(__dirname, "../dist/static"),
        },
      ],
    }),
  ],
};
