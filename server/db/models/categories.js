const { connection, Sequelize } = require('../connection')

const Categories = connection.define('category', {
  cat_name: Sequelize.TEXT
})

module.exports = Categories
