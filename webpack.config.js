const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(ROOT_PATH,'src/index')
  ],
  module: {
    /*
    preLoaders: [
      {
        test: /\.jsx|js?$/,
        loaders: process.env.NODE_ENV === 'production' ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH)
      }
    ],*/
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test: /\.scss$/,
      loaders: ['style','css','sass']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH,'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    //new ExtractTextPlugin("[name].css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    /*new HtmlwebpackPlugin({
      title: 'React BoilerPlate'
    })*/
  ]
};