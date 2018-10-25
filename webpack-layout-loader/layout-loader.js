// 执行在node环境，返回一个函数
const fs = require('fs')
const path = require('path')
const loaderUtils = require('loader-utils')

module.exports = function layoutLoader(source) {
  const callback = this.async();
  const options = loaderUtils.getOptions(this);
  const layoutPath = options.layout;
  try {
    const layoutHtml = fs.readFileSync(layoutPath, 'utf-8')
    source = layoutHtml.replace('{{__content__}}', source)
    callback(null, `export default ${ JSON.stringify(source) }`);
  } catch (error) {
    callback(error)
  }
}
