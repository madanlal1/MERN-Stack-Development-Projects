const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req,res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Calculation is : " + result);
})



// app.get("/contact", (req,res) => {
//     res.send("<h1>i am contact page</h1>");
// })

// app.get("/about", (req,res) => {
//     res.send("<h1>I am about page</h1>");
// })

app.listen(8080, () => {
    console.log("server is listening on port 8080.")
})