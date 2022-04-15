const mongoose = require('mongoose');

const VolumeSchema = new mongoose.Schema({
    volumeName : {
        type : String,
        required: true
    },
	issues : [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref : "Issue"
		}
	],
    date : {
        type: Date,
        default: Date.now                   
    }
});

module.exports = mongoose.model("volume", VolumeSchema);