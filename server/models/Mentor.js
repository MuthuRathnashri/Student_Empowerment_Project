//Mentor.js



const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: String,
    college: String,
    expertise: String,
    contact: String
});

module.exports = mongoose.model('Mentor', mentorSchema);