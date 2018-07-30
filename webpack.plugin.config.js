const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: './src/index.plugin.js',
  target: 'web',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: 'index.min.js',
  },
});
