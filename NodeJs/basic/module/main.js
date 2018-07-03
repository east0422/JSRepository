'use strict'

// 引入hello模块，需要注意模块的相对路径
var hello = require('./hello')
// 只写模块名，则Node会依次在内置模块、全局模块和当前模块下查找
// var greet = require('hello') // throw err; Cannot find module 'hello'
var s = 'world'

hello.greet(s) // Hello, Michael!
hello.welcome() // welcome come here!

console.log(global)