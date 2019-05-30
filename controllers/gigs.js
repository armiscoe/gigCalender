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
    Gig.findById(req.params.id)
    .populate('song').exec(function(err, gig) {
      // Performer.find({}).where('_id').nin(movie.cast)
      Setlist.find({_id: {$nin: gig.song}})
      .exec(function(err, setlist) {
        console.log(setlist);
        res.render('gigs/show', {
          title: 'Gig Detail', gig, setlist
        });
      });
    });
  }