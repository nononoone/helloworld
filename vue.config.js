module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      /* some lib as websocket no 'module' entry problem fix */
      mainFields: ['module', 'main', 'brower'],
      extensions: ['.js', '.vue', '.json', '.css', '.node']
    },
    target: 'electron-renderer'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './'
}
