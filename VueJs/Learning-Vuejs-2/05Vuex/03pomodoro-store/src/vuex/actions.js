import * as types from './mutation_types'

export default {
  [types.START]: ({commit}) => {
    commit(types.START)
  },
  [types.PAUSE]: ({commit}) => {
    commit(types.PAUSE)
  },
  [types.STOP]: ({commit}) => {
    commit(types.STOP)
  }
}
