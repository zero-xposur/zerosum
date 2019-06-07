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

// checks for score 0-5, if a user and beer exists.
// creates or updates a rating
UserRating.rate = (userId, babeerId, score) => {
    if (score > 5 || score < 0) {
        throw new Error('Score is not > 0 and < 5');
    }
    return User.findByPk(userId)
        .then(foundUser => {
            if (!foundUser) throw new Error('No User Found!');
            return Babeers.findByPk(babeerId);
        })
        .then(foundBeer => {
            if (!foundBeer) throw new Error('No Beer Found!');
            return UserRating.findOne({
                where: {
                    userId: userId,
                    babeerId: babeerId,
                },
            }).then(foundUserRating => {
                if (foundUserRating) {
                    return foundUserRating.update({
                        score: score.toFixed(),
                    });
                } else {
                    return UserRating.create({
                        score: score.toFixed(),
                        userId: userId,
                        babeerId: babeerId,
                    });
                }
            });
        })
        .catch(er => {
            // console.log(er);
            console.error(er);
            // throw new Error(er.message);
        });
};

module.exports = UserRating;
