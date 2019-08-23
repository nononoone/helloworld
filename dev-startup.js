'use strict'
const electron = require('electron')
const { spawn } = require('child_process')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config')
const electronConfig = require('./webpack.electron.config')

function startElectron () {
  electronConfig.mode = 'development'
  Webpack(electronConfig).watch({
    aggregateTimeout: 1000
  }, (err, stats) => {
    if (err) {
      console.log(err)
      return
    }
  })
  let electronProcess = spawn(electron, ['.'])
  electronProcess.on('close', () => {
    process.exit()
  })
}

function startServer () {
  webpackConfig.mode = 'development'
  const compiler = Webpack(webpackConfig)
  const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: false,
    quiet: true,
    stats: {
      colors: true
    }
  })
  const server = new WebpackDevServer(compiler, devServerOptions)
  server.listen(8080, () => {
    console.log('\nStarting server on http://localhost:8080\n')
  })
}

function devStartup () {
  startServer()
  startElectron()
}
devStartup()
