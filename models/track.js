var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema ({
    name: {type: String, required: true},
    artist: {type: String},
    keySignature: {type: String,
                   enum: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']  
                                    
    },
    chart: {type: String}       
});
        

module.exports = mongoose.model('Track', trackSchema);