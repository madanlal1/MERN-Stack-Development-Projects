const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Hellow from Home...")
    console.log('hi');
})

router.post('/register', (req,res) => {
    res.send(req.body);
    console.log(req.body);
})

module.exports = router;