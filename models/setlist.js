var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setlistSchema = new Schema ({
    songs: {
        type: Array
    },
    gig: [{type: Schema.Types.ObjectId, ref: 'Gig'}]
})

module.exports = mongoose.model('Setlist', setlistSchema);