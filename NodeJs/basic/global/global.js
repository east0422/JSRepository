// global in nodejs as window in js
'use strict'

if(typeof(window) === 'undefined') { // 'undefined' not undefined, in mac use javascriptcore also undefined
  console.log('nodejs')
} else {
  console.log('browser')
}

// will call next time not immediately
process.nextTick(function () {
  console.log('nextTick callback!')
})
console.log('nextTick was set!')  // nextTick was set! nextTick callback!(if not call process exit)

// call before exit
process.on('exit', function(code) {
  console.log('exit with code ' + code)
})
process.exit() // exit with code 0

console.log(process === global.process) // true

// current working directory
console.log(process.cwd()) // /Users/NewAdmin

// change current working directory
process.chdir('/private/tmp')

console.log(process.cwd())  // /private/tmp

// process include version、platform、arch property and so on
console.log(process)

console.log(global)
