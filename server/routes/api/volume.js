const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

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

        Volume.find({}).populate("issues")
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

// insert a pdf in a specific issue
router.post('/issue/pdf', (req, res) => {

    const volumeName = req.body.volumeName;
    const issueId = req.body.issueId;
    let title = req.body.title;
    let author = req.body.author;
    let doi = req.body.doi;
    let pdf = req.body.pdf;

    if(pdf) {

        Volume.findOne({ volumeName : volumeName })
        .then(result => {
            if(!result) {
                return res.json({ volumeNotFound : "No Volume found...!" });
            } 
            Issue.findById(mongoose.Types.ObjectId(issueId))
            .then(issueResult => {
                if(!issueResult) {
                    return res.json({ IssueNotFound : "No Issue found...!" });
                }
                console.log(issueResult);
                
                const pdfData = {
                    pdf : pdf,
                    title : title,
                    author : author,
                    doi : doi
                }

                PDF.create(pdfData, function(err, pdfReturned){
                    if(err){
                        console.log(err);
                        return res.json({"error" : "Something went Wrong!!!"});
                    }
                    else{
                        pdfReturned.pdf = pdfData.pdf;
                        pdfReturned.title = pdfData.title;
                        pdfReturned.save();
                        console.log(pdfReturned + "test pdf returned ");
                        console.log(issueResult);
                        issueResult.pdfs.push(pdfReturned._id);
                        
                        issueResult.save()
                        .then(() => {
                            console.log("pdf added ");
                            return res.json({"success":"Successfully added pdf..."});
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                });
            }) 
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        res.json({ success : false, message : 'empty file' });
    }
});

// fetch issues in a given volume
router.get('/:volumeName', async (req, res) => {

    // const username = req.body.username;
    const volume = req.params.volumeName;
    const username = "admin";

    console.log(volume);
    await User.findOne({ username : username })
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not found...!" });
        }
        var resultArray = [];
        Volume.findOne({volumeName : volume})
        .then((result) => {
            if(!result) {
                return res.json({ volumeNotFound : "No Volume found...!" });
            }
            Volume.findById(result._id).populate("issues").exec(function(err, foundPdf){
                if(err){
                    console.log(err);
                }else{
                    console.log(foundPdf);
                    resultArray.push(foundPdf);
                    return res.json({foundPdf});
                }
            });
        })
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });
    })

});


// fetch pdfs in a given issue and given volume
router.get('/:volume/:issueId', async (req, res) => {

    const username = "admin";
    const volume = req.params.volume;
    const issueId = req.params.issueId;
    
    // console.log(issueName + " " + issueDate);
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
            Issue.findById(mongoose.Types.ObjectId(issueId)).populate("pdfs")
            .then(pdfResult => {
                return res.json({ pdfResult : pdfResult });
            })
            .catch(err => {
                console.log(err);
            }); 
        })  
        .catch(err => {
            console.log(err);
            return {"error" : err};
        });
    })
});

// retrieve pdf
router.get('/issue/pdf/:pdfId', (req, res) => {
    Pdf.findById(mongoose.Types.ObjectId(req.params.pdfId))
    .then(pdf => {
        return res.json({ success : true, pdf : pdf });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;