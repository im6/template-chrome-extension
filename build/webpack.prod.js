const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: `./src/${pjson.vedd rsion_src}/index.js`,
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: 'http://dkny.oss-cn-hangzhou.aliyuncs.com/3/',
    filename: 'main.min.js'
  },

  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        ie8: false,
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
    }),
  ],
};


