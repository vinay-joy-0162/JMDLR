const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//User model
const User = require('../../models/User');
const Pdf = require('../../models/Pdf');

//input validations
const validateRegsiterInput = require('../../validation/reigster');
const validateLoginInput = require('../../validation/login');

//post request for adding new user
router.post('/register', (req, res) => {

    //check valiadation
    const { errors, isValid } = validateRegsiterInput(req.body);

    if(!isValid){
        return res.json({ errors : errors });
    }

    //take parameters from requests body
    const { email, username, password } = req.body;

    // check user already exists
    //if exist send response 'Field already exists
    //else add that user to db

    User.findOne({ username : username })
    .then(user => {
        if(user){
            return res.json({ alreadyExists : 'Username already exists.'});
        }else{
            //register 
            let user = new User({
                username : username,
                email : email,
                password : password
            });

            //hashing password before saving to db
            const hash = crypto.createHash('sha256').update(user.password).digest('base64');
            user.password = hash;

            user.save()
            .then(() => {
                console.log("there");
                return res.json({ success : 'User registered successfully' });
            })
            .catch(err => {
                console.log(err);
            });
        } 
    })
});

router.post("/login",(req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.json({errors : errors});
    }
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne( {username : username})
    .then(user => {
        if(!user){
            return res.json({ userNotFound : "User not register..."} );
        }

        //check password
        //encrypt password
        const hash = crypto.createHash('sha256').update(password).digest('base64');
        if(hash === user.password){

            //create jwt payload
            const payload = {
                username: user.username
            };

            //signIn token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );

        } else {
            return res.json( {passwordincorrect: "Incorrect Password " });
        }
      
    });
});

router.get('/profile' ,(req, res) => {
    const username = req.username;
    User.findOne({ username : username })
        .then(user => {
            const userDetails = {
                email : user.email,
                username : username
            }
            return res.json({ userDetails : userDetails });
        })
        .catch(err => {
            return res.json({ userNotFound : 'Something went wrong... ' })
    })
});

router.post('/forgot-password', (req, res) => {
    const username = req.body.username;

    // send password reset link to user via mail with valid jwt token
    User.findOne( {username} )
    .then(user => {
        if(!user){
            return res.json({ emailNotFound : "Username Not Found.. !!!"} );
        }
        
        //creating token
        const token = jwt.sign({ username : username }, keys.JWT_ACC_ACTIVATE,  {expiresIn : '3600m'});

        //sending reset password link
        sendResetPasswordLinkEmail(email, token, res);
   
    })
    .catch(err => {
        console.log(err.message);
    })
});

//================
//reset-password [GET]
router.post('/reset-password/:id', (req, res) => {
    const tokenId = req.params.id;
    const password = req.body.password;

    if(tokenId){
        jwt.verify(tokenId, keys.JWT_ACC_ACTIVATE, (err, decodedToken) => {
            if(err){
                res.json({ error : 'Incorrect token or token expired...'})
            }
            const { email } = decodedToken;

            const hash = crypto.createHash('sha256').update(password).digest('base64');
            User.updateOne({ email : email }, { password: hash }, {new: true})
            .then(user => {
                if(user){
                    res.json({ success : true }); 
                }else{
                    res.json({ success : false });
                }
            })
            .catch(err => {
                res.json({ success : false });
                console.log(err);
            });
        });
    }
});

router.post('/pdf', (req, res) => {
    const pdf = req.body.pdf;

    if(pdf){
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
module.exports = router;