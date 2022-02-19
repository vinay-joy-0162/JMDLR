const express = require('express');
const router = express.Router();

const Volume = require('../../models/Volume');
const User = require('../../models/User');

//post request for adding new volume
router.post("/",(req, res) => {

    // volume name
    console.log("volume");
    const username = req.body.username;
    const volume = req.body.volume;

    User.findOne( {username : username})
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found..."} );
        }

        // create a volume with a give volume name
        let vol = new Volume({
            volumeName : volume
        });

        vol.save()
        .then(() => {
            return res.json({ success : 'volume added successfully' });
        })
        .catch(err => {
            console.log(err);
        });
      
    });
});

// post request for editing volume name
router.post("/edit/",(req, res) => {

    // volume name
    console.log("edit volume");
    const username = req.body.username;
    const volume = req.body.volume;
    const updatedVolume = req.body.updatedVolume;

    User.findOne( {username : username})
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found..."} );
        }

        Volume.findOneAndUpdate({volumeName : volume}, {volumeName : updatedVolume})
        .then(() => {
            return res.json({ success : 'volume edited successfully' });
        })
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });

    });
});

// retrive all volume
router.get("/" ,(req, res) => {

    const username = req.body.username;
    User.findOne( {username : username})
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found..."} );
        }

        Volume.find({})
        .then((result) => {
            return res.json({ success : true, volumes : result });
        })
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });

    });
});


module.exports = router;