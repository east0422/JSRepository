// mutations have to be synchronous
import * as types from './mutations_name'
import getters from './getters'

const mutations = {
  [types.POPULATE_SHOPPING_LISTS] (state, lists) {
    state.shoppinglists = lists
  },
  [types.CHANGE_TITLE] (state, shoppinglist) {
    let list = getters.getListById(state, shoppinglist.id)
    if (list !== null) {
      list.title = shoppinglist.title
    }
  },
  [types.ADD_ITEM] (state, payload) {
    if (!payload.text.trim()) {
      return
    }
    let list = getters.getListById(state, payload.id)
    if (list !== null) {
      list.items.push({text: payload.text, checked: false})
    }
  },
  [types.CHANG_TAB] (state, id) {
    let list = getters.getListById(state, id)
    let index = state.shoppinglists.indexOf(list)
    if (index !== -1) {
      state.curtabindex = index
    }
  }
}

export default mutations
