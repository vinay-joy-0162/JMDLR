const mongoose = require('mongoose');

const VolumeSchema = new mongoose.Schema({
    volumeName : {
        type : String,
        unique: true,
        required: true
    },
	issues : [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref : "Issue"
		}
	],
    date : {
        type : String               
    }
});

module.exports = mongoose.model("volume", VolumeSchema);