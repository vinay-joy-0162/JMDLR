const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

const port = process.env.PORT || 5000;

//cors setup
app.use(cors());

// const uri = process.env.ATLAS_URI;
const db = require('./config/keys.js').mongoURI;

const path = require('path');
// app.use(express.static(path.join(__dirname, '../client/build')))

// //db connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));

const users = require('./routes/api/users');
const volume = require('./routes/api/volume');

//routes
app.use('/users', users);
app.use('/volume', volume);

// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname, '..' ,'client', 'build', 'index.html'));
// });

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});