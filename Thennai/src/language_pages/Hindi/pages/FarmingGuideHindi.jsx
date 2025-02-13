import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuideHindi = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "भूमि तैयार करना",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "अच्छी जल निकासी वाली मिट्टी का चयन करें, pH स्तर 5.5-6.5 के बीच होना चाहिए।",
        "खेत को साफ करें, ताकि सूर्य की रोशनी अच्छे से पहुंचे।",
        "1 मी × 1 मी × 1 मी आकार की खाइयाँ 7.5 मी × 7.5 मी की दूरी पर खोदें।",
        "खाइयों में ऊपरी मिट्टी, उच्च जैविक सामग्री और रेत मिलाकर भरें।",
        "जल निकासी और जलभराव से बचने के लिए उचित ढलान और जलवायु स्थितियों को सुनिश्चित करें।",
      ],
      details:
        "नारियल कृषि में सफलता के लिए भूमि तैयारी अत्यधिक महत्वपूर्ण है। सही मिट्टी, जल निकासी और मूल निर्माण के लिए उपयुक्त वातावरण बनाने के लिए भूमि तैयारी आवश्यक है।"
    },
    {
      title: "बीजारोपण",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "उत्कृष्ट गुणवत्ता के बीजों का चयन करें जो भरोसेमंद नर्सरी से प्राप्त किए गए हों (11-12 महीने पुराने)।",
        "बारिश के मौसम की शुरुआत में बीजारोपण करने से बेहतर जड़ वृद्धि सुनिश्चित होती है।",
        "पौधों का आधार भूमि स्तर पर होना चाहिए।",
        "पहले कुछ हफ्तों में तुरंत सिंचाई और छायादार उपाय प्रदान करें।",
        "पौधों के बीच 7.5 मी की दूरी बनाए रखें।"
      ],
      details:
        "बीजारोपण चरण महत्वपूर्ण है। उच्च गुणवत्ता के बीज और सही रोपण तकनीकें अच्छी जीवन शक्ति और भविष्य में बेहतर परिणाम सुनिश्चित करती हैं।"
    },
    {
      title: "सिंचाई",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "जल का बेहतर उपयोग करने के लिए ड्रिप सिंचाई या पंप सिंचाई प्रणाली का उपयोग करें।",
        "जल की क्षति से बचते हुए मिट्टी की नमी बनाए रखें।",
        "गर्मी के मौसम में अधिक सिंचाई (15-20 लीटर प्रति पौधा) करें।",
        "बारिश के मौसम में सिंचाई कम करें ताकि जड़ सड़न की समस्याएँ न हों।",
        "मिट्टी की नमी की नियमित निगरानी करें और सिंचाई को उसी अनुसार समायोजित करें।"
      ],
      details:
        "नारियल बागवानी में सफलता के लिए सही सिंचाई अत्यंत आवश्यक है। शुरुआती देखभाल में निरंतर सिंचाई जरूरी है।"
    },
    {
      title: "उर्वरक उपयोग",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "समान NPK उर्वरक (500 ग्राम N, 320 ग्राम P2O5, और 1200 ग्राम K2O) का उपयोग करें।",
        "प्राकृतिक उर्वरक (25-50 किलोग्राम) प्रति पौधा साल में एक बार डालें।",
        "उर्वरक को दो या तीन चरणों में लागू करना बेहतर है।",
        "मिट्टी परीक्षण की सिफारिशों के आधार पर सूक्ष्म पोषक तत्वों का उपयोग करें।",
        "कृषि को नुकसान से बचने और मिट्टी की सेहत के लिए हरे-भरे उर्वरकों का पालन करें।"
      ],
      details:
        "उर्वरक उपयोग जिम्मेदारी से करने से स्थिर नारियल उत्पादन सुनिश्चित हो सकता है।"
    },
    {
      title: "कीट नियंत्रण",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "सफेद अंडे और सूक्ष्म कीटों की निगरानी करें।",
        "संवहनीय कीट प्रबंधन (IPM) रणनीतियाँ अपनाएं।",
        "बड़े कीट जाल और जैविक नियंत्रण विधियाँ उपयोग करें।",
        "फसल क्षेत्र को स्वच्छ बनाए रखें।",
        "जब आवश्यक हो, केवल प्रमाणित कीटनाशकों का उपयोग करें।"
      ],
      details:
        "कीट नियंत्रण विधियाँ नियमित कृषि प्रथाओं के आधार पर लागू होती हैं।"
    },
    {
      title: "फसल कटाई",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "फसल कटाई के समय (11-12 महीने बाद) नारियल इकट्ठा करें।",
        "प्रशिक्षित उभार तकनीक या मशीनों का उपयोग करें।",
        "45-60 दिनों के अंतराल में फसल कटाई जारी रखें।",
        "नारियल पूरी तरह से पकने की पुष्टि करने के लिए खोल का रंग जांचें।",
        "फसल कटाई के समय नारियल को सावधानीपूर्वक संभालें।"
      ],
      details:
        "सही फसल कटाई विधियाँ उच्च गुणवत्ता वाले नारियल प्रदान करती हैं।"
    }
  ];

  const डाउनलोडPDF = () => {
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
          नारियल कृषि गाइड
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
                  {expandedCard === index ? 'कम दिखाएँ' : 'अधिक जानें'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={डाउनलोडPDF}
            className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 font-['Space_Grotesk'] font-bold text-lg shadow-md"
          >
            PDF डाउनलोड करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmingGuideHindi;
