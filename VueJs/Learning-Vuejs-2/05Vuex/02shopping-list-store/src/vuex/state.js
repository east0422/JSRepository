const state = {
  curtabindex: 0,
  shoppinglists: [
    {
      id: 'groceries',
      title: 'Groceries',
      items: [{text: 'Bananas', checked: true}, {text: 'Apples', checked: false}]
    }, {
      id: 'clothes',
      title: 'Clothes',
      items: [{text: 'black dress', checked: false}, {text: 'all stars', checked: false}]
    }
  ]
}

export default state
