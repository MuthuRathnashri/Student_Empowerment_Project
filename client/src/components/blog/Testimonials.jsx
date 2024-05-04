// Testimonials.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './testimonials.css'; // Import CSS file

const Testimonials = () => {
  const [test, setTest] = useState({
    name:"",
    subject:"",
    experience:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let copyTest = {...test};
    axios.post('https://student-empowerment-project.onrender.com/test/testimonials', copyTest)
      .then((res) => {
        alert("Done");
      })
      .catch((error) => {
        alert(error);
      });

    setTest({
      name:"",
      subject:"",
      experience:""
    });
  };

  return (
    <div className="testimonial-container">
      <h2>Add Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={test.name} onChange={(e) => setTest({...test, name:e.target.value})} />
        <input type="text" placeholder="Subject" value={test.subject} onChange={(e) => setTest({...test, subject:e.target.value})} />
        <textarea placeholder="Experience" value={test.experience} onChange={(e) => setTest({...test, experience:e.target.value})} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Testimonials;
