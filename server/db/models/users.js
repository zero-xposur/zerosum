const { connection, Sequelize } = require('../connection')

const User = connection.define('user', {
  name: Sequelize.TEXT
})

// add more user fields for Oauth

module.exports = User
