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
            volumeName : volume,
            issues : []
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

// delete volume

// add issues in a given volume
router.post('/:volume/issue', (req, res) => {

    const username = req.body.username;
    const volume = req.params.volume;
    const issueName = req.body.issueName;
    const issueDate = req.body.issueDate;
    console.log(issueName + " " + issueDate);
    User.findOne({ username : username })
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found...!" });
        }

        Volume.find({volumeName : volume})
        .then((result) => {
            if(!result) {
                return res.json({ volumeNotFound : "No Volume found...!" });
            }
            console.log('result : ');
            console.log(result);

            

            if(result[0].issues){
                if(result[0].issues && (result[0].issues.length > 0)){
                    result[0].issues.foreach(issue => {
                        if(issue['issueName'] && issue['issueName'] === issueName) return res.json({ issueAlreadyPresent : 'Issue already present...!' });
                    });
                }

                if(result[0].issues.length == 0){
                    const issue = {
                        'issueName' : issueName,
                        'issueDate' : issueDate 
                    }
                    console.log(result[0].issues + ' ' + result[0].issues.length);
                    result[0].issues = issue;
                }else{
                    const issue = {
                        'issueName' : issueName,
                        'issueDate' : issueDate 
                    }
                    console.log(result[0].issues);
    
                    result.issues.push(issue);
                }
                
                
    
                Volume.findOneAndUpdate({volumeName : volume}, {issues : result.issues})
                .then(() => {
                    return res.json({ success : true, meesage : 'issue added successfully' });
                })
                .catch(err => {
                    console.log(err);
                    return {"error" : err};
                });
            }else{
                return res.json({l : null});
            }
            
        })  
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });
    })

});


module.exports = router;