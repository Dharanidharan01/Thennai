import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuideKannada = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "ಹೋಬಳಿ ತಯಾರಿ",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಚೆನ್ನಾಗಿ ನೀರು ಹರಿಸುವ ಮಣ್ಣನ್ನು ಆರಿಸು, pH ಮಟ್ಟವು 5.5-6.5 ನಡುವೆ ಇರಬೇಕು.",
        "ಕಾಲುಗಳನ್ನು ತೆಗೆದು ಸೂರ್ಯಪ್ರಕಾಶ ಬೀರುವ ರೀತಿ ಮಣ್ಣನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸು.",
        "1 ಮೀ × 1 ಮೀ × 1 ಮೀ ಗಾತ್ರದ ಹೊತ್ತಿಗಳನ್ನ 7.5 ಮೀ × 7.5 ಮೀ ಅಂತರದಲ್ಲಿ ಕೀಳಿಸು.",
        "ಹೊತ್ತಿಗೆ ಮೇಲ್ಮಣ್ಣ, ಪ್ರೌಢ ಜೀವ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ಬಾಳು ಮಣ್ಣಿನ ಜೊತೆಗೆ ಭೂಮಿಯಲ್ಲಿ ತುಂಬು.",
        "ನೀರಾಟ ಮತ್ತು ನೀರಿನ ಹಾನಿಯನ್ನು ತಪ್ಪಿಸಲು ಸರಿಯಾದ ತಿರುಗುಬೇಲಿ ಮತ್ತು ನೀರಿನ ಮಟ್ಟವನ್ನು ಖಚಿತಪಡಿಸು.",
      ],
      details:
        "ಹೋಬಳಿ ಬೆಳೆ ಯಶಸ್ಸಿಗಾಗಿ ಭೂಮಿಯ ತಯಾರಿ ಬಹುಮುಖ್ಯವಾಗಿದೆ. ಉತ್ತಮ ಪ್ರಮಾಣದ ಭೂಮಿ, ಸರಿಯಾದ ನೀರಾಟ ಮತ್ತು ಮೂಲಭೂತ ಹೂಡಿಕೆಗಾಗಿ ಉತ್ತಮ ಪರಿಸರವನ್ನು ನಿರ್ಮಿಸಲು ಭೂಮಿ ತಯಾರಿಕೆ ಅಗತ್ಯವಿದೆ."
    },
    {
      title: "ನಡುವಣೆ",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />, 
      points: [
        "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ನವೀಕೃತ ಬೀಜಗಳನ್ನು ನಂಬಿದ ನರ್ಸರಿಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ (11-12 ತಿಂಗಳ ಹಳೆಯದು).",
        "ಮಳೆಹವ್ಯಾಸವನ್ನು ಆರಂಭಿಸುವ ಸಮಯದಲ್ಲಿ ನಡುವಣವನ್ನು ಮಾಡಿಸುವುದರಿಂದ ಉತ್ತಮ ಮೂಡಲು ಖಚಿತಪಡಿಸು.",
        "ಪಾತಾಲದ ಬೆನ್ನೆಯಿಂದ ದೊಡ್ಡದಾಗಿ ನೆಟ್ಟಿರುವಾಗ ಬೆಳೆದಿದ್ದೇವೆ ಎಂದು ಖಚಿತಪಡಿಸು.",
        "ಮೊದಲ چند ವಾರಗಳಲ್ಲಿ ತ್ವರಿತ ನೀರಾಟ ಮತ್ತು ನೆರಳುಗಳನ್ನು ಒದಗಿಸು.",
        "ಗಿಡಗಳ ನಡುವೆ 7.5 ಮೀ ದೂರವಿರಬೇಕೆಂದು ಖಚಿತಪಡಿಸು."
      ],
      details:
        "ನಡುವಣೆ ಹಂತವು ಮಹತ್ವಪೂರ್ಣವಾಗಿದೆ. ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೀಜಗಳು ಮತ್ತು ಸರಿಯಾದ ನಡುವಣೆ ವಿಧಾನಗಳು ಉತ್ತಮ ಜೀವಕೋಶ ಪ್ರಮಾಣವನ್ನು ಮತ್ತು ಭವಿಷ್ಯದ ಫಲಗಳನ್ನು ಖಚಿತಪಡಿಸು."
    },
    {
      title: "ನೀರಾಟ",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ನೀರು ಉಚಿತವಾಗಿ ಬಳಸಲು ಜಲಾಶಯ ನೀರಾಟ ಅಥವಾ ಕೊಪ್ಪಲು ನೀರಾಟ ವಿಧಾನಗಳನ್ನು ಅನುಸರಿಸು.",
        "ನೀರಿನ ಹಾನಿಯನ್ನು ತಪ್ಪಿಸಲು ಭೂಮಿಯ ತೇವಾಂಶವನ್ನು ನಿಗದಿತವಾಗಿ ಕಾಯ್ದಿರಿಸು.",
        "ಬೇಸಿಗೆ ಮಾಸದಲ್ಲಿ ಹೆಚ್ಚು (15-20 ಲೀಟರ್ ಪ್ರತಿಘಟಕ) ನೀರಾಟ ಮಾಡು.",
        "ಮಳೆಗಾಲದಲ್ಲಿ ನೀರಾಟವನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಮೂಲ ಸುಳಿವುಗಳನ್ನು ತಪ್ಪಿಸು.",
        "ಭೂಮಿಯ ತೇವಾಂಶವನ್ನು ನಿಗದಿತವಾಗಿ ಮೇಲ್ದರ್ಜೆ ಮಾಡಿ, ನೀರಾಟವನ್ನು ಆಧಾರಿತವಾಗಿ ಸಮರ್ಪಿಸು."
      ],
      details:
        "ಹೊತ್ತಿಗಳ ಬೆಳವಣಿಗೆಗೆ, ಬೆಳವಣಿಗೆಯ ಬೆಳವಣಿಗೆಯ ಪ್ರಗತಿಗೆ ಸರಿಯಾದ ನೀರಾಟ ಮುಖ್ಯವಾಗಿದೆ. ಮೊದಲ ಹಂತದ ನಿರ್ವಹಣೆಯ ಸಮಯದಲ್ಲಿ ನಿರಂತರ ನೀರಾಟ ಅಗತ್ಯವಿದೆ."
    },
    {
      title: "ಅಂಶಮಾತ್ರಿಕೆ",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಸಮಾನ ಪ್ರಮಾಣದ NPK ಪೋಷಕಾಂಶಗಳನ್ನು ಬಳಸಿ (500g N, 320g P2O5, ಮತ್ತು 1200g K2O).",
        "ಜೈವಿಕ ರಸಾಯನಗಳನ್ನು (25-50 ಕೆಜ) ಪ್ರತಿಯೊಂದು ಸಸ್ಯಕ್ಕೆ ವಾರ್ಷಿಕವಾಗಿ ಸೇರಿಸಿ.",
        "ಅಂಶಮಾತ್ರಿಕತೆ ಎರಡು ಅಥವಾ ಮೂರು ಹಂತಗಳಲ್ಲಿ ಮಾಡುವುದು ಉತ್ತಮವಾಗಿದೆ.",
        "ಭೂಮಿಯ ಪರೀಕ್ಷೆಯ ಸೂಚನೆಗಳನ್ನು ಆಧರಿಸಿ ಸೂಕ್ಷ್ಮ ನ್ಯೂಟ್ರಿಯೆಂಟುಗಳನ್ನು ಬಳಸಲು.",
        "ನಷ್ಟವೂ ಅಲ್ಲದೆ, ಭೂಮಿ ಆರೋಗ್ಯವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲು ಹಸಿರು ತೆವಳಿಕೆಯನ್ನು ಅನುಸರಿಸು."
      ],
      details:
        "ಅಂಶಮಾತ್ರಿಕವನ್ನು ಜವಾಬ್ದಾರಿಯೊಂದಿಗೆ ನಡೆಸಿದರೆ, ಸ್ಥಿರವಾದ ಬೆಳೆ ಉತ್ಪಾದನೆಯನ್ನು ಖಚಿತಪಡಿಸಬಹುದು."
    },
    {
      title: "ಹುಳು ನಿಯಂತ್ರಣ",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಹಿತಕಾರಿ ಹುಳುಗಳನ್ನು ಹವ್ಯಾಸದಿಂದ ನೋಡಿ, ಗಾಳಿಯ ಹುಳುಗಳನ್ನು ನಿರಂತರವಾಗಿ ಗಮನಿಸು.",
        "ಏಕೀಕೃತ ಹುಳು ನಿರ್ವಹಣೆಯ (IPM) ವಿಧಾನಗಳನ್ನು ಅನುಸರಿಸು.",
        "ಹುಳುಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಪೆಟ್ಟಿಗೆಯ ರಚನೆಗಳನ್ನು ಮತ್ತು ಬಯೋಲಾಜಿಕಲ್ ನಿಯಂತ್ರಣದ ಕಲೆಯನ್ನು ಬಳಸಿಕೊಳ್ಳಿ.",
        "ಹೊತ್ತಿ ಭೂಮಿಯನ್ನು ಸ್ವಚ್ಛವಾಗಿ ನಿರ್ವಹಿಸು.",
        "ಆವಶ್ಯಕವಿದ್ದಾಗ ಮಾತ್ರ ಮಾನ್ಯತೆಯನ್ನು ಪಡೆದ ಹುಳು ನಿಯಂತ್ರಣಗಳನ್ನು ಬಳಸಿ."
      ],
      details:
        "ಹುಳು ನಿರ್ವಹಣೆ ಕ್ರಮಗಳು ಸುತ್ತಲೂ ಒಟ್ಟಾಗಲು ಸೂಕ್ತ ಕೃಷಿ ವಿಧಾನಗಳನ್ನು ಅನುಸರಿಸುವುದನ್ನು ಖಚಿತಪಡಿಸು."
    },
    {
      title: "ಹುಟ್ಟಣ",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ಹುಟ್ಟುವ ಹಬ್ಬಿನಲ್ಲಿ (11-12 ತಿಂಗಳು ನಂತರ) ಮರಗಳನ್ನು ಮುಚ್ಚುವುದರಿಂದ.",
        "ಪ್ರಶಿಕ್ಷಿತ ಸುಲಭತಾ ಉಪಕರಣಗಳನ್ನು ಅಥವಾ ಯಂತ್ರಗಳನ್ನು ಬಳಸಿ.",
        "45-60 ದಿನಗಳ ನಡುವೆ ಮರಗಳನ್ನು ತೆಗೆದು ಕೊಳ್ಳುವುದು.",
        "ಮರಗಳು ಪೂರ್ಣವಾಗಿ ಹುಟ್ಟಿದವೆಯೆಂದು ಖಚಿತಪಡಿಸಲು ಫಲಗಳನ್ನು ಚೆನ್ನಾಗಿ ಪರಿಶೀಲಿಸು.",
        "ಹುಟ್ಟಣ ಸಮಯದಲ್ಲಿ ಮರಗಳನ್ನು ಸೂಕ್ತವಾಗಿ ಹಿಡಿದುಕೊಳ್ಳಿ."
      ],
      details:
        "ಸರಿಯಾದ ಹುಟ್ಟಣ ವಿಧಾನಗಳು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಮರಗಳನ್ನು ಕೊಡುತ್ತವೆ."
    }
  ];

  const downloadPDF = () => {
    const content = document.getElementById('farming-guide-content');
    const opt = {
      margin: 1,
      filename: 'coconut-farming-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(content).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8" id="farming-guide-content">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk']">
          ತೆಂಗು ಗಿಡಗಾರಿಕೆ ಮಾರ್ಗದರ್ಶಿ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {farmingSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {step.icon}

                  <h2 className="text-2xl font-bold text-[#0090E1] font-['Space_Grotesk']">
                    {step.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">•</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                {expandedCard === index && (
                  <div className="mt-6">
                    <p className="text-gray-600 leading-relaxed">{step.details}</p>
                  </div>
                )}
                <button
                  className="mt-4 text-[#0090E1] hover:text-[#4CAF50] transition-colors"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {expandedCard === index ? 'ಕಡಿಮೆ കാണಿಸು' : 'ಹೆಚ್ಚು ಕಲಿಯಿರಿ'}
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
            PDF ಡೌನ್ಲೋಡ್ ಮಾಡಿ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmingGuideKannada;
