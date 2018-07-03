'use strict'

const assert = require('assert')
const hello = require('../src/hello.js')

describe('#hello.js', () => {
  beforeEach(() => {
    console.log('  beforeEach:')
  })

  afterEach(() => {
    console.log('  afterEach.')
  })

  before(() => {
    console.log('before:')
  })

  after(() => {
    console.log('after.')
  })

  describe('#sum()', () => {
    it('sum() should return 0', () => {
      assert.strictEqual(hello.sum(), 0)
    })

    it('sum(1) should return 1', () => {
      assert.strictEqual(hello.sum(1), 1)
    })

    it('sum(1, 2) should return 3', () => {
      assert.strictEqual(hello.sum(1, 2), 3)
    })

    it('sum(1, 2, 3) should return 6', () => {
      assert.strictEqual(hello.sum(1, 2, 3), 6)
    })
  })

  describe('#asyncCalExpression()', () => {
    it('async Cal Expression ', async () => {
      let result = await hello.asyncCalExpression()
      assert.strictEqual(result, 15, 'result is not equal to 15')
    })
  })
})
