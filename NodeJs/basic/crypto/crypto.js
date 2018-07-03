'use strict'

// crypto模块提供通用的加密和哈希算法
const crypto = require('crypto')

// md5
const hash = crypto.createHash('md5')
// 可任意多次调用update()
// hash.update('Hello, world!')
// console.log(hash.digest('hex')) // 6cd3556deb0da54bca060b4c39479839

hash.update('Hello, nodejs!')
console.log(hash.digest('hex')) // 3f71594b0e079ecfb18ac06619bef27d


// hmac
const hmac = crypto.createHmac('sha256', 'mysecret-key')
hmac.update('Hello, world!')
hmac.update('Hello, nodejs!')
console.log(hmac.digest('hex')) // ef317493589235a34eb03a9b42e1d62e241569dcc268ab47a5d8fde0a3bd86d6


// Aes
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key)
  var crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}
function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key)
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

var data = 'Hello, this is a secret message!'
var key = 'Password!'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('Plain text: ' + data)  // Plain text: Hello, this is a secret message!
console.log('Encrypted text: ' + encrypted) // 8a944d97bdabc157a5b7a40cb180e713f901d2eb454220d6aaa1984831e17231f87799ef334e3825123658c80e0e5d0c
console.log('Decrypted text: ' + decrypted) // Decrypted text: Hello, this is a secret message!


// DH
// xiaoming's keys:
var ming = crypto.createDiffieHellman(512)
var ming_keys = ming.generateKeys()
var prime = ming.getPrime()
var generator = ming.getGenerator()
console.log('Prime: ' + prime.toString('hex'))
console.log('Generator: ' + generator.toString('hex'))

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator)
var hong_keys = hong.generateKeys()

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys)
var hong_secret = hong.computeSecret(ming_keys)

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'))
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'))

