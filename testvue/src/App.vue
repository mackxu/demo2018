<template>
  <div id="app">
    <flip></flip>
  </div>
</template>

<script>
import toast from './components/toast/function-toast'
import flip from './components/flip'

export default {
  name: 'App',
  components: {
    flip
  },
  methods: {
    doClick () {
      toast({
        content: 'Toast! Toast!'
      })
    }
  },
  created () {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
