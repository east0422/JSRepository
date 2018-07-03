'use strict'
var fs = require('fs')
var url = require('url')
var path = require('path')
var http = require('http')

// 从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.')
console.log('Static root dir: ' + root)

// 创建服务器
var server = http.createServer(function (request, response) {
  // 获得URL的path，类似 '/css/bootstrap.css':
  var pathname = url.parse(request.url).pathname
  // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css'
  var filepath = path.join(root, pathname)
  // 获取文件状态:
  fs.stat(filepath, function (err, stats) {
    if (!err) {
      if (stats.isFile()) {
        // 没有出错并且文件存在:
        console.log('200 ' + request.url)
        // 发送200响应: charset=utf-8避免中文乱码
        response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
        // 将文件流导向response:
        fs.createReadStream(filepath).pipe(response)
      } else if (stats.isDirectory()) {
        var childrens = walk(filepath)
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        var respHtml = ''
        for (var i = 0; i < childrens.length; i++) {
          respHtml += '<a href=' + childrens[i] + '>' + childrens[i] + '</a></br>'
        }
        response.end(respHtml)
      }
    } else {
      // 出错了或者文件不存在:
      console.log('404 ' + request.url)
      // 发送404响应:
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(8000)
console.log('Server is running at http://localhost:8000')

// 遍历目录
function walk(dir) {
  var children = []
  fs.readdirSync(dir).forEach(function(filename){
    var filepath = path.join(dir, filename)
    var stat = fs.statSync(filepath)
    if (stat && stat.isDirectory()) {
      children = children.concat(walk(filepath))
    }
    else {
      children.push(path.relative(root, filepath))
    }
  })

  return children
}

// node server.js ../
// visite in browser http://localhost:8000 or http://localhost:8000/fs/sample.jpg

