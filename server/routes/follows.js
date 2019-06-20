const router = require('express').Router();
const {Follow, User, UserRating} = require('../../db/models');

//GET all my followers

router.get('/followers/:id', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        Follow.findAll({where: {followeeId: req.params.id}})
               .then((followers)=>{
                   return Promise.all(followers.map((follower)=>{
                       return User.findOne({where: {id: follower.followerId}},
                                            {include: [{
                                                model: UserRating
                                            }]})
                   }))
               })
                .then((users)=>{
                    console.log('in followers route', users);
                    return res.json(users);
                });
    }
});

//GET all the people I am following

router.get('/followees/:id', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        Follow.findAll({where: {followerId: req.params.id}})
        .then((followers)=>{
            return Promise.all(followers.map((follower)=>{
                return User.findOne({where: {id: follower.followeeId}},
                    {include: [{
                        model: UserRating
                    }]})
            }))
        })
         .then((users)=>{
             console.log('in followers route', users);
             return res.json(users);
         });

    }
});


// POST a follow
router.post('/:followeeId/:followerId', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        return Follow.create({followerId:req.params.followerId, followeeId: req.params.followeeId})
                .then((follow)=>res.json(follow))
    }
});

//DELETE a follow
router.delete('/:followeeId/:followerId', (req, res, next) => {
    if(req.session.user.id || req.session.userId){
        return Follow.destroy({where: {followerId:req.params.followerId, followeeId: req.params.followeeId}})
        .then(() => res.send(204))
        .catch(next);
    }
});

module.exports = router;