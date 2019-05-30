const { connection, Sequelize } = require('../connection')

const Userratings = connection.define('userrating', {
  // userid association
  // beerid association
  score: Sequelize.TEXT
})

module.exports = Userratings
