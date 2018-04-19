import Watcher from './watcher'

export default class MyVue {
  constructor(opts) {
    this.$options = opts
    this.$dataProps = opts.data
    this.$methods = opts.methods

    this.$el = document.querySelector(opts.el)
    this._binding = {}
    this._obverse(this.$dataProps)
    this._complie(this.$el)
  }
  /**
   * 遍历dataProps
   * 为data属性添加对应的watcher空数组
   * 重写属性的访问方法
   * 并在属性变化时, 通知watcher执行对应的所有指令，更新视图
   * @return {[type]} [description]
   */
  _obverse(dataProps) {
    let value
    for (let key in dataProps) {
      this._binding[key] = {
        _watchers: []
      }
      value = dataProps[key]
      if (value && typeof value === 'object') {
        this._obverse(value)
      }
      const watchers = this._binding[key]._watchers
      Object.defineProperty(dataProps, key, {
        enumerable: true,
        configurable: true,
        get() {
          return value
        },
        set(newVal) {
          if (value !== newVal) {
            value = newVal
            // 通知watcher更新视图
            watchers.forEach(watcher => watcher.update())
          }
        }
      })
    }
  }
  /**
   * 遍历dom，解析指令
   * 为v-modlel、v-text创建watcher对象
   * 初始化视图
   * @return {[type]} [description]
   */
  _complie($el) {
    const self = this;
    const nodes = $el.children
    Array.from(nodes, (node) => {
      if (node.children.length) {
        self._complie(node)
      }
      // 解析指令
      if (node.hasAttribute('@click')) {
        node.addEventListener('click', ((node) => {
          const method = node.getAttribute('@click')
          // self.$dataProps 能让时间处理函数直接访问data属性
          return self.$methods[method].bind(self.$dataProps)
        })(node))
      }
      if (node.hasAttribute('v-model') && (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA')) {
        node.addEventListener('input', ((node) => {
          const exp = node.getAttribute('v-model')
          // 添加一个watcher
          self._binding[exp]._watchers.push(new Watcher(
            'input',
            node,
            self,
            exp,
            'value'
          ))
          return () => self.$dataProps[exp] = node.value
        })(node))

      }
      if (node.hasAttribute('v-text')) {
        const exp = node.getAttribute('v-text')
        // 添加一个watcher
        self._binding[exp]._watchers.push(new Watcher(
          'text',
          node,
          self,
          exp,
          'innerHTML'
        ))
      }
    })
  }
}