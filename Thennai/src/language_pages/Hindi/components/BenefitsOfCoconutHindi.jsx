import React from 'react';
import { FaLeaf, FaHeart, FaWater, FaSeedling, FaBacon, FaSmile, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../components/BenifitsOfCoconut.css';

const BenefitsOfCoconutHindi = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "पोषक तत्वों से भरपूर",
      description: "यह विटामिन और खनिजों से भरपूर है, जो क्षेत्र में स्वास्थ्य के लिए सहायक होते हैं।",
      color: "#4CAF50", // हरा
    },
    {
      icon: <FaHeart />,
      title: "हृदय स्वास्थ्य",
      description: "यह क्षेत्र में वसा के स्तर को सुधारने में मदद करता है और हृदय स्वास्थ्य का समर्थन करता है।",
      color: "#FF5722", // लाल
    },
    {
      icon: <FaWater />,
      title: "पानी का आदान-प्रदान",
      description: "यह क्षेत्र में एक प्राकृतिक जल आदान-प्रदान पेय के रूप में मौजूद है, जो शरीर के तरल संतुलन को बनाए रखने के लिए अच्छा है।",
      color: "#2196F3", // नीला
    },
    {
      icon: <FaSeedling />,
      title: "प्रतिरक्षा प्रणाली को बढ़ावा",
      description: "इसमें एंटीऑक्सीडेंट गुण होते हैं, जो आपकी सुरक्षा प्रणाली को मजबूत करने में मदद कर सकते हैं।",
      color: "#8BC34A", // हल्का हरा
    },
    {
      icon: <FaBacon />,
      title: "वजन घटाने में मदद",
      description: "यह स्वास्थ्यवर्धक वसा और शरीर के केंद्र को बढ़ाने वाले गुणों के कारण वजन प्रबंधन में मदद करता है।",
      color: "#FFC107", // पीला
    },
    {
      icon: <FaSmile />,
      title: "त्वचा स्वास्थ्य को बढ़ावा",
      description: "इसमें तेल प्रबंधन और एंटीऑक्सीडेंट गुण होते हैं, जो त्वचा स्वास्थ्य के लिए लाभकारी होते हैं।",
      color: "#9C27B0", // बैंगनी
    },
    {
      icon: <FaShieldAlt />,
      title: "बालों को मजबूत बनाता है",
      description: "इसमें तेल बालों के रोम को पोषण देता है, बालों के बाहरी हिस्सों को मजबूत करता है और स्वस्थ बालों की वृद्धि को बढ़ावा देता है।",
      color: "#3F51B5", // इंडिगो
    },
    {
      icon: <FaCogs />,
      title: "सही पाचन में मदद",
      description: "इसमें तेल पाचन को बेहतर बनाने में मदद करता है, साथ ही यह आंतों के स्वास्थ्य को बढ़ावा देता है और मल त्याग समस्याओं को ठीक करने में मदद करता है।",
      color: "#FF9800", // नारंगी
    }
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">नारियल के लाभ</h2>
      
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <motion.div
            className="benefit-card"
            key={index}
            whileHover={{ scale: 1.05 }} // जब आप इस पर माउस ले जाते हैं तो यह आकार में बड़ा होता है
            whileTap={{ scale: 0.95 }}  // जब आप इस पर क्लिक करते हैं तो आकार छोटा होता है
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon" style={{ color: benefit.color }}>
              {benefit.icon}
            </div>
            <h3 className="card-title">{benefit.title}</h3>
            <p className="card-description">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      {/* और जानें बटन */}
      <div className="know-more-button-container">
        <Link to="/BenefitsOfCoconutHindi" className="know-more-button">
          और जानें
        </Link>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutHindi;
