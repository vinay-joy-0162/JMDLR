const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now                   
    }
});

module.exports = User = mongoose.model("users", UserSchema);