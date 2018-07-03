'use strict'

var fs = require('fs')

// 异步读取文本文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log('error:' + err)
  } else {
    console.log(data) // just a txt for fs test!
  }
})


// 异步读取图片二进制文件
fs.readFile('sample.jpg', function (err, data) {
  if (err) {
    console.log('error:' + err)
  } else {
    console.log(data) // <Buffer ff d8 ff e1 00 18 45 78 69 66 00 00 49 49 2a 00 08 00 00 00 00 00 00 00 00 00 00 00 ff ec 00 11 44 75 63 6b 79 00 01 00 04 00 00 00 3c 00 00 ff e1 03 ... >
    // console.log('utf-8:' + data.toString('utf-8'))
    console.log(data.length + ' bytes') // 45328 bytes
  }
})


// 同步读取文件，不接收回掉函数，函数直接返回结果
// 因为是同步，而上面的是异步所以同步结果会在异步输出结果前面
try {
  var txtData = fs.readFileSync('sample.txt', 'utf-8')
  console.log('sync:' + txtData) // sync:just a txt for fs test!

  // var jpgData = fs.readFileSync('sample.jpg')
  // console.log('sync:' + jpgData)
} catch (err) {
  console.log('sync read error:' + error)
}

// 异步写文件
fs.writeFile('sample.txt', 'write to sample.txt to test11111111', function (err) {
  if (err) {
    console.log('write error:' + err)
  } else {
    console.log('write success!')
  }
})


// 同步写文件, 异步会覆盖同步写入文件的内容
fs.writeFileSync('sample.txt', 'sync write to sample.txt test')


// 异步获取文件信息
fs.stat('sample.txt', function (err, stat) {
  if (err) {
    console.log('get sample.txt info error: ' + err)
  } else {
    console.log('isFile: ' + stat.isFile()) // true
    console.log('isDirectory: ' + stat.isDirectory()) // false
    if (stat.isFile()) {
      console.log('size: ' + stat.size) // 29
      console.log('birth time: ' + stat.birthtime) // 创建时间
      console.log('modified time: ' + stat.mtime) // 修改时间
    }
  }
})

// 同步获取文件信息statSync()，如上述方法


// 在服务器端代码必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
// 服务器启动时如果需要读取配置文件或结束时需要写入到状态文件时，可使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行



