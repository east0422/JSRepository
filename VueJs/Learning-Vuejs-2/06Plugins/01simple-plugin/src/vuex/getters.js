const getters = {
  getLists: state => state.shoppinglists,
  curtabindex: state => state.curtabindex,
  getListById: (state, id) => {
    for (let list of state.shoppinglists) {
      if (list.id === id) {
        return list
      }
    }
    return null
  }
}

export default getters
