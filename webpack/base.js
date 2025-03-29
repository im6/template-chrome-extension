const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/popup/index.js",
    content: "./src/content/index.js",
    background: "./src/background/index.js",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  "@tailwindcss/postcss": {},
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src/manifest.json"),
          to: path.join(__dirname, "../dist/manifest.json"),
        },
        {
          from: path.join(__dirname, "../src/popup/index.html"),
          to: path.join(__dirname, "../dist/popup.html"),
        },
        {
          from: path.join(__dirname, "../static"),
          to: path.join(__dirname, "../dist/static"),
        },
      ],
    }),
  ],
};
