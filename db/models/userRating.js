const { connection } = require('../connection');
const Sequelize = require('sequelize');

const UserRating = connection.define('UserRating', {
    score: Sequelize.DOUBLE,
});

const Babeers = require('./babeers');
const User = require('./users');

// associations
User.hasMany(UserRating);
UserRating.belongsTo(User);
Babeers.hasMany(UserRating);

UserRating.rate = (userId, babeerId, score) => {
    return UserRating.create({
        score: score.toFixed(),
        userId: userId,
        babeerId: babeerId,
    });
};

module.exports = UserRating;
