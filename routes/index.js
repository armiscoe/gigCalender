var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/gigs');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
module.exports = router;

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/gigs',
    failureRedirect : '/gigs'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;