import React, { useState } from "react";
import Back from "../common/back/Back";
import axios from 'axios';
import "./helpdesk.css";
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";

const HelpDesk = () => {
  const [showForm, setShowForm] = useState(false);
  const [helping, setHelping] = useState({
    name: "",
    college: "",
    expertise: "",
    contact: "", // Change contact to email
  });
  const [expertiseOptions] = useState(["University", "Exams"]);
  const [universities] = useState(["Stanford University", "Harvard University", "Massachusetts Institute of Technology","University of California, Berkeley","Columbia University","Yale University","Princeton University","California Institute of Technology","University of Chicago"]);
  const [exams] = useState(["GATE", "GMAT", "TOEFL","IELTS","GRE","ACT"]);

  const handleAddMentorClick = () => {
    setShowForm(true);
  };

  const handleExpertiseChange = (e) => {
    const expertise = e.target.value;
    setHelping({ ...helping, expertise });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/helping/helper', helping) // Send the whole helping object
      .then((res) => {
        alert("Mentor added successfully!");
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error adding mentor:', error);
        alert(error);
      });
      setHelping({
        name: "",
        college: "",
        expertise: "",
        contact: "", // Reset email field as well
      });
  };

  return (
    <>
    <Header />
    <button className="add-mentor-btn" onClick={handleAddMentorClick}>
            Add Mentor
          </button>
      <Back title="Help Desk"/>
        
      <section className="helpdesk padding">
        <div className="container">
         
          {showForm && (
            <div className="mentor-form">
              <h2>Add Mentor</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={helping.name}
                  onChange={(e) => setHelping({ ...helping, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="College"
                  value={helping.college}
                  onChange={(e) => setHelping({ ...helping, college: e.target.value })}
                />
                <select onChange={handleExpertiseChange} value={helping.expertise}>
                  <option value="">Select Expertise</option>
                  {expertiseOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                {helping.expertise === "University" && (
                  <select value={helping.college} onChange={(e) => setHelping({ ...helping, expertise: e.target.value })}>
                    <option value="">Select University</option>
                    {universities.map((uni, index) => (
                      <option key={index} value={uni}>{uni}</option>
                    ))}
                  </select>
                )}
                {helping.expertise === "Exams" && (
                  <select value={helping.college} onChange={(e) => setHelping({ ...helping, expertise: e.target.value })}>
                    <option value="">Select Exam</option>
                    {exams.map((exam, index) => (
                      <option key={index} value={exam}>{exam}</option>
                    ))}
                  </select>
                )}
                <input
                  type="email" // Use type email for email input
                  placeholder="Email" // Placeholder for email input
                  value={helping.contact} // Value from state
                  onChange={(e) => setHelping({ ...helping, contact: e.target.value })} // onChange event
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HelpDesk;
