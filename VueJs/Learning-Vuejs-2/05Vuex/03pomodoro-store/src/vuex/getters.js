export default {
  isStarted: state => state.started,
  isPaused: state => state.paused,
  isStopped: state => state.stopped,
  isWorking: state => state.isworking,
  getCatImage: state => state.catimgsrc,
  getMinutes: state => Math.floor(state.counter / 60),
  getSeconds: state => state.counter % 60
}
