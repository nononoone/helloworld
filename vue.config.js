const path = require('path')

module.exports = {
  configureWebpack: {
    entry: {
      app: './src/renderer/main.js'
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/renderer')
      },
      extensions: ['.js', '.vue', '.json', '.css', '.node']
    },
    target: 'electron-renderer'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './'
}
