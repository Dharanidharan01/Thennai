import React from "react";
import "./ContactUs.css";
import contactImage from "../assets/contactus.jpg"; // Update the path as per your project structure

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-header">
        <h2>Contact Us</h2>
        <p>Fill out the form below to reach out to us!</p>
      </div>
      <div className="contactus-content">
        <div className="contactus-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="google-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSevu8MPy16SQVpqwZg4p6ra5VhMmrIolf0yEq6avhpESZuqIw/viewform?embedded=true"
            width="700px"
            height="700px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Us Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
