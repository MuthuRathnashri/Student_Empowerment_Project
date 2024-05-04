//BlogPost.js


const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    name: String,
    subject: String,
    experience: String
});

module.exports = mongoose.model('BlogPost', blogPostSchema);