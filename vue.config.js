const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_colors.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}