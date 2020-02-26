module.exports = {
  devServer: {
    overlay: {
      hot: true, // 热更新
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://wap.showstart.com',
        // ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
