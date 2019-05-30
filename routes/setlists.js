var express = require('express');
var router = express.Router();
var setlistsCtrl = require('../controllers/setlists')

router.post('/gigs/:id/setlists', setlistsCtrl.create);

module.exports = router;