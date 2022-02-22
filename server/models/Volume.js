const mongoose = require('mongoose');

const VolumeSchema = new mongoose.Schema({
    volumeName : {
        type : String,
        required: true
    }
});

module.exports = PDF = mongoose.model("volume", VolumeSchema);