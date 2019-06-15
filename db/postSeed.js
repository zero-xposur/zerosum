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
