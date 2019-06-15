const router = require('express').Router();
const { User, UserRating, Babeers } = require('../../db/models');

router.get('/:fbId', (req, res, next) => {
    console.log('single user ratings route hit', req.params);
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
            return UserRating.findAll({
                where: {
                    userId,
                },
                include: [{ model: Babeers }],
            }).then(result => {
                if (!result) {
                    throw new Error('no rating from that user');
                }
                return res.json(result);
            });
        })
        .catch(er => next(er));
});

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
                    res.json(null);
                    // throw new Error('no rating from that user for that beer');
                }
                return res.json(result);
            });
        })
        .catch(er => next(er));
});

module.exports = router;
