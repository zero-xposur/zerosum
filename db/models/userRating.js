const { connection } = require('../connection');
const Sequelize = require('sequelize');

const UserRating = connection.define('UserRating', {
    score: Sequelize.DOUBLE,
    appearance: Sequelize.INTEGER,
    aroma: Sequelize.INTEGER,
    mouthfeel: Sequelize.INTEGER,
    taste: Sequelize.INTEGER,
    overall: Sequelize.INTEGER,
    review: Sequelize.TEXT,
});

const Babeers = require('./babeers');
const User = require('./users');

// associations
User.hasMany(UserRating);
UserRating.belongsTo(User);
Babeers.hasMany(UserRating);

// checks for score 0-5, if a user and beer exists.
// creates or updates a rating
UserRating.rate = (userId, babeerId, ratings, review) => {
    Object.keys(ratings).map(rate => {
        if (ratings[rate] > 5 || ratings[rate] < 1) {
            throw new Error(`${rate} is not > 0 and <= 5.`);
        }
    });
    let { appearance, aroma, mouthfeel, taste, overall } = ratings;
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
                        // score: score.toFixed(),
                        appearance,
                        aroma,
                        mouthfeel,
                        taste,
                        overall,
                        review,
                    });
                } else {
                    return UserRating.create({
                        // score: score.toFixed(),
                        userId: userId,
                        babeerId: babeerId,
                        appearance,
                        aroma,
                        mouthfeel,
                        taste,
                        overall,
                        review,
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
