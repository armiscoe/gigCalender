var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setlistSchema = new Schema ({
    songs: {
        type: Array
    }
})

module.exports = mongoose.model('Setlist', setlistSchema);