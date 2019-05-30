const { Sequelize, connection } = require('./connection');
// import models
const Users = require('./models/users');
const { Babeers } = require('./seed');

// associations

const sync = () => {
  return new Promise((res, rej) => {
    connection
      .sync()
      .then(() => res(connection))
      .catch(e => rej(e));
  });
};

module.exports = { connection, sync, Sequelize, Babeers };
