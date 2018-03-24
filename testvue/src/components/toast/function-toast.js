import Vue from 'vue'
import Toast from './toast'

const ToastConstructor = Vue.extend(Toast)
let instance = null

export default (options = {}) => {
  // 如果之前有创建, 销毁之前的创建的
  if (instance) {
    instance.doClose()
  }
  // 创建新toast对象
  instance = new ToastConstructor({
    propsData: {
      ...options
    }
  })
  instance.$on('closed', () => {
    instance = null // 用于在新对象创建前的判断
  })
  // 插入到页面
  instance.$mount()
  document.body.appendChild(instance.$el)
}
