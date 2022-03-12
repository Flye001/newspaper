const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  },
  outputDir: "H:/Programming/Websites/school-newspaper/docs",
  transpileDependencies: true
})
