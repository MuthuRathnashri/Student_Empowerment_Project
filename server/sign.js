//sign.js



// const express = require('express');
// const router = express.Router();

// const client1 = require("./connection");

// let conn = client1.db("Blogs").collection("newsletter");


// /Add blogs/
// router.post('/news', async function(req,res){

//     let objPatient = {
//         email:req.body.email
//     }

//     await conn.insertOne(objPatient);

// })



// module.exports = router;
const express = require('express');
const router = express.Router();
const Newsletter = require("./models/Newsletter");

/* Add news */
router.post('/news', async function(req,res){
    try {
        const { email } = req.body;
        const newSubscriber = new Newsletter({ email });
        await newSubscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        console.error('Error adding new subscriber:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;