var mongoose = require("mongoose");

//schema setup
var issueSchema = new mongoose.Schema({
	issueName : String,
    issueDate : String,
    pdfs : [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref : "pdfs"
		}
	],
    date : {
        type: Date,
        default: Date.now                   
    }
});

module.exports = mongoose.model("Issue",issueSchema);