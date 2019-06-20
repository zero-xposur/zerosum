const Babeers = require('./babeers');
const Price = require('./price');
const User = require('./users');
const UserRating = require('./userRating');
const Follow = require('./follow');

User.hasMany(UserRating);
Follow.belongsTo(User, {
    as: 'follower',
    foreignKey: 'followerId',
    constraints: false
  });
Follow.belongsTo(User, {
    as: 'followee',
    foreignKey: 'followeeId',
    constraints: false
  });
UserRating.belongsTo(User);
Babeers.hasMany(UserRating);
UserRating.belongsTo(Babeers);

module.exports = {
    Babeers,
    Price,
    User,
    UserRating,
    Follow,
};
