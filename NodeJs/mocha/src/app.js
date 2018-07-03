'use strict'
// http
const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next()
  const duration = new Date().getTime() - start
  console.log(`${ctx.request.method} ${ctx.request.url}: ${duration}ms`)
  ctx.response.set('X-Response-Time', `${duration}ms`)
})

app.use(async (ctx, next) => {
  var name = ctx.request.query.name || 'mocha'
  ctx.response.type = /text\/html/
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
})

module.exports = app