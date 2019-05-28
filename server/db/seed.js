const { connection } = require('.')
// csv
const csv = require('jquery-csv')
const beerCSV = require('./csv/beers')
const breweriesCSV = require('./csv/breweries')
const stylesCSV = require('./csv/styles')
const categoriesCSV = require('./csv/categories')
// models
const Users = require('./models/users')
const Beers = require('./models/beers')
const Breweries = require('./models/breweries')
const Categories = require('./models/categories')
const Styles = require('./models/styles')
// csv parsing
const beersList = csv.toObjects(beerCSV)
const breweriesList = csv.toObjects(breweriesCSV)
const stylesList = csv.toObjects(stylesCSV)
const categoriesList = csv.toObjects(categoriesCSV)

connection
  .sync({
    force: true
  })
  .then(() => {
    return Users.create({
      name: 'testUser1'
    })
  })
  .then(() => {
    return Promise.all(
      beersList.map(beer =>
        Beers.create({
          id: beer.id,
          brewery_id: beer.brewery_id,
          name: beer.name,
          cat_id: beer.cat_id,
          style_id: beer.style_id,
          abv: beer.abv,
          descript: beer.descript
        })
      )
    )
  })
  .then(() => {
    return Promise.all(
      breweriesList.map(brewery =>
        Breweries.create({
          name: brewery.name,
          address1: brewery.address1,
          address2: brewery.address2,
          city: brewery.city,
          state: brewery.state,
          code: brewery.code,
          country: brewery.country,
          phone: brewery.phone,
          website: brewery.website,
          descript: brewery.descript
        })
      )
    )
  })
  .then(() => {
    return Promise.all(
      categoriesList.map(category =>
        Categories.create({
          cat_name: category.cat_name
        })
      )
    )
  })
  .then(() => {
    return Promise.all(
      stylesList.map(style =>
        Styles.create({
          cat_id: style.cat_id,
          style_name: style.style_name
        })
      )
    )
  })
  .then(() => {
    return Beers.findAll({
      where: {
        id: 1
      },
      includes: [{ model: Breweries }]
    })
  })
  .then(result => {
    result.map(t => console.log(t.get()))
  })
