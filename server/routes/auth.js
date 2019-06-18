const { Op } = require('sequelize')

let _callbackURL = '';
try {
    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
        Object.assign(process.env, require('../../.env'));
        console.log('i am local');
        _callbackURL = 'https://localhost:3000/api/auth/facebook/callback';
    } else {
        _callbackURL =
            'https://beer-friends.herokuapp.com/api/auth/facebook/callback';
    }
} catch (ex) {
    console.log(ex);
}
const router = require('express').Router();
const User = require('../../db/models/users');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: _callbackURL,
        },
        function(accessToken, refreshToken, profile, done) {
            let selector = {
                where: { facebookId: profile.id, name: profile.displayName },
            };
            User.findOrCreate(selector)
                .then(user => user)
                .then(() => done(null, profile));
        }
    )
);

passport.serializeUser((user, done) => {
    var sessionUser = {
        name: user.name,
        // email: user.email,
        facebookId: user.id,
    };
    done(null, sessionUser);
});

passport.deserializeUser((sessionUser, done) => {
    // The sessionUser object is different from the user mongoose collection
    // it's actually req.session.passport.user and comes from the session collection
    done(null, sessionUser);
});

router.use(passport.initialize());
router.use(passport.session());

router.get(
    '/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
);

router.get('/facebook/callback', function(request, response, next) {
    passport.authenticate('facebook', function(err, user, info) {
        if (err) {
            return next(err);
        }
        // Successful authentication, redirect home.
        if (!user) {
            response.redirect('/#/login');
        }
        request.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            request.session.user = user;
            console.log(
                'in fb login-what is the req.session',
                request.session.user
            );
            response.redirect('/#/search');
        });
    })(request, response, next);
});

router.get('/profile', function(req, res, next) {
    console.log('in profile route');
    if (req.session.userId) {
        console.log('in profile route native login');
        User.findByPk(req.session.userId)
            .then(me => {
                delete me.password;
                return res.json(me);
            })
            .catch(next);
    } else if (req.session.user) {
        console.log('in profile route- fb else if');
        User.findOne({ where: { facebookId: req.session.user.id } })
            .then(me => {
                delete me.password;
                return res.json(me);
            })
            .catch(next);
    } else {
        res.status(404);
    }
});

router.get('/search/:query', (req, res, next) => {
    console.log('test0')
    if(req.session.user.id || req.session.userId){
        console.log('test1')

        return User.findAll({ where: {[Op.or]: [{ name: { [Op.iLike]: `%${req.params.query}%` }}, 
                                               { email: { [Op.iLike]: `%${req.params.query}%` }}]}})
                .then((users)=>{
                    if(users.length>0){
                        console.log('users from express route',users)
                        return res.json(users)
                    }
                    else{
                        return res.json('No user found with this name. Send them a link to beer friends!')
                    }
                })
    }
})

router.post('/login', (req, res, next) => {
    console.log(req.body);
    User.create(req.body)
        .then(user => {
            req.session.userId = user.id;
            res.json(user);
        })
        .catch(next);
});

router.put('/login', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    })
        .then(user => {
            if (user) {
                req.session.userId = user.id;
                res.json(user);
            } else {
                const err = new Error('Incorrect user/password!');
                err.status = 401;
                next(err);
            }
        })
        .catch(next);
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    res.status(204).end();
});

module.exports = router;
