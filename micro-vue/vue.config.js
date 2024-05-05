const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', // 设置允许跨域请求，否则会因为在其他端口号获取资源报错
    },
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',
      // webpack 4 将chunkLoadingGlobal改为jsonpFunction
      chunkLoadingGlobal: `webpackJsonp_` + name,
    },
  },
});
