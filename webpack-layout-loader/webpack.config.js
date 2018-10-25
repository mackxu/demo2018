// 执行环境是node
// 使node支持es6语法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: {
          loader: path.resolve(__dirname, './layout-loader.js'),
          options: {
            layout: path.resolve(__dirname, './test/layout.html')
          },
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: path.resolve(__dirname, './test/home.tpl')
    })
  ]
};