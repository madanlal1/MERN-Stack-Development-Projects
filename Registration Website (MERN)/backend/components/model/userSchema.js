const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.pre("save", async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 5);
        this.cpassword = await bcrypt.hash(this.cpassword, 5);
    }
    next();

})

const user = mongoose.model("USER", userSchema);
module.exports = user;