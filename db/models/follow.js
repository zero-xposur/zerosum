const { connection, Sequelize } = require('../connection');

const Follow = connection.define('follow', {
});

module.exports = Follow;
