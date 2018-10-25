<template>
  <button @click="add()">加1</button>
</template>

<script>
import store from '../store';

export default {
  name: 'plus',
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    add() {
      store.addCount();
      // eslint-disable-next-line
      console.log(this.$root);
    }
  }
}
</script>
