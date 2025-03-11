import React from 'react';
import { FaLeaf, FaHeart, FaWater, FaSeedling, FaBacon, FaSmile, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/BenefitsOfCoconutMalayalam.css';

const BenefitsOfCoconutMalayalam = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "സമൃദ്ധമായ പോഷകഗുണങ്ങൾ",
      description: "തേങ്ങ പോഷകങ്ങൾ നിറഞ്ഞതാണ്, മൊത്തത്തിലുള്ള ആരോഗ്യത്തിന് വലിയ സഹായം നൽകുന്നു.",
      color: "#4CAF50", // പച്ച
    },
    {
      icon: <FaHeart />,
      title: "ഹൃദയാരോഗ്യം",
      description: "തേങ്ങ കൊളസ്ട്രോൾ നില മെച്ചപ്പെടുത്തി ഹൃദയാരോഗ്യത്തെ പിന്തുണയ്ക്കുന്നു.",
      color: "#FF5722", // ചുവപ്പ്
    },
    {
      icon: <FaWater />,
      title: "ജലസന്തുലനം",
      description: "തേങ്ങാവെള്ളം പ്രകൃതിദത്തമായ ജലസന്തുലന പാനീയമാണ്, ശരീരത്തിന് ജലാംശം നിലനിർത്താൻ ഉത്തമം.",
      color: "#2196F3", // നീല
    },
    {
      icon: <FaSeedling />,
      title: "പ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നു",
      description: "തേങ്ങയിലെ ആൻ്റിഓക്സിഡൻ്റുകൾ പ്രതിരോധശേഷിയെ ശക്തിപ്പെടുത്താൻ സഹായിക്കുന്നു.",
      color: "#8BC34A", // ഇളം പച്ച
    },
    {
      icon: <FaBacon />,
      title: "ഭാരനിയന്ത്രണത്തിന് സഹായിക്കുന്നു",
      description: "ആരോഗ്യകരമായ കൊഴുപ്പ് അടങ്ങിയ തേങ്ങ ഭാരം നിയന്ത്രിക്കാനും ഉപാപചയം മെച്ചപ്പെടുത്താനും സഹായിക്കുന്നു.",
      color: "#FFC107", // മഞ്ഞ
    },
    {
      icon: <FaSmile />,
      title: "ത്വക്കിന്റെ ആരോഗ്യം മെച്ചപ്പെടുത്തുന്നു",
      description: "തേങ്ങാവെള്ളം ഈർപ്പം നിലനിർത്തി ത്വക്കിന്റെ ആരോഗ്യത്തിന് മികച്ച പിന്തുണ നൽകുന്നു.",
      color: "#9C27B0", // പർപ്പിൾ
    },
    {
      icon: <FaShieldAlt />,
      title: "മുടി ശക്തിപ്പെടുത്തുന്നു",
      description: "തേങ്ങ എണ്ണ തലയോട്ടിയെ പോഷിപ്പിക്കുകയും മുടിവേര് ശക്തമാക്കുകയും ആരോഗ്യകരമായ മുടിവളർച്ചയ്ക്ക് സഹായിക്കുകയും ചെയ്യുന്നു.",
      color: "#3F51B5", // ഇൻഡിഗോ
    },
    {
      icon: <FaCogs />,
      title: "ദഹനത്തെ പിന്തുണയ്ക്കുന്നു",
      description: "തേങ്ങ കുടലിലെ ആരോഗ്യകരമായ ബാക്ടീരിയയെ പ്രോത്സാഹിപ്പിച്ച് ദഹനം മെച്ചപ്പെടുത്തുന്നു.",
      color: "#FF9800", // ഓറഞ്ച്
    }
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">തേങ്ങയുടെ ഗുണങ്ങൾ</h2>
      
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <motion.div
            className="benefit-card"
            key={index}
            whileHover={{ scale: 1.05 }} // ഹോവർ ചെയ്താൽ ആവേശകരമായ പ്രഭാവം
            whileTap={{ scale: 0.95 }}  // ടാപ്പ് ചെയ്താൽ മികച്ച അനുഭവം
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

      {/* കൂടുതൽ അറിയുക ബട്ടൺ */}
      <div className="know-more-button-container">
        <Link to="/BenefitsOfCoconutMalayalam" className="know-more-button">
          കൂടുതൽ അറിയുക
        </Link>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutMalayalam;