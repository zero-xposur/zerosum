const { connection, Sequelize } = require('../db')

const user = connection.define('user', {
  name: Sequelize.TEXT
})

module.exports = user
