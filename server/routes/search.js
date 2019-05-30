const router = require('express').Router();
const { BaBeer } = require('../db');

// GET :/api/search/:search
router.get('/:search', (req, res, next) => {
  return BaBeer.search(req.params.search).then(beers => res.json(beers));
});

module.exports = router;
