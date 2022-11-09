const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PeopleDB", {useNewUrlParser: true});

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("people", peopleSchema);

const people = new People({
     name : "Madan",
     age : 20
})
