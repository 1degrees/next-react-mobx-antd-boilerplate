/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-09 11:03:25 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-08-13 16:51:00
 * @file: next配置文件（包括webpack，静态路由等等）
 */

const path = require('path');
const withLess = require('@zeit/next-less');
const Dotenv = require('dotenv-webpack');

console.log(process.env.NODE_ENV)

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|ico|jpeg|bmp)$/,
      exclude: path.resolve(__dirname, './node_modules'),
      use: [{ loader: 'url-loader' }]
    })

    config.plugins.push(
      new Dotenv({//读取对应环境变量
        path: path.resolve(__dirname,`./env/.env.${process.env.NODE_ENV}`),
        safe: false,
        systemvars: false
      })
    )
    return config
  }
})
