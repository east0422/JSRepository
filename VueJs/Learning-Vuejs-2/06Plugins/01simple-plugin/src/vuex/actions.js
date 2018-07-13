// actions don't need to be synchronous
// you can use [methodname]:(param) => {body} or [methodname] (param) {body}
import * as types from './mutations_name'
import getters from './getters'
import api from '@/api/api'

const actions = {
  [types.POPULATE_SHOPPING_LISTS]: ({commit}) => {
    api.fetchShoppingLists().then(response => {
      commit(types.POPULATE_SHOPPING_LISTS, response.data)
    })
  },
  [types.ADD_SHOPPING_LIST] (store, shoppinglist) {
    api.addNewShoppingList(shoppinglist).then(() => {
      store.state.curtabindex = store.state.shoppinglists.length
      store.dispatch(types.POPULATE_SHOPPING_LISTS)
    })
  },
  [types.DELETE_SHOPPING_LIST] (store, id) {
    api.deleteShoppingList(id).then(() => {
      store.state.curtabindex = 0
      store.dispatch(types.POPULATE_SHOPPING_LISTS)
    })
  },
  [types.UPDATE_SHOPPING_LIST]: (store, id) => {
    let shoppinglist = getters.getListById(store.state, id)
    if (shoppinglist !== null) {
      api.updateShoppingList(shoppinglist).then(() => {
        store.dispatch(types.POPULATE_SHOPPING_LISTS)
      })
    }
  },
  [types.CHANGE_TITLE]: (store, payload) => {
    store.commit(types.CHANGE_TITLE, payload)
    store.dispatch(types.UPDATE_SHOPPING_LIST, payload.id)
  },
  [types.ADD_ITEM]: (store, payload) => {
    store.commit(types.ADD_ITEM, payload)
    store.dispatch(types.UPDATE_SHOPPING_LIST, payload.id)
  },
  [types.CHANG_TAB]: ({commit}, id) => {
    commit(types.CHANG_TAB, id)
  }
}

export default actions
