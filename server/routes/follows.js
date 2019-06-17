const router = require('express').Router();
const Follow = require('../../db/models/follow');

//GET all my followers

router.get('/followers/:id', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        Follow.findAll({where: {followeeId: req.params.id}})
        .then((users)=>res.json(users));
    }
});

//GET all the people I am following

router.get('/followees/:id', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        Follow.findAll({where: {followerId: req.params.id}})
        .then((users)=>res.json(users));
    }
});


// POST a follow
router.post('/:followeeId/:followerId', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        return Follow.create({followerId:req.params.followerId, followeeId: req.params.followeeId})
                .then((follow)=>res.json(follow))
    }
});

module.exports = router;