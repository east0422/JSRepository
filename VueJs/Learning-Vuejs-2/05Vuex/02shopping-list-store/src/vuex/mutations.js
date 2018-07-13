import {CHANGE_TITLE, ADD_ITEM, CHANG_TAB} from './mutations_name'

function findById (state, id) {
  for (let list of state.shoppinglists) {
    if (list.id === id) {
      return list
    }
  }
  return null
}

const mutations = {
  [CHANGE_TITLE] (state, payload) {
    let list = findById(state, payload.id)
    if (list !== null) {
      list.title = payload.title
    }
  },
  [ADD_ITEM] (state, payload) {
    if (!payload.text.trim()) {
      return
    }
    let list = findById(state, payload.id)
    if (list !== null) {
      list.items.push({text: payload.text, checked: false})
    }
  },
  [CHANG_TAB] (state, id) {
    let list = findById(state, id)
    let index = state.shoppinglists.indexOf(list)
    if (index !== -1) {
      state.curtabindex = index
    }
  }
}

export default mutations
