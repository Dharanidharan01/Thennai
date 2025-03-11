import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate ഇറക്കുമതി ചെയ്യുക
import "../components/TamilNaduMap.css";
import tamilNaduImage from "../../../assets/temple.png";
import keralaImage from "../../../assets/kerala.png";
import andhraImage from "../../../assets/ap.png";
import karnatakaImage from "../../../assets/karnataka.png";

const TamilNaduMapMalayalam = () => {
  const navigate = useNavigate(); // നാവിഗേഷൻ ആരംഭിക്കുക

  const states = [
    { name: "തമിഴ്നാട്", image: tamilNaduImage, route: "/tamilnadu" },
    { name: "കേരളം", image: keralaImage, route: "/kerala" },
    { name: "കർണാടക", image: karnatakaImage, route: "/karnataka" },
    { name: "ആന്ധ്രാപ്രദേശ്", image: andhraImage, route: "/andhra-pradesh" },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route); // റോട്ട് നിർവചിച്ചിട്ടുണ്ടെങ്കിൽ നാവിഗേറ്റ് ചെയ്യുക
  };

  return (
    <div className="realtime-prices-container">
      <h1 className="realtime-header">ഇന്ത്യയിലെ തേങ്ങയുടെ തത്സമയ മാർക്കറ്റ് വിലകൾ</h1>
      <p className="realtime-description">
        ഇന്ത്യയിലെ പ്രധാന തേങ്ങാ ഉൽപ്പാദന സംസ്ഥാനങ്ങളിലെ പുതിയ മാർക്കറ്റ് വിലകൾ കർഷകർക്കായി അറിയാം.
      </p>
      <div className="state-cards-container">
        {states.map((state, index) => (
          <div
            className="state-card"
            key={index}
            onClick={() => handleCardClick(state.route)} // ക്ലിക്ക് ഹാൻഡിൽ ചെയ്യുക
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

export default TamilNaduMapMalayalam;