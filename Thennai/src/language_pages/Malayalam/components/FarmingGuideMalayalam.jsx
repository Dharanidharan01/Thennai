import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom";

const FarmingGuideMalayalam = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const guideSteps = [
    {
      title: "ഭൂമി തയ്യാറാക്കൽ",
      description: "കളകൾ നീക്കം ചെയ്ത് ശരിയായ ജലനിരഗമനം ഉറപ്പാക്കി മണ്ണ് തയ്യാറാക്കുക.",
      icon: "🌱",
    },
    {
      title: "തൈ നടൽ",
      description: "മികച്ച നിലവാരമുള്ള തേങ്ങാ തൈകൾ തിരഞ്ഞെടുത്ത് ആവശ്യമായ അകലത്തിൽ നടുക.",
      icon: "🌴",
    },
    {
      title: "ജലസേചനം",
      description: "വരൾച്ചക്കാലത്ത് മതിയായ ജലം നൽകി നല്ല വളർച്ച ഉറപ്പാക്കുക.",
      icon: "💧",
    },
    {
      title: "വളപ്രയോഗം",
      description: "ജൈവമോ രാസസങ്കരങ്ങളോ ആയ വളങ്ങൾ ഉപയോഗിച്ച് വളർച്ചയും വിളവും വർദ്ധിപ്പിക്കുക.",
      icon: "🌿",
    },
    {
      title: "കീടനാശന നിയന്ത്രണം",
      description: "കൊമ്പൻ ചെല്ലികൾ, ചെമ്പൻ ചെല്ലികൾ തുടങ്ങിയ കീടങ്ങളെ നിരീക്ഷിച്ച് നിയന്ത്രിക്കുക.",
      icon: "🐛",
    },
    {
      title: "വിളവെടുപ്പ്",
      description: "വിളഞ്ഞ തേങ്ങകൾ 45-60 ദിവസത്തെ ഇടവേളകളിൽ കൊയ്യുക.",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      <div className="guide-header">
        <h2>തേങ്ങാ കൃഷി മാർഗനിർദ്ദേശം</h2>
        <p>ആരോഗ്യകരമായ തേങ്ങാ തോട്ടങ്ങൾ വളർത്താനും പരിപാലിക്കാനും ആവശ്യമായ അടിസ്ഥാന ഘട്ടങ്ങൾ അറിയുക.</p>
      </div>

      <div className="guide-steps">
        {guideSteps.map((step, index) => (
          <div className="guide-card" key={index}>
            <div className="guide-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* "Know More" Button */}
      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("/FarmingGuideMalayalam")}
        >
          കൂടുതൽ അറിയുക
        </button>
      </div>
    </section>
  );
};

export default FarmingGuideMalayalam;