<template>
  <button @click="minus()">减1</button>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    minus() {
      store.minusCount();
    }
  }
}
</script>
