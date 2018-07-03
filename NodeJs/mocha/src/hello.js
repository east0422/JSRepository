'use strict'

// 同步方法
function sum(...rest) {
  var sum = 0
  for (let n of rest) {
    sum += n
  }
  return sum
}

// 异步方法
const fs = require('mz/fs')
const path = require('path')
async function asyncCalExpression() {
  let expression = await fs.readFile(path.join(__dirname, '../data.txt'), 'utf-8')
  let fn = new Function('return ' + expression)
  let r = fn()
  console.log(`Calculate: ${expression} = ${r}`)
  return r
}

module.exports = {
  sum: sum,
  asyncCalExpression: asyncCalExpression,
}

