import React, { useState, useEffect } from "react";
import "./Popup.css";

const PopupMalayalam = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // popup flag-നെക്കുറിച്ച് localStorage പരിശോധിക്കുന്നു
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsVisible(true); // മുൻപ് കണ്ടിട്ടില്ലെങ്കിൽ popup കാണിക്കുക
    }
  }, []);

  const handleLanguageClick = (language) => {
    setIsVisible(false);
    localStorage.setItem("hasSeenPopup", "true"); // popup കാണിച്ചതായി flag സജ്ജമാക്കുക
    // തിരഞ്ഞെടുക്കപ്പെട്ട ഭാഷാ പേജിലേക്ക് നയിക്കുക
    window.location.href = `/${language}`;
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-container animate-popup">
          <h2 className="popup-heading">നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക</h2>
          <div className="language-options">
            <button onClick={() => handleLanguageClick("/")}>English</button>
            <button onClick={() => handleLanguageClick("Homepagetamil")}>தமிழ்</button>
            <button onClick={() => handleLanguageClick("malayalam")}>മലയാളം</button>
            <button onClick={() => handleLanguageClick("telugu")}>తెలుగు</button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupMalayalam;