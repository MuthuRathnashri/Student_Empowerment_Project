//test.js


// const express = require('express');
// const router = express.Router();

// const client1 = require("./connection");

// let conn = client1.db("Blogs").collection("blogposts");


// /Add blogs/
// router.post('/testimonials', async function(req,res){

//     let objPatient = {
//         name:req.body.name,
//         subject:req.body.subject,
//         experience:req.body.experience,
//     }

//     await conn.insertOne(objPatient);

// })

// router.get('/getData', async function(req, res){
//     try {
//         const data = await conn.find({}).toArray();
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const BlogPost = require("./models/BlogPost");

/* Add blogs */
router.post('/testimonials', async function(req,res){
    try {
        const { name, subject, experience } = req.body;
        const newBlogPost = new BlogPost({ name, subject, experience });
        await newBlogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        console.error('Error adding blog post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getData', async function(req, res){
    try {
        const data = await BlogPost.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;