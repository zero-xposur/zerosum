const router = require('express').Router();
const Babeers = require('../../db/models/babeers');

// GET :/api/search/:search
router.get('/:id', (req, res, next) => {
    return Babeers.findOne({
        where: {
            id: req.params.id,
        },
    }).then(beer => res.json(beer));
    // return Babeers.search(req.params.search).then(beers => res.json(beers));
});

module.exports = router;
