const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
// const schema = require('./model/model')
const data_ = require('./model/model')

const dataModel = require('./model/model');
const res = require('express/lib/response');

const app = express();

// connect to mongoDB database
mongoose.connect("mongodb://localhost:27017/Faculty", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connecting to mongoDB server...")
});

// middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public/"));
app.set("view engine", 'ejs')
app.set("views", "./views")

// //setup EJS
// app.use(bodyParser.urlencoded({extended : false}))
// app.use(bodyParser.json());
// multer
const storage = multer.diskStorage(
    {
        destination:function(req,file,cb)
        {
            cb(null,"./public/images")
        },
        filename:function(req,file,cb)
        {
            cb(null,Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage,
}).single("image");


//routes
app.get("/", (req,res) => {
    res.render('Register');
})

app.get("/signin", (req,res) => {
    res.render('Signin');
})

// app.get('/update/:id', (req,res) => {
//     res.render('Update');
// })

app.post('/insertData',upload,(req,res)=>{

        const {fname,lname,email} = req.body
        const image = req.file.filename
     
    
        const user = new data_({
            fname:fname,
            lname:lname,
            email:email,
            image:image
        })
        user.save((err)=>{
            if(err){
                res.send({message:err.message})
            }
            else{
                res.redirect('/showdata');
            }
        })
    
     console.log(req.body)
     console.log(req.file.filename)    
})

app.get('/showdata', (req,res) => {

    data_.find((err,result) => {
        if (!err) {
            res.render("Data", {
                data: result
            });
            console.log(result)
        } else {
            console.log('Failed to retrieve data: ' + err);
        }

    })
})

app.get('/delete/:id', (req,res)=>{
    const {id} = req.params
    data_.findByIdAndRemove(id).exec();
    res.redirect("/showdata");
}) 
    
app.get('/retdata/:id',(req,res)=>{

    console.log("afjafajflaflafjlsfjldone")
    const {id} = req.params
    // const value = await user_data.findById(id)
    // res.render('search',{title:"Home",users:value,})
    data_.findById(id).exec((err,users)=>{
        if(err)
        {
            res.send({message:"error"})
        }
        else{
            res.render('Update',{title:"Searching",users:users,})
        }
    })

})
// update api
app.post('/update/:id',upload, async (req,res)=>{
    
    const {id} = req.params
    const {fname,lname,email} = req.body
    const image = req.file.filename
     
    await data_.findByIdAndUpdate(id,{
        $set:{
            fname:fname,
            lname:lname,
            email:email,
            image:image
        }
    })

    res.redirect('/showdata');
})
    

// server configuration at port 3000
app.listen(3000, () => {
    console.log("server is listening at port 3000...")
})