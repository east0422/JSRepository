// 如果不希望在每个文件前面都写上'use strict' 可以给nodejs传递一个参数 --use_strict eg: node --use_strict hello.js
'use strict'

var s = 'Hello'

function greet(name) {
  console.log(s + ', ' + name + '!')
}

function welcome() {
  console.log('welcome come here!')
}

// 把函数作为模块的输出暴露出去，这样其他模块就可以使用greet了
module.exports = {
  greet: greet,
  welcome: welcome
}