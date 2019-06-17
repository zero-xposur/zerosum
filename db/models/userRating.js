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

// // associations
// User.hasMany(UserRating);
// UserRating.belongsTo(User);
// Babeers.hasMany(UserRating);
// UserRating.belongsTo(Babeers);

// can only review if userRating for that beer & user exists.
UserRating.review = (userId, babeerId, review) => {};

// sequelize where array
// Tag.findAll({
//     where: {
//         id: [1,2,3,4]
//     }
// }).then(...)

// sequelize operators
const seqOp = Sequelize.Op;

const correlate = (a, b) => 1 - Math.abs((a - b) / 4);
const correlation = (a, b) => {
    const result = [];
    result.push(correlate(a.appearance, b.appearance));
    result.push(correlate(a.aroma, b.aroma));
    result.push(correlate(a.mouthfeel, b.mouthfeel));
    result.push(correlate(a.taste, b.taste));
    result.push(correlate(a.overall, b.overall));
    return result.reduce((accu, current) => accu + current, 0) / 5;
};

UserRating.findMyRatedBeers = userId => {
    // returns [{babeerId, score}]
    return (
        // check if userid exists
        User.findByPk(userId)
            .then(user => {
                if (!user) throw new Error('Rated beers: No User Found!');
                return user;
            })
            // find all the beers i have rated, then find all other users
            .then(user => {
                // returns an array of objects {beerid, score}
                return UserRating.findAll({
                    where: {
                        userId: user.id,
                    },
                    include: [{ model: Babeers }],
                    raw: true,
                });
            })
    );
};

UserRating.userCorrelation = async (ratedBeerList, userId) => {
    // ratedBeerList:[{babeerId:number, score:number}, ...{}], userid: number
    // returns correlation & precision
    // find list of rated beer by user, filter for ones that exist in ratedBeerList, find correlation for each. average all values
    let userRatedBeers = await UserRating.findMyRatedBeers(userId);

    // filter ratedBeerList for ones that exist in ratedBeerList

    const ratedBeerListBeersOnly = ratedBeerList.map(beer => beer.babeerId);

    // filter userRatedBeers for ones that exist in ratedBeerList
    userRatedBeers = userRatedBeers.filter(beer => {
        return ratedBeerListBeersOnly.includes(beer.babeerId);
    });

    // find correlation for each userRatedBeer & ratedBeerList
    const correlatedList = userRatedBeers.reduce((accu, current) => {
        accu.push({
            babeerId: current.babeerId,
            correlation: correlation(
                current,
                ratedBeerList.find(beer => {
                    return beer.babeerId === current.babeerId;
                })
            ),
        });
        return accu;
    }, []);

    const result = parseFloat(
        (
            correlatedList.reduce(
                (accu, current) => accu + current.correlation,
                0
            ) / correlatedList.length
        ).toFixed(4)
    );
    return { result: result, sameBeerCount: correlatedList.length };
};

UserRating.bestBeers = async (myUserId, theirUserId, bestBeerCount = 3) => {
    // returns the top bestBeerCount of beers from theirUserId beer list not ony myUserId beer list
    const myBeerList = await UserRating.findMyRatedBeers(myUserId);
    const theirBeerList = await UserRating.findMyRatedBeers(theirUserId);
    const result = theirBeerList.filter(
        theirBeer =>
            !myBeerList.map(beer => beer.babeerId).includes(theirBeer.babeerId)
    );
    // sort by highest score
    result.sort((a, b) => b.score - a.score);
    // only send best N beers
    while (result.length > bestBeerCount) result.pop();
    return result;
};

UserRating.tasteBuddies = userId => {
    return (
        UserRating.findMyRatedBeers(userId)
            // find all other users base off of beers i have rated
            .then(async myRatedBeerList => {
                // return original user's rated beer list and a list of users that have rated beers that i rated
                return {
                    myRatedBeerList,
                    usersList: await UserRating.findAll({
                        where: {
                            babeerId: {
                                [seqOp.or]: myRatedBeerList.map(
                                    result => result.babeerId
                                ),
                            },
                        },
                        attributes: ['userId'],
                        raw: true,
                    }).map(result => result.userId),
                };
            })

            .then(({ myRatedBeerList, usersList }) => {
                // returns a unique list of users not including self that have rated the beers i rated
                return {
                    myRatedBeerList,
                    uniqueUserList: usersList.reduce((accu, current) => {
                        if (!accu.includes(current) && current !== userId) {
                            accu.push(current);
                        }
                        return accu;
                    }, []),
                };
            })

            // now need to compute correlation for each user
            // find the ratedbeerlist of each user, filter against original user's ratedbeerlist.
            .then(({ myRatedBeerList, uniqueUserList }) => {
                // expect result to be userlist:[{userid:1, correlation:value},{},{}]

                return Promise.all(
                    uniqueUserList.map(async otherUserId => {
                        let correlated = await UserRating.userCorrelation(
                            myRatedBeerList,
                            otherUserId
                        );
                        let bestUntriedBeers = await UserRating.bestBeers(
                            userId,
                            otherUserId
                        );
                        return {
                            userId: otherUserId,
                            correlation: correlated.result,
                            precision: correlated.sameBeerCount,
                            bestBeers: bestUntriedBeers,
                        };
                    })
                    // .sort((a, b) => b.correlation - a.correlation)
                );
            })
            .then(result =>
                // sort results by correlation
                result.sort((a, b) => b.correlation - a.correlation)
            )
            .catch(er => {
                console.error(er);
            })
    );
};
// Tag.findAll({
//     where: {
//         id: [1,2,3,4]
//     }
// }).then(...)

// checks for score 0-5, if a user and beer exists.
// creates or updates a rating
UserRating.rate = (userId, babeerId, ratings) => {
    Object.keys(ratings).map(rate => {
        if (ratings[rate] > 5 || ratings[rate] < 0) {
            throw new Error(`${rate} is not >= 0 and <= 5.`);
        }
    });
    let { appearance, aroma, mouthfeel, taste, overall } = ratings;
    return (
        User.findByPk(userId)
            //look for user
            .then(foundUser => {
                if (!foundUser) throw new Error('No User Found!');
                return Babeers.findByPk(babeerId);
            })
            .then(foundBeer => {
                // look for beer, make sure it exists.
                if (!foundBeer) throw new Error('No Beer Found!');
                return UserRating.findOne({
                    // look for a userrating for that beer & user
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
                        return (
                            foundBeer
                                // update the beer's rating
                                .update({
                                    score: parseFloat(newScore.toFixed(2)),
                                })
                                .then(() =>
                                    //update the userrating also
                                    foundUserRating.update({
                                        score: avgRating,
                                        appearance,
                                        aroma,
                                        mouthfeel,
                                        taste,
                                        overall,
                                    })
                                )
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
            })
    );
};

module.exports = UserRating;
