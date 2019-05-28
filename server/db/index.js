const Sequelize = require('sequelize')

const dbName = process.env.DATABASE_URL || 'postgres://localhost:5432/zerosum'

const connection = new Sequelize(dbName, {
  //   logging: false
})

const sync = () => {
  return new Promise((res, rej) => {
    connection
      .sync()
      .then(() => res(connection))
      .catch(e => rej(e))
  })
}

module.exports = { connection, sync, Sequelize }
