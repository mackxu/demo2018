export default {
  debug: true,
  state: {
    count: 1
  },
  addCount() {
    // eslint-disable-next-line
    console.log('add count 1');
    this.state.count += 1;
  },
  minusCount() {
    // eslint-disable-next-line
    console.log('minus count 1');
    this.state.count -= 1;
  },
  resetCount() {
    // eslint-disable-next-line
    console.log('reset count');
    this.state.count = 1;
  }
}