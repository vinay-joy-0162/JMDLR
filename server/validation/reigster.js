const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";


    //to check input field is empty and response that field is required

    if (validator.isEmpty(data.username)) {
        errors.username = "Username Name field is required"
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
    
    if (validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required"
    }


    //to check whether input field contains space or not
    if(data.username.includes(' ')){
        errors.username = "Username does not contains space character";
    }
    if(data.email.includes(' ')){
        errors.email = "Email does not contains space character";
    }
    if(data.password.includes(' ')){
        errors.password = "Password does not contains space character";
    }
    if(data.password2.includes(' ')){
        errors.password2 = "Confirm Password does not contains space character";
    }


    //to check minimum n max character
    
    //username
    if ((!validator.isLength(data.username, { min: 3, max: 25 }))) {
        errors.username = "Username must be atleast 3 character"
    }
    
    //password
    if ((!validator.isLength(data.password, { min: 8, max: 30 }))) {
        errors.password = "Password must be at least 8 characters";
    }

    //check password n confirm password
    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    //check password ... requirements/validation
    if(data.password.includes(data.username)){
        errors.password = "Password should not contain username";
    }
    if (data.password.search(/[a-z]/) == -1) {
        errors.password = "Password Should Contain Atleast One Small Letter"
    }
    if (data.password.search(/[A-Z]/) == -1) {
        errors.password = "Password Should Contain Atleast One Capital Letter"
    }
    if (data.password.search(/[~/`/!/@/#/$/%/^/&/*]/) == -1) {
        errors.password = "Password Should Contain Atleast One Special Character"
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
};