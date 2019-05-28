const { connection, Sequelize } = require('..')

const Categories = connection.define('category', {
  cat_name: Sequelize.TEXT
})

module.exports = Categories
