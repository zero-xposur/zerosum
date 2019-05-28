const { Sequelize, connection } = require('./connection')

// associations

const sync = () => {
  return new Promise((res, rej) => {
    connection
      .sync()
      .then(() => res(connection))
      .catch(e => rej(e))
  })
}

module.exports = { connection, sync, Sequelize }
