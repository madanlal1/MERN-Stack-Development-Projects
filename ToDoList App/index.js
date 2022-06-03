const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));





let day = "";
let items = [];

// switch(today) {
//     case 0: 
//         day = "Sunday";
//         break;
    
//     case 1: 
//         day = "Monday";
//         break;
    
//     case 2: 
//         day = "Tuesday";
//         break;
    
//     case 3: 
//         day = "Wednesday";
//         break;
    
//     case 4: 
//         day = "Thursday";
//         break;
    
//     case 5: 
//         day = "Friday";
//         break;
    
//     case 6: 
//         day = "Saturday";
//         break;
    
// }


app.get('/', (req,res) => {
    // res.sendFile(__dirname + "/Home.html");

    let today1 = new Date();

    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    let today = today1.toLocaleDateString('en-US', options);

    res.render("list", {today : today, items : items});
})

app.post('/', (req,res) => {
    
    let item = req.body.newItem;

    items.push(item);

    res.redirect('/');
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})