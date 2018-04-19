export default class Watcher {
  /**
   * [constructor description]
   * @param  {[type]} name watcher名称
   * @param  {[type]} el   指令关联的DOM元素
   * @param  {[type]} vm   指令所属的vm实例
   * @param  {[type]} exp  指令的值，如number
   * @param  {[type]} attr 指令关联的DOM属性
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
    this.el[this.attr] = this.vm.$dataProps[this.exp]
  }
}