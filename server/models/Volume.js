const mongoose = require('mongoose');

const VolumeSchema = new mongoose.Schema({
    volumeName : {
        type : String,
        required: true
    },
    issues : {
        type : Array,
        required: false
    },
    date : {
        type: Date,
        default: Date.now                   
    }
});

module.exports = PDF = mongoose.model("volume", VolumeSchema);