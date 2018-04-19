import MyVue from './myvue'

new MyVue({
  el: '#app',
  data: {
    number: 2
  },
  methods: {
    increment() {
      this.number = (+this.number) + 1
    }
  }
});
