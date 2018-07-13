import {WORKING_TIME} from '../config'

const state = {
  started: false,
  paused: false,
  stopped: false,
  isworking: true,
  catimgsrc: 'cat1.jpg',
  counter: WORKING_TIME,
  interval: null
}

export default state
