const router = require('express').Router();
const Babeers = require('../../db/models/babeers');

// GET :/api/beer/:search
router.get('/:id', (req, res, next) => {
    return Babeers.findOne({
        where: {
            id: req.params.id,
        },
    }).then(beer => res.json(beer));
});

module.exports = router;
