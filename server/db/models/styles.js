const { connection, Sequelize } = require('..')

const styles = connection.define('style', {
  cat_id: Sequelize.INTEGER,
  style_name: Sequelize.TEXT
})

// [ 'id', 'cat_id', 'style_name', 'last_mod' ]

module.exports = styles
