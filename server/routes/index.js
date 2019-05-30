const router = require('express').Router();
module.exports = router;

// :/api/search
router.use('/search', require('./search'));
