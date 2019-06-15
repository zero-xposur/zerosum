const Babeers = require('./babeers');
const Price = require('./price');
const User = require('./users');
const UserRating = require('./userRating');

User.hasMany(UserRating);
UserRating.belongsTo(User);
Babeers.hasMany(UserRating);
UserRating.belongsTo(Babeers);

module.exports = {
    Babeers,
    Price,
    User,
    UserRating,
};
