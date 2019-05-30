const router = require('express').Router();
const { Babeers } = require('../db');

// GET :/api/search/:search
router.get('/:search', (req, res, next) => {
  return Babeers.search(req.params.search).then(beers => res.json(beers));
});

module.exports = router;
