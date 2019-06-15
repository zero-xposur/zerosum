const { Babeers, Price, User, UserRating } = require('./models');

// rate(userid, beerid,appearance, aroma, mouthfeel, taste, overall)
const ratings1 = {
    appearance: 1,
    aroma: 1,
    mouthfeel: 1,
    taste: 1,
    overall: 1,
};
const ratings2 = {
    appearance: 5,
    aroma: 2,
    mouthfeel: 3,
    taste: 4,
    overall: 5,
};
const ratings3 = {
    appearance: 1,
    aroma: 1,
    mouthfeel: 1,
    taste: 1,
    overall: 1,
};

let review1 = 'testReview';
UserRating.rate(1, 1, ratings1);
// // UserRating.rate(1, 2, ratings2);
// UserRating.rate(1, 2, ratings3, review1);

const randomRatings = async (
    userIdStart = 1,
    userIdFinish = 5,
    beerMax = 50,
    ratingsPerUser = 15
) => {
    const randomNumber = () => Math.ceil(Math.random() * 5);

    for (let userId = userIdStart; userId < userIdFinish; ++userId) {
        for (let i = 0; i < ratingsPerUser; ++i) {
            let beerId = Math.ceil(Math.random() * beerMax);
            await UserRating.rate(userId, beerId, {
                appearance: randomNumber(),
                aroma: randomNumber(),
                mouthfeel: randomNumber(),
                taste: randomNumber(),
                overall: randomNumber(),
            });
        }
    }
};
randomRatings(1, 5, 50, 20);
