import * as types from './mutation_types'
import {WORKING_TIME, RESTING_TIME} from '../config'

function togglePomodoro (state) {
  state.isworking = !state.isworking
  state.started = state.isworking
  state.stopped = !state.isworking
  state.counter = state.isworking ? WORKING_TIME : RESTING_TIME
}

function tick (state) {
  if ((state.counter % 60) % 5 === 0) { // 每间隔10秒随机切换一张图片
    state.catimgsrc = 'cat' + (Math.floor(Math.random() * 3) + 1) + '.jpg'
  }
  if (state.counter === 0) {
    togglePomodoro(state)
  } else {
    state.counter--
  }
}

export default {
  [types.START] (state) {
    if (state.interval !== null) {
      clearInterval(state.interval)
      state.interval = null
    } 
    if (!state.paused) {
      state.counter = WORKING_TIME
    }
    state.started = true
    state.paused = false
    state.stopped = false
    state.isworking = true
    state.interval = setInterval(() => tick(state), 1000)
  },
  [types.PAUSE] (state) {
    state.paused = true
    state.started = true
    state.stopped = false
    clearInterval(state.interval)
    state.interval = null
  },
  [types.STOP] (state) {
    if (state.interval !== null) {
      clearInterval(state.interval)
      state.interval = null
    }
    state.stopped = true
    state.paused = false
    state.started = false
    state.isworking = false
    state.counter = RESTING_TIME
    state.interval = setInterval(() => tick(state), 1000)
  }
}
