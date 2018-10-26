// 执行在node环境，返回一个函数
const fs = require('fs')
const loaderUtils = require('loader-utils')

module.exports = function layoutLoader(source) {
  const options = loaderUtils.getOptions(this);
  const layoutPath = options.layout;
  console.log(`layoutPath: ${layoutPath}`);
  try {
    const layoutHtml = fs.readFileSync(layoutPath, 'utf-8')
    source = layoutHtml.replace('{{__content__}}', source)
    return `export default ${ JSON.stringify(source) }`;
  } catch (error) {
    return error;
  }
}
