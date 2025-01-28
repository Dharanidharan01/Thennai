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
    { name: "താമിഴ്‌നാട്", image: tamilNaduImage, route: "/tamilnadu" }, // തമിഴ്നാട് റോട്ട് ചേർക്കുക
    { name: "കേരളം", image: keralaImage , route: "/kerala" },
    { name: "കർണാടക", image: karnatakaImage , route: "/kar" },
    { name: "ആന്ധ്രാപ്രദേശ്", image: andhraImage, route: "/ap"  },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route); // റോട്ട് നിർവചിച്ചിട്ടുണ്ടെങ്കിൽ നാവിഗേറ്റ് ചെയ്യുക
  };

  return (
    <div className="realtime-prices-container">
      <h1 className="realtime-header">ഇന്ത്യയിൽ തേങ്ങയുടെ യഥാർത്ഥ വിലകൾ</h1>
      <p className="realtime-description">
        ഇന്ത്യയിലെ പ്രധാന തേങ്ങ വളർത്തുന്ന സംസ്ഥാനങ്ങളിൽ പുതുതായി അപ്ഡേറ്റ് ചെയ്യപ്പെട്ട തേങ്ങ വിലകൾ അറിയൂ.
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
