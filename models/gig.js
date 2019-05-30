var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gigSchema = new Schema ({
    venue: {
        type: String,
    },
    instrument: {
        type: String,
        enum: ['Keys', 'Bass', 'Guitar']
    },
    city: {
        type: String,
    },
    date: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    },
    genre: {
        type: String,
        enum: ['Country', 'Rock', 'Blues', 'Soul', 'Funk', 'Jazz']

    }
});

module.exports = mongoose.model('Gig', gigSchema);