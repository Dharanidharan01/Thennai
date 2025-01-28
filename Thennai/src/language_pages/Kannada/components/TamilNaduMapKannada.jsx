import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/TamilNaduMap.css";
import tamilNaduImage from "../../../assets/temple.png";
import keralaImage from "../../../assets/kerala.png";
import andhraImage from "../../../assets/ap.png";
import karnatakaImage from "../../../assets/karnataka.png";

const TamilNaduMapKannada = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Array of states with their names, images, and routes
  const states = [
    { name: "தமிழ்நாடு", image: tamilNaduImage, route: "/tamilnadu" }, // Tamil Nadu
    { name: "ಕೇರಳ", image: keralaImage, route: "/kerala" },         // Kerala
    { name: "ಕರ್ಣಾಟಕ", image: karnatakaImage, route: "/kar" },       // Karnataka
    { name: "ಆಂಧ್ರಪ್ರದೇಶ", image: andhraImage, route: "/ap" },      // Andhra Pradesh
  ];

  // Handle click on a state card to navigate to the corresponding route
  const handleCardClick = (route) => {
    if (route) navigate(route); // Navigate if the route is valid
  };

  return (
    <div className="realtime-prices-container">
      {/* Heading */}
      <h1 className="realtime-header">ಭಾರತದಲ್ಲಿನ ತೆಂಗು ಹಂಚಿಕೆ ಬೆಲೆ ನೇರ ಅಪ್ಡೇಟ್</h1>
      
      {/* Description */}
      <p className="realtime-description">
        ಭಾರತದ ಪ್ರಮುಖ ತೆಂಗು ಉತ್ಪಾದಕ ರಾಜ್ಯಗಳಲ್ಲಿ ಪ್ರಸ್ತುತ ತೆಂಗು ಬೆಲೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಸದಾ ನವೀಕರಿಸಿ.
      </p>

      {/* State Cards Container */}
      <div className="state-cards-container">
        {states.map((state, index) => (
          <div
            className="state-card"
            key={index}
            onClick={() => handleCardClick(state.route)} // Handle click event
            style={{ cursor: state.route ? "pointer" : "default" }} // Set cursor to pointer if route exists
          >
            <img src={state.image} alt={state.name} className="state-icon" /> {/* State Image */}
            <h3 className="state-name">{state.name}</h3> {/* State Name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamilNaduMapKannada;
