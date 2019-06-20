const { Sequelize } = require('sequelize');

const dbName = process.env.DATABASE_URL || 'postgres://localhost:5432/zerosum';

const connection = new Sequelize(dbName, {
    // logging: false,
});

module.exports = { connection, Sequelize };
