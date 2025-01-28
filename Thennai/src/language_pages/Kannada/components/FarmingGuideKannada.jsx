import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom";

const FarmingGuideKannada = () => {
  const navigate = useNavigate(); // useNavigate ಪ್ರಾರಂಭಿಸಿ

  const guideSteps = [
    {
      title: "ಮಣ್ಣು ತಯಾರಿ",
      description: "ಮೋಸೆಯ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ಸರಿಯಾದ ನೀರಿನ ಒಳಚರಂಡಿ ವ್ಯವಸ್ಥೆಯನ್ನು ಖಚಿತಪಡಿಸಿ ಮತ್ತು ಮಣ್ಣನ್ನು ತಯಾರಿಸಿ.",
      icon: "🌱",
    },
    {
      title: "ನೆಡುವಿಕೆ",
      description: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತೆಂಗಿನಕಾಯಿ ಬೀಜಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಅವುಗಳನ್ನು ಸರಿಯಾದ ಅಂತರದಲ್ಲಿ ನೆಡಿರಿ.",
      icon: "🌴",
    },
    {
      title: "ನೀರಾವರಿ",
      description: "ಬೇಸಿಗೆ ತಿಂಗಳಲ್ಲಿ ಕೂಡ, ಹಸಿರು ಮತ್ತು ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆಗಾಗಿ ಸಾಕಷ್ಟು ನೀರನ್ನು ಒದಗಿಸಿ.",
      icon: "💧",
    },
    {
      title: "ಸಾರ",
      description: "ಉತ್ಪಾದನೆ ಹೆಚ್ಚಿಸಲು ಪ್ರಾಕೃತಿಕ ಅಥವಾ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರಗಳನ್ನು ಬಳಸಿರಿ.",
      icon: "🌿",
    },
    {
      title: "ಹಾನಿಕಾರಕ ಕೀಟಗಳು",
      description: "ಎರೆಬಿದ್ದು ಹಾನಿ ಮತ್ತು ಕೆಂಪು ಹುಳುಗಳಂತಹ ಕೀಟಗಳನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ ಮತ್ತು ನಿಯಂತ್ರಿಸಿ.",
      icon: "🐛",
    },
    {
      title: "ಹಣ್ಣು ತಯಾರಿಕೆ",
      description: "ಮುಖ್ಯ ತೆಂಗಿನಕಾಯಿಗಳನ್ನು 45-60 ದಿನಗಳಲ್ಲಿ ತರುತ್ತದೆ.",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      <div className="guide-header">
        <h2>ತೆಂಗಿನಕಾಯಿ ಬೆಳೆ ಮಾರ್ಗದರ್ಶಿ</h2>
        <p>ಆರೋಗ್ಯಕರ ತೆಂಗಿನಕಾಯಿ ತೋಟಗಳನ್ನು ಬೆಳೆಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಾದ ಹಂತಗಳನ್ನು ಕಲಿಯಿರಿ.</p>
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

      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("/FarmingGuideKannada")} // 'fgt' ಪೇಜ್‌ಗೆ ನಾವಿಗೇಟ್ ಮಾಡಿ
        >
          ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ
        </button>
      </div>
    </section>
  );
};

export default FarmingGuideKannada;
