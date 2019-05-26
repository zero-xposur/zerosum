const { connection } = require('./db')
const csv = require('jquery-csv')
const beerCSV = require('./csv/beers')
const breweriesCSV = require('./csv/breweries')
const stylesCSV = require('./csv/styles')
const categoriesCSV = require('./csv/categories')

const beersList = csv.toObjects(beerCSV)
const breweriesList = csv.toObjects(breweriesCSV)
const stylesList = csv.toObjects(stylesCSV)
const categoriesList = csv.toObjects(categoriesCSV)

// console.log(csv.toObjects(beerCSV)[1])
console.log(Object.keys(categoriesList[1]))

// connection
//   .sync({
//     force: true
//   })
//   .then(() => {})
