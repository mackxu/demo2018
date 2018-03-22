// fun-component.js
import Notification from './notification.vue'
export default {
  extends: Notification,
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset + 20}px`
      }
    }
  },
  data() {
    return {
      verticalOffset: 0,
      visible: false,
      height: 0,
      autoClose: 3000
    }
  },
  mounted() {
    this.createTimer()
  },
  methods: {
    createTimer() {
      if (this.autoClose) {
        // 自动销毁
        this.timer = setTimeout(() => {
          this.doClose()
        }, this.autoClose)
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    setHeight() {
      this.height = this.$el.offsetHeight
    }
  }
}