var express = require('express');
var router = express.Router();
var gigsCtrl = require('../controllers/gigs');

/* GET users listing. */
router.get('/', gigsCtrl.index);
router.get('/new', gigsCtrl.new);
router.get('/:id', gigsCtrl.show);
router.post('/', gigsCtrl.create);

module.exports = router;
