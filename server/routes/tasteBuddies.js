const router = require('express').Router();
const { UserRating } = require('../../db/models');

// GET :/api/tastebuddies/:userId
router.get('/:userId', (req, res, next) => {
    return UserRating.tasteBuddies(req.params.userId * 1).then(results =>
        res.json(results)
    );
});

module.exports = router;
