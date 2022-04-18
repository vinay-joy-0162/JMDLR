const express = require('express');
const router = express.Router();

const Volume = require('../../models/Volume');
const Issue = require('../../models/Issue');
const User = require('../../models/User');
const Pdf = require('../../models/Pdf');

const ObjectId = require('mongodb').ObjectID;

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
router.post('/:volume/issue', async (req, res) => {

    const username = req.body.username;
    const volume = req.params.volume;
    const issueName = req.body.issueName;
    const issueDate = req.body.issueDate;
    
    console.log(issueName + " " + issueDate);
    await User.findOne({ username : username })
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found...!" });
        }

        Volume.findOne({volumeName : volume})
        .then((result) => {
            if(!result) {
                return res.json({ volumeNotFound : "No Volume found...!" });
            }
            console.log('result : ');
            console.log(result);
            
            // check whether issue name already exists
            // if(result.issues && result.issues.length > 0){
            //     result.issues.forEach(issue => {
            //         Issue.findById(issue)
            //         .then(response => {
            //             if(response && response.issueName === issueName) {
            //                 // console.log("present");
            //                 // res.send("present");
            //                 // return;
            //                 // res.setHeader("test", 12);
            //                 console.log('issue already present');
            //                 return ;
            //                 // return res.status(200).json( { issueAlreadyExists : "Issue Already exists...!" } );
            //             }
            //         })
            //         .catch(err => {
            //             console.log(err);
            //         })
            //     })
            // }
            

            const issue = {
                issueName : issueName,
                issueDate : issueDate
            }
            Issue.create(issue, function(err, issueReturned){
                if(err){
					console.log(err);
                    return res.json({"error" : "Something went Wrong!!!"});
				}
				else{
					issueReturned.issueName = issueName;
                    issueReturned.issueDate = issueDate;
					issueReturned.save();
                    console.log(result);
					result.issues.push(issueReturned);
                    
					result.save()
                    .then(() => {
                        console.log("issue added ");
                        return res.json({"success":"Successfully added issue..."});
                    })
                    .catch(err => {
                        console.log(err);
                    })
					
				}
            });
        })  
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });
    })

});

// edit issue 
router.post("/:volume/:issue/edit/",(req, res) => {

    const username = req.body.username;
    const volume = req.params.volume;
    const issueId = req.params.issue;
    const updatedIssueName = req.body.updatedIssueName;
    const updatedIssueDate = req.body.updatedIssueDate;

    User.findOne( {username : username})
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found..."} );
        }
        Volume.findOne({volumeName : volume})
        .then(result => {
            if(!result){
                return res.json({ volumeNotFound : "No Volume found...!" });
            }

            // search in result
            result.issues.map(issue => {
                if(issue.equals(issueId)){
                    console.log("found");
                    Issue.findByIdAndUpdate(issueId, {issueName : updatedIssueName, issueDate : updatedIssueDate})
                    .then(resp => {
                        console.log(resp);
                        return res.json({successfullyUpdated : "Issue updated successfully...!"});
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            });
            console.log("re");
            if(result.issues.includes(ObjectId(issueId))){
                return res.json({ issueNotFound : "Issue not found..."})
            }
        })
        .catch(err => {
            console.log(err);
        });
    });
});

// delete issue
// give a alert to delete pdfs before deleting the issue
router.post("/:volume/:issue/delete/",(req, res) => {

    const username = req.body.username;
    const volume = req.params.volume;
    const issueId = req.params.issue;

    // User.findOne( {username : username})
    // .then(user => {
    //     if(!user){
    //         return res.json({ userNotFound : "User not found..."} );
    //     }
    //     Volume.findOne({volumeName : volume})
    //     .then(result => {
    //         if(!result){
    //             return res.json({ volumeNotFound : "No Volume found...!" });
    //         }

    //         // search in result
    //         result.issues.map(issue => {
    //             if(issue.equals(issueId)){
    //                 console.log("found");
    //                 Issue.findByIdAndUpdate(issueId, {issueName : updatedIssueName, issueDate : updatedIssueDate})
    //                 .then(resp => {
    //                     console.log(resp);
    //                     return res.json({successfullyUpdated : "Issue updated successfully...!"});
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 });
    //             }
    //         });
    //         console.log("re");
    //         if(result.issues.includes(ObjectId(issueId))){
    //             return res.json({ issueNotFound : "Issue not found..."})
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // });
});

// insert a pdf in a issue
router.post('/issue/pdf', (req, res) => {
    const pdf = req.body.pdf;
    if(pdf) {
        let pdfObj = new Pdf({
            pdf : pdf, title : "testing"
        });

        pdfObj.save()
        .then(() => {
            res.json({ success : true, message : 'successfully saved' });
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        res.json({ success : false, message : 'empty file' });
    }
});

// retrieve pdf
router.get('/issue/pdf', (req, res) => {
    Pdf.find()
    .then(pdfs => {
        return res.json({ success : true, pdf : pdfs[0] });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;