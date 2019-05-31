var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setlistSchema = new Schema ({
    song: {type: String, required: true},
    artist: {type: String},
    keySignature: {type: String,
                   enum: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']  
                                    
    }})

var gigSchema = new Schema ({
    venue: {
        type: String
    },
    band: {
        type: String
    },
    instrument: {
        type: String,
        enum: ['Keys', 'Bass', 'Guitar']
    },
    city: {
        type: String
    },
    date: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    },
    setlist: [setlistSchema]
    

});

module.exports = mongoose.model('Gig', gigSchema);
