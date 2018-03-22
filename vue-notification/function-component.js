// function-component.js
import Vue from 'vue'
import Component from './fun-component'

const NotificationConstructor = Vue.extend(Component)
const instances = []
let seed = 1

const removeInstance = (instance) => {
  const len = instances.length
  if (!instance) return
  // 根据id查找instance
  const index = instances.findIndex(inst => instance.id === inst.id)
  // 移除实例
  instances.splice(index, 1)
  if (len <= 1) return

  // 调整index之前的通知的垂直距离
  const removedHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removedHeight - 16
  }
}

const notify = function(options) {
  const {
    onClose,
    ...rest
  } = options

  if (Vue.prototype.$isServer) return
  options = options || {}
  const id = `notification_${seed++}`

  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    }
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)

  instance.vm.$on('closed', () => {
    if (typeof onClose === 'function') {
      onClose(instance)
    }
    removeInstance(instance)
    instance.vm.$destroy()
  })
  return instance.vm
}
export default notify
