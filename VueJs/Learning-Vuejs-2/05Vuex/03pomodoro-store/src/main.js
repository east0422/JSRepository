import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

Vue.filter('addspace', (value) => {
  return value + ' '
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(App)
})
