// 执行在node环境，返回一个函数
// 在 Node.js 这样的单线程环境下进行耗时长的同步计算不是个好主意，
// 我们建议尽可能地使你的 loader 异步化。但如果计算量很小，同步 loader 也是可以的。
const fs = require('fs')
const loaderUtils = require('loader-utils')

module.exports = function layoutLoader(source) {
  const options = loaderUtils.getOptions(this);
  const layoutPath = options.layout;
  console.log(`layoutPath: ${layoutPath}`);

  // 告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback
  const callback = this.async();
  // 如果未指定字符编码，则返回原始的 buffer
  fs.readFile(layoutPath, 'utf8', (err, layoutHtml) => {
    if (err) return callback(err)
    source = layoutHtml.replace('{{__content__}}', source)
    callback(null, source)
  })
}
