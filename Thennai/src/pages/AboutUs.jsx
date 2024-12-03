import React from "react";
import "../pages/AboutUs.css";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import teamImg from "../assets/team.png";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Innovate, Cultivate, Elevate</p>
      </header>

      {/* Mission and Vision Section */}
      <div className="mission-vision">
        <div className="card">
          <img src={missionImg} alt="Our Mission" className="image" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              At <strong>Thennai</strong>, we aim to revolutionize farming by delivering innovative solutions that improve efficiency, increase profitability, and foster sustainability, thereby uplifting agriculture.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={visionImg} alt="Our Vision" className="image" />
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              Advancing agricultural innovations by transforming farming through technology-driven solutions for a sustainable future.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
