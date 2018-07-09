import Vue from 'vue/dist/vue.js'
import MyPlugin from './myplugin.js'
Vue.use(MyPlugin)

new Vue({
  el: '#app',
  data () {
    return {
      item: 8,
    }
  }
})
