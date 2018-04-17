<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <a @click="doClick">Toast</a>
  </div>
</template>

<script>
import toast from './components/toast/function-toast'
import es6 from './components/es6'

export default {
  name: 'App',
  methods: {
    doClick () {
      toast({
        content: 'Toast! Toast!'
      })
    }
  },
  created () {
    es6()
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
