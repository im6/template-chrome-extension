const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  entry: {
    content: './src/content.js',
    background: './src/background.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  externals: {
    jquery: 'jQuery'
  }
};