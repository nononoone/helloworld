'use strict'
const path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/electron/index.js')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist')
  },
  target: 'electron-main'
}
