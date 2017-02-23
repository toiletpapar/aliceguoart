const chalk = require('chalk')
const config = require('./webpack.config.js')
// const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const nodeEnv = process.env.NODE_ENV || 'development'
const NODE_PORT = parseInt(process.env.NODE_PORT || 9000)
const port = NODE_PORT + 1
const host = process.env.NODE_HOST || 'localhost'

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: 'errors-only',
  historyApiFallback: true,
  proxy: {
    '*': `http://${host}:${NODE_PORT}`,
  },
})

server.listen(port, host, () => {
  console.log(`${chalk.blue('======================================')}`)
  console.log(`NODE ENV: ${chalk.red(nodeEnv)}`)
  console.log(`Webpack Dev Server started on ${chalk.green(`${host}:${port}`)}`)
})
