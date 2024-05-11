import React, { useState,useEffect } from "react";
import Back from "../common/back/Back";
import axios from 'axios';
import "./price.css";
import Faq from "./Faq";
import Header from "../Header1";

const Pricing = () => {
  const [universityMentors, setUniversityMentors] = useState([]);
  const [showMentors, setShowMentors] = useState(false);

  useEffect(() => {
    fetchUniversityMentors();
  }, []);

  const fetchUniversityMentors = async () => {
    try {
      // Fetch mentor data from backend
      const response = await axios.get('https://student-empowerment-project.onrender.com/helping/getData');
      // Filter mentors with expertise "Stanford University"
      const universityMentors = response.data.filter(mentor => mentor.expertise === "IELTS");
      setUniversityMentors(universityMentors);
    } catch (error) {
      console.error('Error fetching university mentors:', error);
    }
  };

  const handleButton1Click = () => {
    window.location.href = "https://ielts.org/"; // Redirect to GATE website
  };

  const handleButton2Click = () => {
    setShowMentors(true); // Show PriceCard
  };

  const handleButton3Click = () => {
    window.location.href = "https://ieltsliz.com/ielts-speaking-free-lessons-essential-tips/"; // Redirect to e-book reference page
  };
  const handleButton4Click = () => {
    window.location.href = "https://www.youtube.com/channel/UClDuint417AzRLAJ2PaDTmQ"; // Redirect to e-book reference page
  };
  const handleButton5Click = () => {
    window.location.href = "https://www.shiksha.com/studyabroad/exams/ielts/sample-papers"; // Redirect to e-book reference page
  };

  return (
    <>
      <Header/>
      <Back />
      <section className='price padding'>
        <div className='container grid'>
          {/* Buttons */}
          <div className="button-container">
            <button className="price-button" onClick={handleButton1Click}>
              Visit IELTS Website
            </button>
            <button className="price-button" onClick={handleButton2Click}>
              Show Mentors
            </button>
            <button className="price-button" onClick={handleButton3Click}>
              E-Book Reference
            </button>
            <button className="price-button" onClick={handleButton4Click}>
              Tutorials
            </button>
            <button className="price-button" onClick={handleButton5Click}>
              Take Practice
            </button>
          </div>
          
          <div className="team-grid">
            {showMentors && universityMentors.map((mentor, index) => (
              <div key={index} className="team-member">
                <h3>{mentor.name}</h3>
                <p>College: {mentor.college}</p>
                <p>Expertise: {mentor.expertise}</p>
                <p>Contact: {mentor.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Pricing;
