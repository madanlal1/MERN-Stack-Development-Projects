const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required: true
    }    
})

const user = mongoose.model("USER", userSchema);
module.exports = user;