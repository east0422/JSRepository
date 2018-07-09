Vue.directive('mypow', function (el, binding){
  el.innerHTML = Math.pow(binding.value, 2)
})

Vue.directive('square', {
  bind: function (el, binding) {
    el.innerHTML = binding.value
    el.style.backgroundColor = 'red'
  },
  update: function (el, binding) {
    el.innerHTML = binding.value * binding.value
    el.style.backgroundColor = 'green'
  },
  unbind: function (el, binding) {
    el.innerHTML = binding.value
    el.style.backgroundColor = 'white'
  }
})

Vue.directive('focus', {
  inserted: function (el, binding) {
    el.focus()
    el.style.backgroundColor = binding.value.color
  }
})

new Vue({
  el: '#app',
  data () {
    return {
      item: 10,
    }
  }
})

