'use strict'

const app = require('../src/app.js')
const request = require('supertest')

describe('#app.js', () => {
  let server
  before (() => {
    server = app.listen(9000)
  })
  after (() => {
    server.close()
  })

  describe('#test server', () => {
    it('#test GET /', async () => {
      let res = await request(server).get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, '<h1>Hello, mocha!</h1>')
    })

    it('#test GET /path?name=Bob', async () => {
      let res = await request(server).get('/path?name=Bob')
        .expect('Content-Type', /text\/html/)
        .expect(200, '<h1>Hello, Bob!</h1>')
    })
  })
})

