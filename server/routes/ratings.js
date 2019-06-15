const router = require('express').Router();
const { User, UserRating } = require('../../db/models');

// GET :/api/ratings/:facebookId/:beerid
router.get('/:fbId/:beerId', (req, res, next) => {
    console.log('ratings route hit', req.params);
    return User.findOne({
        where: {
            facebookId: req.params.fbId,
        },
    })
        .then(user => {
            if (!user) {
                throw new Error('no user');
            }
            return user.get('id');
        })
        .then(userId => {
            if (typeof userId !== 'number') {
                throw new Error('no user');
            }
            return UserRating.findOne({
                where: {
                    userId,
                    babeerId: req.params.beerId,
                },
            }).then(result => {
                if (!result) {
                    throw new Error('no rating from that user for that beer');
                }
                return res.json(result);
            });
        })
        .catch(next);
});

module.exports = router;
