var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require("../middlewares/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect("/html/index.html")
});

router.get('/login', function(req, res) {
    res.redirect("/html/login.html");
});

//ref: https://stackoverflow.com/questions/15388206/sending-back-a-json-response-when-failing-passport-js-authentication
router.post('/login',
    passport.authenticate('local', { failWithError: true }),
    function(req, res, next) {
        // handle success
        if (req.xhr) { return res.json({ id: req.user.id }); }
        return res.redirect('/');
    },
    function(err, req, res, next) {
        // handle error
        return res.json(err);
    }
);

router.get('/logout', auth, function(req, res) {
    req.logout();
    res.redirect('/');
});


router.get('/user', auth, function(req, res) {
    res.json(req.user);
});

router.get('/manage', function(req, res) {
    res.redirect('/html/manage.html');
});

module.exports = router;