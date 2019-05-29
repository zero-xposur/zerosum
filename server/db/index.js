const { Sequelize, connection } = require('./connection')
// import models
const Beers = require('./models/beers')
const Breweries = require('./models/breweries')
const Categories = require('./models/categories')
const Styles = require('./models/styles')
const Users = require('./models/users')

// associations
Styles.belongsTo(Categories, { as: 'cat_id' })
Categories.hasMany(Styles, { as: 'cat_id' })

const sync = () => {
  return new Promise((res, rej) => {
    connection
      .sync()
      .then(() => res(connection))
      .catch(e => rej(e))
  })
}

module.exports = { connection, sync, Sequelize }
