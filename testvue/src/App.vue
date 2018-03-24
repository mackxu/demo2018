<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a @click="doClick">Toast</a>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import toast from './components/toast/function-toast'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    doClick () {
      toast({
        content: 'Toast! Toast!'
      })
    }
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
