import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO STUDENT EMPOWERMENT PLATFORM' title='Best Online Education Expertise' />
            <p className="para-hero">Shape the Future: Empower Tomorrow's Leaders by Mentoring Today!</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
