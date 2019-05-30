var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Gig = require('../models/gig');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
    function(accessToken, refreshToken, profile, cb) {
        Gig.findOne({ 'googleId': profile.id }, function(err, student) {
          if (err) return cb(err);
          if (gig) {
            return cb(null, gig);
          } else {
            // we have a new gig via OAuth!
            var newGig = new Gig({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id
            });
            newGig.save(function(err) {
              if (err) return cb(err);
              return cb(null, newGig);
            });
          }
        });
      }
    ));

 passport.serializeUser(function(gig, done) {
     done(null, gig.id);
 });

 passport.deserializeUser(function(id, done) {
    Gig.findById(id, function(err, gig) {
      done(err, gig);
    });
  });