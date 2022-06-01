const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");

let today = new Date().getDay();

let day = "";

switch(today) {
    case 0: 
        day = "Sunday";
        break;
    
    case 1: 
        day = "Monday";
        break;
    
    case 2: 
        day = "Tuesday";
        break;
    
    case 3: 
        day = "Wednesday";
        break;
    
    case 4: 
        day = "Thursday";
        break;
    
    case 5: 
        day = "Friday";
        break;
    
    case 6: 
        day = "Saturday";
        break;
    
}


app.get('/', (req,res) => {
    // res.sendFile(__dirname + "/Home.html");
    res.render("list", {day : day});
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})