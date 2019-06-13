const router = require('express').Router();
const Babeers = require('../../db/models/babeers');

// POST :/api/discover
router.post('/', (req, res, next) => {
    console.log(req.body);
    return Babeers.searchStyles(req.body)
        .then(response => res.json(response))
        .catch(next);
});

module.exports = router;
