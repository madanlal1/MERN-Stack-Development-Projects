const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then((req,res) => {
    
    console.log("Database Connected Successfully");

}).catch(err => {

    console.log(err);

})