const { connection, Sequelize } = require('../connection')

const Styles = connection.define('style', {
  // cat_id: Sequelize.INTEGER,
  style_name: Sequelize.TEXT
})

module.exports = Styles
