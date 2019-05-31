var Gig = require('../models/gig');


module.exports = {
    index,
    new: newGig,
    create,
    show,
    gDelete
  
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

function gDelete(req, res) {
    console.log('hello');
    Gig.findByIdAndDelete(req.params.id, function(err, gig) {
          gig.save(function(err) {
            res.redirect('/gigs');
        });
    });
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
function addSetlist(req, res) {
    
}
