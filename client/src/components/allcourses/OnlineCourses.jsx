// OnlineCourses.jsx

import React from "react";
import { Link } from "react-router-dom";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './online.css';

const OnlineCourses = () => {
  return (
    <section className='online-container'>
      <div className='container'>
        <h2 style={{fontSize: "60px",textAlign:"center",color:"#115852",marginBottom:"90px"}}>Browse Our Entrance Exams</h2>
        <div className='online-content grid3'>
          {online.map((val, index) => (
            <Link to={index === 0 ? "/pricing" : `/pricing${index}`} key={index}>
              <div className='online-box'>
                <div className='online-img'>
                  <FontAwesomeIcon icon={faBook} className='icon' />
                </div>
                <div className='online-text'>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                  
                </div>
                <br></br>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OnlineCourses;
