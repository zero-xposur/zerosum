const { connection } = require('.')

// models
connection.sync({ force: true })
