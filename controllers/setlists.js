var Gig = require('../models/gig');

function create(req, res) {
    Gig.findById(req.params.id, function(err, gig) {
        gig.destinations.push(req.body);
        gig.save(function(err) {
            res.redirect(`/gigs/${gig._id}`);
        });
        console.log(gig);
    });
}
module.exports = {
    create
};