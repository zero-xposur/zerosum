const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const Price = require('../../db/models/price');

// GET :/api/beer/:search
router.get('/:id', (req, res, next) => {
    return Babeers.findOne({
        where: {
            id: req.params.id,
        },
        include: [{ model: Price }],
    }).then(beer => res.json(beer));
});

module.exports = router;
