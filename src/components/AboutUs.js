// src/components/AboutUs.js
import React from "react";
import "./AboutUs.css";
import aboutImage from "../images/aboutUs.jpg"; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <h2>Who are we?</h2>
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <p>
            The minds behind VIWA come together from dynamic duo of India and
            Bosnia! Fusion, our team, consists of three passionate students.
            Soundharya Parashuram, a talented Computer Science Engineering (CSE)
            Master student, sparked the initial vision for VIWA with her global
            perspective and cultural flair. Malik Huremovic, a sharp and focused
            Software Engineering (SE) Bachelor student, keeps the project on
            track with his technical expertise. Rounding out the trio is Rumejsa
            Sedic, a bright and curious hijab-wearing Software Engineering (SE)
            Bachelor student, who brings a unique viewpoint to every challenge.
            Together, this diverse group combines their technical expertise and
            creative spark to make VIWA a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
