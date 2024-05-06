// 在根目录下新增config-overrides.js文件并新增如下配置
const { name } = require('./package.json');

module.exports = {
  webpack: (config) => {
    // config.output.library = `${name}-[name]`;
    config.output.library = 'micro-react';
    config.output.libraryTarget = 'umd';
    // config.output.globalObject = 'window';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // 配置 history 模式
      config.historyApiFallback = true;
      return config;
    };
  },
};
