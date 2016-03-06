const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

// Config
const ROOT_PATH = path.resolve(__dirname) + '/../app/'
const ASSETS_PATHS = ROOT_PATH + 'static/dist/'
const NODE_MODULES_PATH = ROOT_PATH + '../node_modules'
const HOST = 'localhost'
const PORT = 8080

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    'main': [
      'bootstrap-sass!' + ROOT_PATH + 'styles/bootstrap.config.js',
      'font-awesome-webpack!' + ROOT_PATH + 'styles/font-awesome.config.js',
      ROOT_PATH + 'src/index'
    ]
  },
  output: {
    path: ASSETS_PATHS,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + HOST + ':' + PORT + '/'
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
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000'}
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlwebpackPlugin({
      title: 'Custom template',
      template: 'app/index.ejs', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    })
  ]
}