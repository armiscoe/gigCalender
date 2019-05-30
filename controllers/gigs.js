var Gig = require('../models/gig');
var Setlist = require('../models/setlist');

module.exports = {
    index,
    new: newGig,
    create,
    show
}

function index(req, res) {
    Gig.find({})
        .sort({ date: 'asc' })
        .exec(function(err, gigs) {
            res.render('gigs/index', { title: 'All Gigs', gigs });
        });
}

function newGig(req, res) {
    res.render('gigs/new');
}

function create(req, res) {
    var gig = new Gig(req.body);
    gig.save(function(err) {

        if(err) return res.render('gigs/new');
        console.log(gig);

        res.redirect('/gigs/new');
    });
}

function show(req, res) {
    Gig.findById(req.params.id).exec(function(err, gig) {
      Setlist.find({ gigs: gigs._id }, function(err, gigs) {
        res.render('gigs/show', {
          title: 'Gig Details',
          gig,
          gigs
        });
      });
    });
  }