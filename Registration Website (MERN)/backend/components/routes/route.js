const express = require('express');
const router = express.Router();
require('../db/db');
const User = require('../model/userSchema');

router.get('/', (req,res) => {
    res.send("Hellow from Home...")
})

router.post('/register', (req,res) => {

        //  destructuring object...
        const {name, email, phone, password, cpassword} = req.body;


        //  checking all fields exists...
        if(!name || !email || !phone || !password || !cpassword) {
            return res.status(422).json({error : "Kindly fill all fields"})
        }

        //  finding if user already exist...
        User.findOne({email : email}).then( (userExist) => {
            if(userExist) {

                return res.status(422).json({error : "email is already exist"})
            }
            else {

                //  creating new user...
                const user = new User({name, email, phone, password, cpassword});


                //  saving data in database collection named "user"...
                user.save().then(() => {
                    res.status(201).json({message: "User registered successfully..."})
                }).catch (() => {
                    res.status(500).json({error: "Failed to register"})
                })

            }
        }).catch(err => console.log(err))
})

router.post('/signin', async (req,res) => {

    try{
        const {email, password} = req.body;
    
        if(!email || !password) {
            return res.status(400).json({error: "Email or Password missing..."});
        }

        const response = await User.findOne({email: email});

        if(response) {
            res.status(200).json({message: "User login successfully"});    
            console.log(req.body);    
        } else {
            res.status(400).json({error: "invalid data!"})
        }

    } catch(err) {
        console.log(err);
    } 


})

module.exports = router;