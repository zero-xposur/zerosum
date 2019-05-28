const { connection, Sequelize } = require('..')

const Breweries = connection.define('brewery', {
  name: Sequelize.TEXT,
  address1: Sequelize.TEXT,
  address2: Sequelize.TEXT,
  city: Sequelize.TEXT,
  state: Sequelize.TEXT,
  code: Sequelize.TEXT,
  country: Sequelize.TEXT,
  phone: Sequelize.TEXT,
  website: Sequelize.TEXT,
  descript: Sequelize.TEXT
})

module.exports = Breweries
