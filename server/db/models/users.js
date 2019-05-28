const { connection, Sequelize } = require('..')

const User = connection.define('user', {
  name: Sequelize.TEXT
})

module.exports = User
