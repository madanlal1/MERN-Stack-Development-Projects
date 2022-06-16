const express = require('express');
const app = express();

const env = require("dotenv").config();

//----------------------------------------------------------------------------------------

// connecting with the mongoDB database
require('./components/db/db');

//----------------------------------------------------------------------------------------

// get routes...
app.use(express.json());
app.use(require('./components/routes/route'));

//----------------------------------------------------------------------------------------

// Middleware
// const middleware = (req,res, next) => {
//     console.log("hellow from middlware...");
//     next();
// }

//----------------------------------------------------------------------------------------

// server is listening on defined port
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port ${process.env.PORT}`)
})