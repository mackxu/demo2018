import toast from 'components/toast/function-toast'
// import toastC from 'components/toast/toast'

export default (Vue) => {
  // Vue.component(toastC.name, toastC)
  Vue.prototype.$toast = toast
  Vue.toast = toast
}
