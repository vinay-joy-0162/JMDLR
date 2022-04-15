var mongoose = require("mongoose");

//schema setup
var issueSchema = new mongoose.Schema({
	issueName : String,
    issueDate : String
});

module.exports = mongoose.model("Issue",issueSchema);