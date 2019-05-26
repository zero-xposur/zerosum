const { connection, Sequelize } = require('../db')

const beers = connection.define('beer', {
  brewery_id: Sequelize.INTEGER,
  name: Sequelize.TEXT,
  cat_id: Sequelize.INTEGER,
  style_id: Sequelize.INTEGER,
  abv: Sequelize.DOUBLE,
  descript: Sequelize.TEXT
})

module.exports = beers
