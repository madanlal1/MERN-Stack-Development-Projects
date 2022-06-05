const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

let items = [];
let workItems = [];
let today = date();

app.post('/', (req,res) => {
    
    let item = req.body.newItem;

    if(req.body.list === 'Work ToDo...') {

        workItems.push(item);
        res.redirect('/work');        
    }
    else {
        
        items.push(item);
        res.redirect('/');
    }
})


app.get('/', (req,res) => {
    // res.sendFile(__dirname + "/Home.html");

    res.render("list", {today : today, title : "ToDo List...", items : items});
})

app.get('/work', (req,res) => {

    res.render("list", {today : today, title : "Work ToDo...", items : workItems});
})



app.listen(3000, () => {
    console.log('server is running at port 3000');
})