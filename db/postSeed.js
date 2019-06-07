const { Babeers, Price, User, UserRating } = require('./models');

// rate(userid, beerid,rating)
UserRating.rate(1, 2, 3);
// UserRating.rate(0, 2, 4);
// UserRating.rate(1, 2, 6);
