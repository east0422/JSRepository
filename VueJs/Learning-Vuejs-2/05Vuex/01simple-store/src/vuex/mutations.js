import {CHANGE_MSG, INCREMENT_COUNTER} from './mutation_types'

const mutations = {
  [CHANGE_MSG](state, msg) {
    state.message = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter ++;
  }
}

export default mutations