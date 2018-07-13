import {CHANGE_TITLE, ADD_ITEM, CHANG_TAB} from './mutations_name'

const actions = {
  [CHANGE_TITLE]: ({commit}, payload) => {
    commit(CHANGE_TITLE, payload)
  },
  [ADD_ITEM]: ({commit}, payload) => {
    commit(ADD_ITEM, payload)
  },
  [CHANG_TAB]: ({commit}, id) => {
    commit(CHANG_TAB, id)
  }
}

export default actions
