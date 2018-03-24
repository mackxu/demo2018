<template>
  <div class="ui-tip" v-if="visible">
    <div class="tip-text">{{content}}</div>
  </div>
</template>

<script>
function log (text) {
  console.log(`[H5]->[Components]->[TipToast].${text}`)
}
export default {
  data () {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    doClose () {
      log('doClose: call')
      this.visible = false
      clearInterval(this.timer)
    },
    createTimer () {
      log('createTimer: call')
      this.timer = setInterval(() => {
        this.doClose()
        this.$emit('closed')
      }, this.duration)
    }
  },
  mounted () {
    this.createTimer()
  },
  destroyed () {
    log('destroyed')
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ui-tip {
    position: absolute;
    z-index: 1001;
    top: 8.69rem;
    left: 50%;
    transform: translateX(-50%);
    padding: .28rem .58rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.85);
    .tip-text {
      font-size: .36rem;
      line-height: .34rem;
      color: #f8f8f8;
    }
  }
</style>
