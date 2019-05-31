var express = require('express');
var router = express.Router();
var gigsCtrl = require('../controllers/gigs');

/* GET users listing. */
router.get('/', gigsCtrl.index);
router.get('/new', gigsCtrl.new);
router.get('/:id', gigsCtrl.show);
router.post('/', gigsCtrl.create);
router.post('/:id/setlists', gigsCtrl.create);
router.delete('/:id', gigsCtrl.gDelete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
