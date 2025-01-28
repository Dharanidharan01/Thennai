import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll, Dumbbell } from 'lucide-react';
import './BenefitsOfCoconutKannada.css';
const BenefitsOfCoconutKannada = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "ಪೋಷಕಾಂಶ ಮೌಲ್ಯ",
      icon: <Apple className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಹೆಚ್ಚು ಕಬ್ಬಿಣ, ಕಬ್ಬಿಣ ಮತ್ತು ತಾಮ್ರದಂತಹ ಪ್ರಮುಖ ಖನಿಜಗಳು (ಎಲುಂಬು ಆರೋಗ್ಯಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ).",
        "ಮಧ್ಯಮ-ಚಟುವಟಿಕೆ ಟ್ರೈಗ್ಲಿಸರೈಡ್‌ಗಳನ್ನು (MCTs) ಹೆಚ್ಚು ಶಕ್ತಿಯ ಮತ್ತು ಮೆದುಳಿನ ಕಾರ್ಯಚಟುವಟಿಕೆಗೆ ಬೆಂಬಲ ನೀಡುತ್ತದೆ.",
        "ಅದ್ಭುತ ಮೊತ್ತದ ನೀರಿನ ಅವಶೇಷಗಳು (7g ನಾರ್ಚು) ಜೀರ್ಣ ಆರೋಗ್ಯ ಮತ್ತು ಶಕ್ತಿಯ ಮಟ್ಟಗಳನ್ನು ಉಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        "ಪೊಟ್ಯಾಸಿಯಮ್, ಮಾಘ್ನೆಷಿಯಮ್, ಮತ್ತು ಸೋಡಿಯಂ ಮುಂತಾದ ನೈಸರ್ಗಿಕ ಖನಿಜಗಳು ದ್ರವಶಕ್ತಿಯ ಸಮತೋಲವನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತವೆ.",
        "ಇ ಮತ್ತು K ವಿಟಮಿನುಗಳು ಆಂಟಿ ಆಕ್ಸಿಡೆಂಟ್ ರಕ್ಷಣೆಯೊಂದಿಗೆ ಎಲುಂಬು ಆರೋಗ್ಯಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ."
      ],
      details: "ತೆಂಗಿನಾವಲಿಯಲ್ಲಿ ಹಲವು ಪೋಷಕಾಂಶಗಳಿವೆ. ಇದು ಆರೋಗ್ಯವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಅದರಲ್ಲಿನ MCTs ಶಕ್ತಿಯನ್ನು ನೈಜವಾಗಿ ಒದಗಿಸುತ್ತವೆ ಮತ್ತು ಮೆದುಳಿನ ಆರೋಗ್ಯವನ್ನು ಉತ್ತೇಜಿಸುತ್ತವೆ. ಒಂದು ಕಪ್ 283 ಕ್ಯಾಲೋರಿ, 7g ನಾರ್ಚು, 3g ಪ್ರೋಟೀನ್ ಮತ್ತು ಹಲವು ಖನಿಜಗಳನ್ನು ಹೊಂದಿದೆ."
    },
    {
      title: "ಹೃದಯ ಆರೋಗ್ಯ",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಹೆಚ್ಚು HDL ಕೊಲಸ್ಟ್ರಾಲ್ ಮಟ್ಟಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು LDL ಮಟ್ಟವನ್ನು ಸಮತೋಲಿತಗೊಳಿಸುತ್ತದೆ.",
        "ಲಾರಿಕ್ ಆಮ್ಲವು ರಕ್ತನಾಳಗಳಲ್ಲಿ ಉಲ್ಬಣ ಮತ್ತು ಅಡ್ಡಿ ತಲುಪಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        "ನಿಯಮಿತ ರಕ್ತದ ಒತ್ತಡ ಮಟ್ಟಗಳನ್ನು ಸಮತೋಲಿತಗೊಳಿಸಲು ಪೊಟ್ಯಾಸಿಯಮ್ ಹೊಂದಿದೆ.",
        "ಆಂಟಿ ಆಕ್ಸಿಡೆಂಟುಗಳು ಹೃದಯಕೋಶಗಳನ್ನು ಆಕ್ಸಿಡೇಟಿವ್ ಒತ್ತಡದಿಂದ ರಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
        "ಆಂಟಿ-ಸೋಂಕು ಗುಣಲಕ್ಷಣಗಳು ಹೃದಯ ಕಾರ್ಯಚಟುವಟಿಕೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ."
      ],
      details: "ತೆಂಗಿನೆಯಲ್ಲಿ ಕೊಲಸ್ಟ್ರಾಲ್ ಮಾದರಿಗಳು ಸಂಯೋಜನೆಯಿಂದ ಹೃದಯ ಆರೋಗ್ಯವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ವಿಶೇಷವಾಗಿ ಲಾರಿಕ್ ಆಮ್ಲವು, ಇದು 50% ತೆಂಗಿನ ಕೊಬ್ಬಿನಲ್ಲಿ ಇದೆ."
    },
    {
      title: "ಮೆದುಳಿನ ಕಾರ್ಯಚಟುವಟಿಕೆ",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "MCTs ಮೆದುಳಿನ ಕೋಶಗಳಿಗೆ ತ್ವರಿತ ಶಕ್ತಿ ಒದಗಿಸುತ್ತದೆ.",
        "ಕೆಟೋನ್ಗಳು ನರಾಂತರ ಕಾಯಿಲೆಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
        "ನರ ಸಂರಚನೆಗೆ ಬೆಂಬಲ ನೀಡುವ ನೈಸರ್ಗಿಕ ಕರಕಗಳು ಇರುತ್ತವೆ.",
        "ಸ್ಮರಣೆ ಮತ್ತು ಕಲಿಕೆಯ ಸಾಮರ್ಥ್ಯವನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ.",
        "ನರ ತಂತುಗಳಲ್ಲಿ ಉಲ್ಬಣವನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಜ್ಞಾನ ಕ್ಷಯವನ್ನು ತಡೆಯುತ್ತದೆ."
      ],
      details: "ತೆಂಗಿನಾದಿಯಲ್ಲಿ MCTs ಮೆದುಳಿಗೆ ಅಗತ್ಯವಿರುವ ಶಕ್ತಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ಇದರ ಮೂಲಕ ಮೆದುಳಿನ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ."
    },
    {
      title: "ಪ್ರತಿಕೋಶಶಕ್ತಿ (ನೋವು ಪ್ರತಿಕಾರ)",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಲಾರಿಕ್ ಆಮ್ಲವು ಮಾದರಿಯಾಗಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ವೈರಸ್‌ಗಳನ್ನು ಕೊಲ್ಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        "ಆಂಟಿ ಆಕ್ಸಿಡೆಂಟುಗಳು ಆಕ್ಸಿಡೇಟಿವ್ ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
        "ಹುಳಿದ ರಕ್ತಕಣಗಳ ಕಾರ್ಯಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.",
        "ಹಾನಿಕಾರಕ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಹಾರಿಸುವನುಗಳನ್ನು ಕೊಲ್ಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        "ಆಟೋ-ಇಮ್ಯೂನಿಟಿ ಶಕ್ತಿಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ."
      ],
      details: "ತೆಂಗಿನಾದಿಯ ಪ್ರತಿಕೋಶ ಶಕ್ತಿಯ ಪ್ರಯೋಜನಗಳು ಅದರ ಲಾರಿಕ್ ಆಮ್ಲದಿಂದಾಗಿ ನಿರೂಪಿತವಾಗಿವೆ. ಇದು ವಿವಿಧ ವೈರಸ್ ಮತ್ತು ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳನ್ನು ಕೊಲ್ಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
    }
    // Add other translations here...
  ];

  const downloadPDF = () => {
    const content = document.getElementById('benefits-content');
    const opt = {
      margin: 1,
      filename: 'coconut-benefits.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(content).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8" id="benefits-content">
      <div className="max-w-7xl mx-auto">
        {/* Logo at the top */}
        <div className="text-center mb-12">
       
           
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk'] animate-fade-in">
          ತೆಂಗಿನ ಕೊಳೆ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {benefit.icon}
                  <h2 className="text-2xl font-bold text-[#0090E1] font-['Space_Grotesk']">
                    {benefit.title}
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="flex items-start animate-slide-in"
                      style={{ animationDelay: `${pointIndex * 0.1}s` }}
                    >
                      <span className="text-green-500 mr-2 text-xl">•</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div 
                  className={`mt-6 overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.details}
                  </p>
                </div>

                <button 
                  className="mt-4 text-[#0090E1] hover:text-[#4CAF50] transition-colors"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {expandedCard === index ? 'ಕನಿಷ್ಠವಾಯಿತು' : 'ಹೆಚ್ಚು ಓದಿ'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={downloadPDF}
            className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 font-['Space_Grotesk'] font-bold text-lg shadow-md"
          >
            PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutKannada;
