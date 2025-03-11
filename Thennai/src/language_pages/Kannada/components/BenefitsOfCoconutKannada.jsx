import React from "react";
import {
  FaLeaf,
  FaHeart,
  FaWater,
  FaSeedling,
  FaBacon,
  FaSmile,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../components/BenifitsOfCoconut.css";

const BenefitsOfCoconutKannada = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "ಪೋಷಕಾಂಶಗಳಲ್ಲಿ ಶ್ರೀಮಂತ", // Nutrient-Rich
      description:
        "ತೆಂಗಿನಕಾಯಿ ಪ್ರಮುಖ ವಿಟಾಮಿನ್‌ಗಳು ಮತ್ತು ಖನಿಜಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ, ಆರೋಗ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.",
      color: "#4CAF50", // Green
    },
    {
      icon: <FaHeart />,
      title: "ಹೃದಯದ ಆರೋಗ್ಯ", // Heart Health
      description:
        "ತೆಂಗಿನಕಾಯಿ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಮಟ್ಟವನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ಹೃದಯದ ಆರೋಗ್ಯವನ್ನು ಬೆಂಬಲಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      color: "#FF5722", // Red
    },
    {
      icon: <FaWater />,
      title: "ನೀರಿನ ಪೂರೈಕೆ", // Hydration
      description:
        "ತೆಂಗಿನಕಾಯಿ ನೀರು ಶಕ್ತಿಯುತ ಹೈಡ್ರೇಶನ್ ಪಾನೀಯವಾಗಿದೆ, ದೇಹದ ದ್ರವ ಮಟ್ಟವನ್ನು ನಿರ್ವಹಿಸಲು ಉತ್ತಮ.",
      color: "#2196F3", // Blue
    },
    {
      icon: <FaSeedling />,
      title: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸುತ್ತದೆ", // Boosts Immunity
      description:
        "ತೆಂಗಿನಕಾಯಿಯಲ್ಲಿನ ಆಂಟಿ-ಆಕ್ಸಿಡೆಂಟ್‌ಗಳು ನಿಮ್ಮ ರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಲಪಡಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
      color: "#8BC34A", // Light Green
    },
    {
      icon: <FaBacon />,
      title: "ತೂಕ ನಷ್ಟಕ್ಕೆ ಬೆಂಬಲ", // Supports Weight Loss
      description:
        "ತೆಂಗಿನಕಾಯಿಯಲ್ಲಿರುವ ಆರೋಗ್ಯಕರ ಕೊಬ್ಬುಗಳು ತೂಕವನ್ನು ನಿರ್ವಹಿಸಲು ಮತ್ತು ದೇಹದ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತವೆ.",
      color: "#FFC107", // Yellow
    },
    {
      icon: <FaSmile />,
      title: "ಚರ್ಮದ ಆರೋಗ್ಯ", // Skin Health
      description:
        "ತೆಂಗಿನಕಾಯಿಯ ತೈಲವು ಚರ್ಮದ ಆರೈಕೆಗೆ ಬೆಂಬಲ ನೀಡುತ್ತದೆ, ಉತ್ತಮ ಚರ್ಮದ ಆರೋಗ್ಯವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.",
      color: "#9C27B0", // Purple
    },
    {
      icon: <FaShieldAlt />,
      title: "ಕೂದಲ ಆರೋಗ್ಯ", // Hair Strength
      description:
        "ತೆಂಗಿನಕಾಯಿಯ ತೈಲವು ಕೂದಲಿಗೆ ಪೋಷಣೆಯನ್ನು ನೀಡುತ್ತದೆ ಮತ್ತು ಆರೋಗ್ಯಕರ ಕೂದಲು ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      color: "#3F51B5", // Indigo
    },
    {
      icon: <FaCogs />,
      title: "ಸರಿಯಾದ ಜೀರ್ಣಕ್ರಿಯೆಗೆ ಬೆಂಬಲ", // Aids Digestion
      description:
        "ತೆಂಗಿನಕಾಯಿಯ ತೈಲವು ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಉತ್ತಮ ಹಜಮೆಗಾಗಿ ನೆರವಾಗುತ್ತದೆ.",
      color: "#FF9800", // Orange
    },
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">ತೆಂಗಿನಕಾಯಿ ಲಾಭಗಳು</h2>

      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <motion.div
            className="benefit-card"
            key={index}
            whileHover={{ scale: 1.05 }} // Slightly enlarges on hover
            whileTap={{ scale: 0.95 }} // Slightly shrinks on tap
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

      {/* Learn More Button */}
      <div className="know-more-button-container">
        <Link to="/BenefitsOfCoconutKannada" className="know-more-button">
          ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ {/* Learn More */}
        </Link>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutKannada;
