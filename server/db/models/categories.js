const { connection, Sequelize } = require('..')

const categories = connection.define('category', {
  cat_name: Sequelize.TEXT
})

module.exports = categories
