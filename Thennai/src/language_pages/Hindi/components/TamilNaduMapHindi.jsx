import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/TamilNaduMap.css";
import tamilNaduImage from "../../../assets/temple.png";
import keralaImage from "../../../assets/kerala.png";
import andhraImage from "../../../assets/ap.png";
import karnatakaImage from "../../../assets/karnataka.png";

const TamilNaduMapHindi = () => {
  const navigate = useNavigate(); // नेविगेशन शुरू करें

  const states = [
    { name: "तमिलनाडु", image: tamilNaduImage, route: "/tamilnadu" }, // तमिलनाडु के लिए मार्ग
    { name: "केरल", image: keralaImage , route: "/kerala" },
    { name: "कर्नाटका", image: karnatakaImage , route: "/kar" },
    { name: "आंध्र प्रदेश", image: andhraImage, route: "/ap"  },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route); // मार्ग निर्धारित किया है तो उस पर जाएं
  };

  return (
    <div className="realtime-prices-container">
      <h1 className="realtime-header">भारत में नारियल के मूल्य की वास्तविक समय जानकारी</h1>
      <p className="realtime-description">
        भारत के प्रमुख नारियल उत्पादक राज्यों में वर्तमान नारियल मूल्यों के बारे में जानकारी प्राप्त करें।
      </p>
      <div className="state-cards-container">
        {states.map((state, index) => (
          <div
            className="state-card"
            key={index}
            onClick={() => handleCardClick(state.route)} // क्लिक की कार्रवाई करें
            style={{ cursor: state.route ? "pointer" : "default" }}
          >
            <img src={state.image} alt={state.name} className="state-icon" />
            <h3 className="state-name">{state.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamilNaduMapHindi;
