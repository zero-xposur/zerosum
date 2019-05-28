const { connection, Sequelize } = require('../connection')

const Beers = connection.define('beer', {
  // brewery_id: Sequelize.INTEGER,
  name: Sequelize.TEXT,
  // cat_id: Sequelize.INTEGER,
  // style_id: Sequelize.INTEGER,
  abv: Sequelize.DOUBLE,
  descript: Sequelize.TEXT
})

module.exports = Beers
