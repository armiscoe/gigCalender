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
            res.render('gigs/index', {
                 gigs,
                 user: req.user,
                 name: req.name

             });
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
    Gig.findById(req.params.id, function(err, gig) {
        res.render('gigs/show', {
          user: req.user,
          gig
        });
      });
    }
