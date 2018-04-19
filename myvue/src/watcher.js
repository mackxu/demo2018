export default class Watcher {
  /**
   * [constructor description]
   * @param  {[type]} name [description]
   * @param  {[type]} el   [description]
   * @param  {[type]} vm   [description]
   * @param  {[type]} exp  [description]
   * @param  {[type]} attr [description]
   * @return {[type]}      [description]
   */
  constructor(name, el, vm, exp, attr) {
    this.name = name
    this.el = el
    this.vm = vm
    this.exp = exp
    this.attr = attr

    this.update()     // 初始化视图
  }
  /**
   * 当属性有变化时，更新视图
   * @return {[type]} [description]
   */
  update() {
    this.el[this.attr] = this.vm.$data[this.exp]
  }
}