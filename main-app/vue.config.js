/*
 * @Author: jing.chen
 * @Date: 2021-08-18 15:30:39
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-09-03 10:59:48
 * @Description: 
 */
const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'admin-tempalte'
    },
    login: {
      entry: 'src/views/login/main.js',
      template: 'public/index.html',
      filename: 'login.html',
      title: '登录'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true,
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        data: '@import "@/style/setting-variable.scss";' // 8.x一下用data，8.x用prependData
      }
    }
  }
}