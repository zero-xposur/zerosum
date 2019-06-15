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

// can only review if userRating for that beer & user exists.
UserRating.review = (userId, babeerId, review) => {};

// checks for score 0-5, if a user and beer exists.
// creates or updates a rating
UserRating.rate = (userId, babeerId, ratings) => {
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
                    // update rating
                    // find rating sum, remove old average, add new average. re average.
                    const avgRating =
                        Object.values(ratings).reduce(
                            (accu, current) => accu + current,
                            0
                        ) / 5;
                    const oldAverageRating =
                        (foundUserRating.appearance +
                            foundUserRating.aroma +
                            foundUserRating.mouthfeel +
                            foundUserRating.taste +
                            foundUserRating.overall) /
                        5;
                    const newScore =
                        (foundBeer.score * foundBeer.ratings -
                            oldAverageRating +
                            avgRating) /
                        foundBeer.ratings;
                    console.log(
                        `old avg: ${oldAverageRating}, newScore: ${newScore}, avgRating: ${avgRating}`
                    );
                    return foundBeer
                        .update({
                            score: newScore.toFixed(2),
                        })
                        .then(() =>
                            foundUserRating.update({
                                score: avgRating,
                                appearance,
                                aroma,
                                mouthfeel,
                                taste,
                                overall,
                            })
                        );
                } else {
                    // create rating
                    // factor in new average to current babeer.score
                    console.log(
                        'foundbeer :',
                        foundBeer.ratings,
                        foundBeer.score
                    );

                    const avgRating =
                        Object.values(ratings).reduce(
                            (accu, current) => accu + current,
                            0
                        ) / 5;

                    const newRatings = foundBeer.ratings + 1;
                    const newScore =
                        (foundBeer.score * foundBeer.ratings + avgRating) /
                        newRatings;
                    // console.log(newScore);
                    // old babbeerid1, score 3.8, ratings 3
                    // new score should be 3.3, ratings 4. userRating score = 1.8 average
                    return foundBeer
                        .update({
                            ratings: newRatings,
                            score: newScore.toFixed(2),
                        })
                        .then(() =>
                            UserRating.create({
                                score: avgRating.toFixed(2),
                                userId: userId,
                                babeerId: babeerId,
                                appearance,
                                aroma,
                                mouthfeel,
                                taste,
                                overall,
                            })
                        );
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
