import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { coursesCard } from "../../dummydata";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CoursesCard = () => {
  return (
    <section className="courses-card">
      
      <div className="courses-card-container">
      <h2 style={{fontSize: "60px",textAlign:"center",color:"#115852",marginBottom:"90px"}}>Browse Our Universities</h2>
        <div className="courses-card-content">
          {coursesCard.map((val, index) => (
            <div className="course-item" key={index}>
              <div className="content flex">
                <div className="left">
                  <div className="course-img">
                    <FontAwesomeIcon icon={faBuildingColumns} style={{fontSize: "40px", color: '#115852' }} />
                  </div>
                </div>
                <div className="course-text">
                  <h1>{val.coursesName}</h1>
                 
                 
                </div>
              </div>
              {/* <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div> */}
              {/* Wrap the "ENROLL NOW" button with Link component */}
              <Link to={index === 0 ? "/team" : `/team${index}`} key={index}> {/* Redirect to the Team page */}
                <div className="course-button-container">
                  <button className="outline-btn">EXPLORE!</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesCard;
