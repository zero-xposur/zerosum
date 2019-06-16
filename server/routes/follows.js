const router = require('express').Router();
const Follow = require('../../db/models/follow');

//GET all my followers

router.get('/followers', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        let followee=req.session.userId?req.session.userId:req.session.user.id;
        Follow.findAll({where: {followeeId: followee}})
        .then((users)=>res.json(users));
    }
});

//GET all the people I am following

router.get('/followee', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        let follower=req.session.userId?req.session.userId:req.session.user.id;
        Follow.findAll({where: {followerId: follower}})
        .then((users)=>res.json(users));
    }
});


// POST a follow
router.post('/:followeeId', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        let follower=req.session.userId?req.session.userId:req.session.user.id;
        return Follow.create({followerId:follower, followeeId: req.params.followeeId})
                .then((follow)=>res.json(follow))
    }
});

module.exports = router;