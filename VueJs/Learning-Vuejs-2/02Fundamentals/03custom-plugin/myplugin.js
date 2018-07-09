const MyPlugin = {
  install: function (Vue, options) {
    // 添加全局资源
    Vue.directive('square', function (el, binding) {
      el.innerHTML = Math.pow(binding.value, 2)
    })

    // 添加全局方法
    Vue.prototype.doubleNumber = function (val) {
      if (typeof val === 'number') {
        return val * 2
      } else if (!isNaN(Number(val))) {
        return Number(val) * 2
      } else {
        return NaN
      }
    }
  }
}

export default MyPlugin
