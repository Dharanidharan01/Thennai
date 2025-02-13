import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom"; 

const FarmingGuideHindi = () => {
  const navigate = useNavigate(); // useNavigate को प्रारंभ करना

  const guideSteps = [
    {
      title: "मिट्टी तैयार करना",
      description: "वनस्पतियों को हटाकर, उचित जल निकासी सुनिश्चित करते हुए मिट्टी को तैयार करें।",
      icon: "🌱",
    },
    {
      title: "पौधारोपण",
      description: "उच्च गुणवत्ता वाली नारियल बीजों का चयन करें और उन्हें सही दूरी पर लगाएं।",
      icon: "🌴",
    },
    {
      title: "सिंचाई",
      description: "सर्दियों के महीनों में भी, पीले और स्वस्थ विकास के लिए पर्याप्त पानी प्रदान करें।",
      icon: "💧",
    },
    {
      title: "उर्वरक सहायता",
      description: "बाकी विकास और उत्पादन को बढ़ाने के लिए प्राकृतिक या रासायनिक उर्वरकों का उपयोग करें।",
      icon: "🌿",
    },
    {
      title: "कीट नियंत्रण",
      description: "जला हुआ उत्पन्न और लाल सांप के कीड़ों जैसे छोटे जीवों को निगरानी और प्रबंधित करें।",
      icon: "🐛",
    },
    {
      title: "उपज प्राप्ति",
      description: "महत्वपूर्ण नारियल की फसल को 45-60 दिनों के दौरान काटें।",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      <div className="guide-header">
        <h2>नारियल खेती मार्गदर्शिका</h2>
        <p>स्वस्थ नारियल बागों को उगाने और बनाए रखने के लिए आवश्यक कदमों को सीखें।</p>
      </div>

      {/* "अधिक जानें" बटन */}
      <div className="guide-steps">
        {guideSteps.map((step, index) => (
          <div className="guide-card" key={index}>
            <div className="guide-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* "अधिक जानें" बटन */}
      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("/FarmingGuideHindi")} // 'fg' पृष्ठ पर जाएं
        >
          अधिक जानें
        </button>
      </div>
    </section>
  );
};

export default FarmingGuideHindi;
