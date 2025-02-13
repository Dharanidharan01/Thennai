import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll, Dumbbell } from 'lucide-react';

const BenefitsOfCoconutHindi = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "पोषण मूल्य",
      icon: <Apple className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "मनोकुनेश, ताम्र और आयरन जैसे महत्वपूर्ण खनिजों से भरपूर (हड्डी के स्वास्थ्य में मदद करता है)।",
        "अधिक ऊर्जा और मस्तिष्क के कार्य को समर्थन देने के लिए मिडल-चेन ट्राइग्लिसराइड्स (MCTs) होते हैं।",
        "उत्कृष्ट आहार फाइबर (7g में) पाचन स्वास्थ्य और रक्त शर्करा स्तर बनाए रखने में मदद करता है।",
        "पोटैशियम, मैग्नीशियम और सोडियम जैसे प्राकृतिक खनिज शरीर के पानी के संतुलन को बेहतर बनाते हैं।",
        "विटामिन E और K से युक्त, यह एंटीऑक्सीडेंट सुरक्षा और हड्डी के स्वास्थ्य में मदद करता है।"
      ],
      details: "नारियल कई पोषक तत्वों से भरपूर एक प्राकृतिक खजाना है। इसमें MCTs होते हैं जो शरीर को तेज ऊर्जा प्रदान करते हैं और मानसिक कल्याण में सुधार करते हैं। एक कप नारियल में 283 कैलोरी, 7g फाइबर, 3g प्रोटीन और विभिन्न खनिज होते हैं।"
    },
    {
      title: "हृदय स्वास्थ्य",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "यह अच्छे HDL कोलेस्ट्रॉल स्तर को बढ़ाता है और LDL को नियंत्रित करता है।",
        "लौरिक एसिड रक्त वाहिकाओं में सूजन और रुकावट को कम करने में मदद करता है।",
        "समान रक्तचाप बनाए रखने में पोटैशियम मदद करता है।",
        "एंटीऑक्सीडेंट हृदय कोशिकाओं को ऑक्सीडेटिव तनाव से बचाते हैं।",
        "यह सूजन-रोधी गुणों से हृदय क्रिया में सुधार करता है।"
      ],
      details: "नारियल के तेल में मौजूद वसा अम्ल फायदेमंद होते हैं, और इसका संयोजन हृदय स्वास्थ्य में सुधार करता है। विशेष रूप से लौरिक एसिड, जो नारियल के तेल में 50% होता है।"
    },
    {
      title: "मस्तिष्क कार्य",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "MCTs मस्तिष्क कोशिकाओं को त्वरित ऊर्जा प्रदान करते हैं।",
        "केटोन्स तंत्रिका संबंधी विकारों को रोकने में मदद कर सकते हैं।",
        "यह तंत्रिका स्वास्थ्य को बढ़ावा देने वाले प्राकृतिक यौगिकों से भरा हुआ है।",
        "यह याददाश्त और सीखने की क्षमता में सुधार करता है।",
        "यह तंत्रिका ऊतकों में सूजन को कम करता है और मानसिक गिरावट को रोकता है।"
      ],
      details: "नारियल के MCTs मस्तिष्क के कार्य को बढ़ावा देने में महत्वपूर्ण भूमिका निभाते हैं। यह मस्तिष्क को आवश्यक ऊर्जा प्रदान करने के लिए जल्दी से बदल जाते हैं।"
    },
    {
      title: "प्रतिरक्षा (Immunity)",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "लौरिक एसिड मोनोलौरिन में बदलकर वायरस को मारने में मदद करता है।",
        "एंटीऑक्सीडेंट ऑक्सीडेटिव तनाव को कम करते हैं।",
        "यह सफेद रक्त कोशिकाओं की कार्यक्षमता को बढ़ाता है।",
        "यह हानिकारक बैक्टीरिया और कवकों को मारने में मदद करता है।",
        "यह अपनी प्राकृतिक रोग प्रतिरोधक क्षमता को मजबूत करता है।"
      ],
      details: "नारियल की प्रतिरक्षा-समर्थक गुणों को लौरिक एसिड द्वारा प्रमाणित किया गया है। यह लौरिक एसिड कई वायरस और बैक्टीरिया को मारने में मदद करता है।"
    }
    // अन्य अनुवाद यहां जोड़ें...
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
          <img
            src="src/assets/logo.png" // Replace with the actual logo path
            alt="Logo"
            className="logo-image w-auto h-auto mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk'] animate-fade-in">
          नारियल के फायदे
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
                  {expandedCard === index ? 'कम दिखाएं' : 'और जानें'}
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
            पीडीएफ डाउनलोड करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutHindi;
