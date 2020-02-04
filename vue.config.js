module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://wx.tuwan.com',
        // ws: true,
        changeOrigin: true
      },

      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
