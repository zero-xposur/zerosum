const { Sequelize, connection } = require('./connection');

//associations

const sync = () => {
  return new Promise((res, rej) => {
    connection
      .sync({force: false})
      .then(() => res(connection))
      .catch(e => rej(e));
  });
};

module.exports = { connection, sync};
