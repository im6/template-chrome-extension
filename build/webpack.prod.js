const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    content: './src/content.js',
    background: './src/background.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        ie8: false,
        warnings: false,
      }
    })
  ],
};


