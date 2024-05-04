import React, { useState, useEffect } from "react";
import Back from "../common/back/Back";
import Testimonials from "./Testimonials";
import axios from 'axios';
import "./blog.css";
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gridStartIndex, setGridStartIndex] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(true); // New state to control search bar display

  useEffect(() => {
    axios.get('http://localhost:4000/test/getData')
      .then(response => {
        setTestimonials(response.data);
        setFilteredTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const handleMovePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setGridStartIndex((prevIndex) => (prevIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setShowSearchBar(true); // Show search bar when moving to the previous grid
  };

  const handleMoveNextGrid = () => {
    let newGridStartIndex = gridStartIndex + 6;
    if (newGridStartIndex >= filteredTestimonials.length) {
      newGridStartIndex = 0;
    }
    setGridStartIndex(newGridStartIndex);
    setCurrentIndex(newGridStartIndex);
    setShowSearchBar(false); // Hide search bar when moving to the next grid
  };

  const handleMovePrevGrid = () => {
    let newGridStartIndex = gridStartIndex - 6;
    if (newGridStartIndex < 0) {
      newGridStartIndex = filteredTestimonials.length - (filteredTestimonials.length % 6);
    }
    setGridStartIndex(newGridStartIndex);
    setCurrentIndex(newGridStartIndex);
    setShowSearchBar(true); // Show search bar when moving to the previous grid
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTestimonials(event.target.value);
  };

  const filterTestimonials = (searchTerm) => {
    if (Array.isArray(testimonials)) {
      const filtered = testimonials.filter(testimonial =>
        testimonial.subject && testimonial.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTestimonials(filtered);
    }
  };
  

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container">
          {showForm && <Testimonials addTestimonial={addTestimonial} />}
          <button className="add-experience-btn" onClick={() => setShowForm(!showForm)}>
            Add Experience
          </button>
          {/* Conditionally render search bar only on the first page */}
          {gridStartIndex === 0 && (
            <div className="search-bar-container">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search by subject"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          )}
          <div className="arrow-container">
            <button className="arrow arrow-left" onClick={handleMovePrevGrid}>
              &lt;
            </button>
            <button className="arrow arrow-right" onClick={handleMoveNextGrid}>
              &gt;
            </button>
          </div>
          <div className="blog-grid">
            {filteredTestimonials.slice(gridStartIndex, gridStartIndex + 6).map((testimonial, index) => (
              <div key={index} className={`testimonial ${index === currentIndex ? 'active' : ''}`}>
                <div className="testimonial-box">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.date}</p>
                  <h4>{testimonial.subject}</h4>
                  <p>{testimonial.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
