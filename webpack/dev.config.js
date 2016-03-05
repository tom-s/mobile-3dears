const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT_PATH = path.resolve(__dirname) + '/../app/';
console.log("root path", ROOT_PATH);
const node_modules = path.resolve(__dirname, 'node_modules');
const assetsPath = path.resolve(__dirname, 'app/static/dist');
const host = 'localhost';
const port = 8080;

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'eval', // we should try some others (cheap-eval-source-map)
  entry: {
    'main': [
      'bootstrap-sass!' + ROOT_PATH + 'styles/bootstrap.config.js',
      'font-awesome-webpack!' + ROOT_PATH + 'styles/font-awesome.config.js',
      path.resolve(ROOT_PATH,'src/index')
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + host + ':' + port + '/'
  },
  module: {
    preLoaders: [
      {
        test: /app\/src\/.*.js?$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH)
      }
    ],
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },

    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader',"style!css!sass?outputStyle=expanded=includePaths[]=" + node_modules + "/bootstrap-sass/assets/stylesheets/")
    },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  plugins: [
  /*
    new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
      disable: false,
      allChunks: true
    }),*/
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlwebpackPlugin({
      title: 'Custom template',
      template: 'app/index.ejs', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    })
  ]
};