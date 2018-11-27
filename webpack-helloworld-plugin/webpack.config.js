const path = require('path')
const HelloWorldPlugin = require('./helloWorldPlugin.js')

const resolve = (dir) => path.resolve(__dirname, dir); 

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  plugins: [
    new HelloWorldPlugin({ setting: true })
  ]
}