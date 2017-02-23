const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PRODUCTION = process.env.NODE_ENV === 'production'
const port = parseInt(process.env.NODE_PORT) + 1 || '9001'
const host = process.env.NODE_HOST || 'localhost'

const entry = PRODUCTION
  ? {
    client: path.resolve(__dirname, 'src/client/index.js'),
  }
  : [
    `react-hot-loader/patch`,
    `webpack-dev-server/client?http://${host}:${port}`,
    `webpack/hot/only-dev-server`,
    path.resolve(__dirname, 'src/client/index.js'),
  ]

const devtool = PRODUCTION
  ? 'source-map'
  : 'eval'

const output = PRODUCTION
  ? {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  }
  : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
    publicPath: '/',
  }

const plugins = PRODUCTION
  ? []
  : [
    new webpack.HotModuleReplacementPlugin(),
  ]

module.exports = {
  entry: entry,
  externals: {
    // createjs: 'createjs',
  },
  target: 'web',
  devtool: devtool,
  output: output,
  resolve: {

  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: true,
      },
    }),
    ...plugins,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: PRODUCTION ? ['babel-loader'] : [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
}
