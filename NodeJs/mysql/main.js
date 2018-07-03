'use strict'

const Sequelize = require('sequelize')
const config = require('./config')

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  logging: false, // default true, log sql
  freezeTableName: true,
  operatorsAliases: false
})

connection.authenticate().then(() => {
    console.log('Connection has been established successfully.')
  }).catch(err => {
    console.error('Unable to connect to the database:' + err)
  })

var Friend = connection.define('friend', {
  id: {
    type: Sequelize.INTEGER(3),
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(30),
  age: Sequelize.INTEGER(3),
  gender: Sequelize.CHAR,
  phone: Sequelize.STRING(15)
}, {
  timestamps: false
}, {
  tableName: 'friends'
})

Friend.findAll().then(friends => {
  console.log(`find ${friends.length} friends:`)
  for (let friend of friends) {
    console.log(JSON.stringify(friend))
  }
}).catch(error => {
  console.log('friends findAll error' + error)
})

