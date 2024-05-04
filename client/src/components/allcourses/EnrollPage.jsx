// EnrollPage.jsx

import React from "react";
import Back from "../common/back/Back";
import "./courses.css"; // Import CSS file for styling

const EnrollPage = () => {
  return (
    <>
      <Back title="Enroll Page" />
      <div className="container">
        {/* Content for the enrollment page */}
        <h1>Choose Your Course</h1>
        <div className="enrollment-buttons">
          <button className="enroll-button">Course 1</button>
          <button className="enroll-button">Course 2</button>
          <button className="enroll-button">Course 3</button>
        </div>
      </div>
      {/* Footer component */}
    </>
  );
};

export default EnrollPage;
