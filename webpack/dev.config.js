const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=30000&reload=true'
// Config
const ROOT_PATH = path.join(__dirname, '../app/')
const DIST_PATH = path.join(__dirname, '../dist')
const NODE_MODULES_PATH = ROOT_PATH + '../node_modules/'

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    'main': [
      'bootstrap-sass!' + path.join(ROOT_PATH, 'assets/styles/bootstrap.config.js'),
      'font-awesome-webpack!' + path.join(ROOT_PATH, 'assets/styles/font-awesome.config.js'),
      path.join(ROOT_PATH, 'src/index'),
      hotMiddlewareScript
    ],
    vendor: ['react', 'react-dom', 'react-router-redux', 'react-router', 'redux-form', 'redux-logger', 'validator', 'isomorphic-fetch',
    'redux', 'redux-thunk', 'redux-saga', 'lodash', 'ramda', hotMiddlewareScript]
  },
  output: {
    path: DIST_PATH,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /app\/src\/.*.js?$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH)
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      // One of the module requires babel loading (es7 decorators)
      {
        test: /node_modules\/flash-notification-react-redux\/.*.jsx?$/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded=includePaths[]=' + NODE_MODULES_PATH + 'bootstrap-sass/assets/stylesheets/'
      },
      // Font loader
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },

      // Images loader
      {
        test: /\.(svg|gif|png|jpg|jpeg)$/,
        loader: 'url-loader?name=[path][name].[ext]'
      }
    ]},
  resolve: {
    alias: {
      config: path.join(__dirname, '../config', 'development.js')
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: ROOT_PATH,
    outputPath: DIST_PATH,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlwebpackPlugin({
      title: 'Custom template',
      template: 'app/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 5,
      filename: 'vendor.bundle.[hash].js'
    })
  ]
}