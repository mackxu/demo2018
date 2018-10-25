<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>count: {{ sharedState.count }}</div>
    <plus></plus>
    <minus></minus>
    <reset></reset>
    <p><button>生成图片</button></p>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image';
import store from './store';

import plus from './components/plus'
import minus from './components/minus'
import reset from './components/reset'

export default {
  name: 'app',
  components: {
    plus,
    minus,
    reset
  },
  data() {
    return {
      sharedState: store.state,
      testtest: 1
    }
  },
  mounted() {
    var node = document.getElementById('app');
    domtoimage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        // eslint-disable-next-line
        console.error('oops, something went wrong!', error);
      });
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
