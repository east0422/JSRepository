var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  title: 'My Shopping List',
  newItem: ''
}

/**
 * Declaring components
 */
var ItemsComponent = Vue.extend({
  data: function () {
    return data
  },
  template:
  '<ul>' +
    '<li v-for="item in items" :class="{ \'removed\': item.checked }">' +
      '<div class="checkbox">' +
        '<label>' +
          '<input type="checkbox" v-model="item.checked"> {{ item.text }}' +
        '</label>' +
      '</div>' +
    '</li>' +
  '</ul>'
})

var ChangeTitleComponent = Vue.extend({
  data: function () {
    return data;
  },
  template: '<input v-model="title"/>'
})

var footerComponent = Vue.extend({
  data: function () {
    return data
  },
  template: 
    '<div class="footer">' +
      '<hr/>' +
      '<em>Change the title of your shopping list here</em>' +
      '<change-title-component></change-title-component>' +
    '</div>'
})

var AddItemComponent = Vue.extend({
  data: function () {
    return data
  },
  methods: {
    addItem: function () {
      let text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        })
        this.newItem = ""
      }
    }
  },
  template:
  '<div class="input-group">'                                                                                                                     +
    '<input v-model="newItem" @keyup.enter="addItem" placeholder="add shopping list item" type="text" class="form-control">'  +
    '<span class="input-group-btn">'                                                                                          +
    '  <button @click="addItem" class="btn btn-default" type="button">Add!</button>'                                          +
    '</span>'                                                                                                                 +
  '</div>'
})

/**
 * Registering components
 */
Vue.component('items-component', ItemsComponent)
Vue.component('change-title-component', ChangeTitleComponent)
Vue.component('footer-component', footerComponent)
Vue.component('add-item-component', AddItemComponent)

new Vue({
  el: '#app',
  data: data
})

