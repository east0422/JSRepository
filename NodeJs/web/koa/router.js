const router = require('koa-router')()
router.get('/hello/:name', async(ctx, next) => {
  var name = ctx.params.name
  if (ctx.response.body === undefined) {
    ctx.response.body = ''
  }
  ctx.response.body += `<h1>Hello, ${name} !`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action='/signin' method='post'>
      <p>Name: <input name='name' value='koa'></p>
      <p>Password: <input name='password' type='password'></p>
      <p><input type='submit' value='Submit'></p>
    </form>`
})

router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || ''
  var password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href='/'>Try again</a></p>`
  }
})

module.exports = router
