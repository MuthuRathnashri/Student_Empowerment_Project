// Team.jsx

import React, { useState,useEffect } from "react";
import Back from "../common/back/Back";
import axios from 'axios';

import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";
import Header from "../Header1";

const Team = () => {
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
      const universityMentors = response.data.filter(mentor => mentor.expertise === "California Institute of Technology");
      setUniversityMentors(universityMentors);
    } catch (error) {
      console.error('Error fetching university mentors:', error);
    }
  };

  const handleButton1Click = () => {
    window.location.href = "https://www.caltech.edu"; // Redirect to Stanford University website
  };

  const handleButton2Click = () => {
    setShowMentors(true); // Show TeamCard
  };

  const handleButton3Click = () => {
    window.location.href = "https://www.admissions.caltech.edu/documents/5819/Transfer_Entrance_Examinations_Book_List_Fall_2024.pdf"; // Redirect to e-book reference page
  };
  const handleButton4Click = () => {
    window.location.href = "https://www.youtube.com/channel/UClGTZDyz3CSl92TgDqIr0nw"; // Redirect to e-book reference page
  };
  const handleButton5Click = () => {
    window.location.href = "https://www.caaspp.org/ta-resources/practice-training.html"; // Redirect to e-book reference page
  };
  return (
    <>
      <Header/>
      <Back title="" />
      <section className="team padding">
        <div className="container grid">
          <div className="button-container">
            <button className="team-button" onClick={handleButton1Click}>
              Visit California Institute of Technology
            </button>
            <button className="team-button" onClick={handleButton2Click}>
              Show Mentors
            </button>
            <button className="team-button" onClick={handleButton3Click}>
              E-Book Reference
            </button>
            <button className="team-button" onClick={handleButton4Click}>
              Tutorials
            </button>
            <button className="team-button" onClick={handleButton5Click}>
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

export default Team;
