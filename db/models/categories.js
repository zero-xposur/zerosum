const { connection, Sequelize } = require('../db')

const categories = connection.define('category', {
  cat_name: Sequelize.TEXT
})

module.exports = categories
