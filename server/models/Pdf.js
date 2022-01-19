const mongoose = require('mongoose');

const PDFSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    pdf : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now                   
    }
});

module.exports = PDF = mongoose.model("pdfs", PDFSchema);