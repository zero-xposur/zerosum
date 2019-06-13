const router = require('express').Router();

router.use('/search', require('./search'));
router.use('/auth', require('./auth'));
router.use('/beer', require('./beer'));
router.use('/discover', require('./discover'));

module.exports = router;
