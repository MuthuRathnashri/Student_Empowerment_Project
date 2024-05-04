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
      const response = await axios.get('http://localhost:5000/helping/getData');
      // Filter mentors with expertise "Stanford University"
      const universityMentors = response.data.filter(mentor => mentor.expertise === "TOEFL");
      setUniversityMentors(universityMentors);
    } catch (error) {
      console.error('Error fetching university mentors:', error);
    }
  };
  const handleButton1Click = () => {
    window.location.href = "https://www.ets.org/toefl/test-takers/ibt/schedule.html?utm_agency=md007&utm_source=search&utm_medium=dis&utm_camptype=acq&utm_campaign=toefl-ibt-b2c-0224_0301-ind-dis-md007-acq-toefl_india_aop_23_24&utm_campaign_id=0&utm_content=india_search_brand_troas_aop22-23_new_lp&utm_creative=broad_match_keywords_new_lp&utm_term=paid&utm_country=ind&gclid=CjwKCAjwkuqvBhAQEiwA65XxQPSBDNWcxBQt6hHg1aNQBlvygmp58kE-z5NehYGVQMtWV0877fsH-hoCVfQQAvD_BwE"; // Redirect to GATE website
  };

  const handleButton2Click = () => {
    setShowMentors(true); // Show PriceCard
  };

  const handleButton3Click = () => {
    window.location.href = "https://www.ets.org/s/toefl/pdf/toefl-research-reference-list.pdf"; // Redirect to e-book reference page
  };
  const handleButton4Click = () => {
    window.location.href = "https://www.youtube.com/@TOEFLtv"; // Redirect to e-book reference page
  };
  const handleButton5Click = () => {
    window.location.href = "https://bettertoeflscores.com/toefl-bank-of-practice-questions/12781/"; // Redirect to e-book reference page
  };

  return (
    <>
      <Header/>
      <Back  />
      <section className='price padding'>
        <div className='container grid'>
          {/* Buttons */}
          <div className="button-container">
            <button className="price-button" onClick={handleButton1Click}>
              Visit TOEFL Website
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
