var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    }
});

module.exports = mongoose.model('Gig', gigSchema);