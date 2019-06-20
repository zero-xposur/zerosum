const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const Price = require('../../db/models/price');
const UserRating = require('../../db/models/userRating');
const User = require('../../db/models/users');

// GET :/api/beer/:search
router.get('/:id', (req, res, next) => {
    return Babeers.findOne({
        where: {
            id: req.params.id,
        },
        include: [{ model: Price }, {model: UserRating, include: [{model: User}]}],
    }).then(beer => res.json(beer));
});

module.exports = router;
