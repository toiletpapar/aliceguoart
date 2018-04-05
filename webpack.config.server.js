const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const entry = path.resolve(__dirname, 'src/server/index.js')

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'server.bundle.js',
}

module.exports = {
  entry: entry,
  target: 'node',
  externals: [nodeExternals()],
  output: output,
  resolve: {
  },
  plugins: [
    new webpack.DefinePlugin({
      client: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
