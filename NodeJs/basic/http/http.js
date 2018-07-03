'use strict'

// http
var http = require('http')
// 创建http server，并传入回调函数
var server = http.createServer(function (request, response) {
  // 回调函数接收request和response对象,
  // 获得HTTP请求的method和url:
  console.log(request.method + ': ' + request.url)
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html
  response.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'})
  // 将HTTP响应的HTML内容写入response:
  response.end('<h1>Hello world!</h1>')
})
// 让服务器监听8000端口:
// server.listen(8000)
// console.log('Server is running at http://localhost:8000/')


// lsof -i :8000 查找8000端口占用pid
// kill pid


// url
var url = require('url')
console.log(url.parse('http://www.baidu.com'))
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

// path
var path = require('path')
// 解析当前目录:
var workDir = path.resolve('.')
console.log(workDir)  // /Users/NewAdmin
// 组合完整的文件路径:当前目录+'pub'+'index.html'
var filePath = path.join(workDir, 'pub', 'index.html')
console.log(filePath) // /Users/NewAdmin/pub/index.html



