class FileListPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      let fileList = 'bundle list:\n\n';
      // 遍历所有资源文件
      for (let filename in compilation.assets) {
        fileList += `- ${filename}\n`;
      }
      // 将列表内容作为一个新文件资源，插入到webpack构建中
      compilation.assets['fileList.md'] = {
        source() {
          return fileList
        },
        size() {
          return fileList.length
        }
      };
      callback();
    });
  }
}

module.exports = FileListPlugin
