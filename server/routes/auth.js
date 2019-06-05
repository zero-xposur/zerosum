try {
    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
        Object.assign(process.env, require('../../.env'));
    }
} catch (ex) {
    console.log(ex);
}
const router = require('express').Router();
const User = require('../../db/models/users');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const cors = require('cors');

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
        },
        function(accessToken, refreshToken, profile, done) {
            let selector = {
                where: { facebookId: profile.id, name: profile.displayName },
            };
            console.log('profile', profile);
            User.findOrCreate(selector)
                .then(user => user)
                .then(() => done(null, profile));
        }
    )
);

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

router.use(passport.initialize());
router.use(passport.session());

router.get(
    '/facebook',
    passport.authenticate('facebook', { scope: ['user_friends'] })
);

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
router.get(
    '/facebook',
    cors(),
    passport.authenticate('facebook', { scope: ['user_friends'] })
);

router.get(
    '/facebook/callback',
    cors(),
    passport.authenticate('facebook', {
        successRedirect: '/#/search',
        failureRedirect: '/login',
    })
);

module.exports = router;
