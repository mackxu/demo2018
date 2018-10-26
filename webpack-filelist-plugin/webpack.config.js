const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileListPlugin = require('./filelist-plugin.js')

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'aaa.html',
      template: resolve('./test/aaa.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'bbb.html',
      template: resolve('./test/bbb.html')
    }),
    new FileListPlugin()
  ]
}