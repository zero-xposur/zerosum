const router = require('express').Router();

router.use('/search', require('./search'));
router.use('/auth', require('./auth'));

module.exports = router;
