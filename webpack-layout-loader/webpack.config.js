// 执行环境是node
// 使node支持es6语法
// html-loader：接收 HTML，输出一个合法的 JS 模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index_bundle.js',
    path: resolve('dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          'html-loader',
          {
            loader: resolve('./layout-loader.js'),
            options: {
              layout: resolve('./test/layout.html')
            },
          }
        ]
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