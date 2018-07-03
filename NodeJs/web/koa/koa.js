'use strict'

// npm install -g express
var express = require('express')
var app = express()

app.get('/', function(req, resp) {
  resp.send('hello world!')
})
app.get('/test', function(req,resp) {
  resp.send('visite test!')
})

// app.listen(8000, function() {
//   console.log('listening on port 8000')
// })


const Koa = require('koa')
var koaApp = new Koa()

koaApp.use(async (ctx, next) => {
  if (ctx.response.body === undefined) {
    ctx.response.body = ''
  }
  ctx.response.body += `${ctx.request.url}  ${ctx.request.method} \n`
  await next() // 调用下一个middleware
})
koaApp.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next() // 调用下一个middleware
  const ms = new Date().getTime() - start
  if (ctx.response.body === undefined) {
    ctx.response.body = ''
  }
  ctx.response.body += `Time: ${ms}ms \n`
})
koaApp.use(async (ctx, next) => {
  ctx.response.type = 'text/html'
  if (ctx.response.body === undefined) {
    ctx.response.body = ''
  }

  if (ctx.request.path === '/') {
    ctx.response.body += '<h1>index Page</h1>\n'
  } else if (ctx.request.path === '/test') {
    ctx.response.body += '<h1>tes Page</h1>\n'
  } else {
    ctx.response.body += '<h1>Hello, koa2!</h1>\n'
  }
  await next()
})

// use koa-bodyparser to parse request into ctx.request.body(main for post)
const bodyParser = require('koa-bodyparser')
koaApp.use(bodyParser())
// koa-router
var router = require('./router')
koaApp.use(router.routes())

koaApp.listen(8000)
console.log('listening on port 8000')
