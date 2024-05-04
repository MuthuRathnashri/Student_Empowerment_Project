//helping.js


// const express = require('express');
// const router = express.Router();

// const client1 = require("./connection");

// let conn = client1.db("Blogs").collection("mentors");


// /Add blogs/
// router.post('/helper', async function(req,res){
  

//     let objPatient1 = {
//         name:req.body.name,
//         college:req.body.college,
//         expertise:req.body.expertise,
//         contact:req.body.contact
//     }

//     await conn.insertOne(objPatient1);

// })
// router.get('/getData', async function(req, res){
//     try {
//         // Fetch all mentors
//         const data = await conn.find({}).toArray();
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })




// module.exports = router;
const express = require('express');
const router = express.Router();
const Mentor = require("./models/Mentor");

/* Add helper */
router.post('/helper', async function(req,res){
    try {
        const { name, college, expertise, contact } = req.body;
        const newMentor = new Mentor({ name, college, expertise, contact });
        await newMentor.save();
        res.status(201).json(newMentor);
    } catch (error) {
        console.error('Error adding mentor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getData', async function(req, res){
    try {
        const data = await Mentor.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;