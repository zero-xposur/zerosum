let _callbackURL = '';
try {
    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
        Object.assign(process.env, require('../../.env'));
        console.log('i am local');
        _callbackURL = 'https://localhost:3000/api/auth/facebook/callback';
    } else {
        _callbackURL =
            'https://zer0sum.herokuapp.com/api/auth/facebook/callback';
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
        email: user.email,
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
            response.redirect('/#/search');
        });
    })(request, response, next);
});

router.get('/profile', function(req, res, next) {
    if (req.session.userId || req.session.user) {
        User.findByPk(req.session.userId)
            .then(me => {
                return res.json(me);
            })
            .catch(next);
    } else {
        res.status(404);
    }
});

router.post('/login', (req, res, next) => {
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
