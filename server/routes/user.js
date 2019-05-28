const express = require('express');
const db = require('../db');
const User = db.User;

const router = express.Router();

router.get('/session', (req, res, next) => {
    if (req.session.userId) {
        User.findByPk(req.session.userId)
            .then(me => {
                res.json(me)
            })
            .catch(next);
    }
    else res.status(404);
});

router.delete('/logout', (req, res, next) => {
    req.session.destroy();
    res.status(204).end();
});

router.delete('/:userId', (req, res, next) => {
    User.findOne({where: {id: req.session.userId}})
    .then((user)=>{
        if(user.role==='admin'){
            User.destroy({where: {id: req.params.userId}})
            .then(()=>res.status(204).end())
        }
    })
    .catch(next);
});

router.post('/login', (req, res, next) => {
    User.create(req.body)
        .then((user) => {
            req.session.userId = user.id;
            res.json(user);
        })
        .catch(next);
});

router.put('/login', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(user => {
        if (user) {
            req.session.userId = user.id;
            res.json(user);
        }
        else {
            const err = new Error('Incorrect user/password!');
            err.status = 401;
            next(err);
        }
    })
    .catch(next);
    
});

router.put('/:userId', (req, res, next) => {
    User.findOne({where: {id: req.session.userId}})
    .then((user)=>{
        if(user.role ==='admin'){
            User.update(req.body, {returning: true, where: {id: req.params.userId}})
            .then(([updatedRows, [updatedUser]])=>res.json(updatedUser))
        }
    })
    .catch(next);
})

module.exports = router;
