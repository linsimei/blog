var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require("../middlewares/auth");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect("/html/index.html")
});

router.get('/login', function (req, res) {
  res.redirect("/html/login.html");
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
  res.redirect('/html/user.html');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


router.get('/user',auth, function (req, res) {
  res.redirect('/html/user.html');
});


module.exports = router;
