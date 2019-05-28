const { connection, Sequelize } = require('..')

const User = connection.define('user', {
  name: Sequelize.TEXT
})

// add more user fields for Oauth

module.exports = User
