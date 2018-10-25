<template>
  <button @click="reset()">重置1</button>
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
    reset() {
      store.resetCount();
    }
  }
}
</script>
