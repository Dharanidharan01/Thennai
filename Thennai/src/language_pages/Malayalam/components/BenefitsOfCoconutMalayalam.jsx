import React from 'react';
import { FaLeaf, FaHeart, FaWater, FaSeedling, FaBacon, FaSmile, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // നാവിഗേഷനുള്ള ലിങ്ക് ഇറക്കുമതി ചെയ്യുക
import '../components/BenefitsOfCoconutMalayalam.css';

const BenefitsOfCoconutMalayalam = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "സമൃദ്ധമായ പോഷകഗുണങ്ങൾ",
      description: "തേങ്ങ പോഷകഗുണങ്ങൾ നിറഞ്ഞവയാണ്, ഇത് ആകെ ആരോഗ്യത്തിന് വലിയ സഹായം നൽകുന്നു.",
      color: "#4CAF50", // പച്ച
    },
    {
      icon: <FaHeart />,
      title: "ഹൃദയാരോഗ്യം",
      description: "തേങ്ങ കൊളസ്റ്റ്രോൾ നില മെച്ചപ്പെടുത്തുകയും ഹൃദയാരോഗ്യത്തെ പിന്തുണയ്ക്കുകയും ചെയ്യുന്നു.",
      color: "#FF5722", // ചുവപ്പ്
    },
    {
      icon: <FaWater />,
      title: "ജലസന്തുലനം",
      description: "തേങ്ങാനീർ പ്രകൃതിദത്തമായ ഒരു ജലസന്തുലിത പാനീയമാണ്, ദേഹത്തിലെ ജലശേഷിയുള്ളതിന് ഉത്തമമാണ്.",
      color: "#2196F3", // നീല
    },
    {
      icon: <FaSeedling />,
      title: "പ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നു",
      description: "തേങ്ങയിൽ അടങ്ങിയിരിക്കുന്ന ആന്റി-ഓക്സിഡന്റുകൾ പ്രതിരോധശേഷി ശക്തമാക്കാൻ സഹായിക്കുന്നു.",
      color: "#8BC34A", // ഇളം പച്ച
    },
    {
      icon: <FaBacon />,
      title: "ഭാരനിയന്ത്രണത്തിന് സഹായിക്കുന്നു",
      description: "ആരോഗ്യകരമായ കൊഴുപ്പ് ഉൾപ്പെടെ ഉള്ളതിനാൽ തേങ്ങ ഭാരം നിയന്ത്രിക്കാനും മേട്ടബോളിസം മെച്ചപ്പെടുത്താനും സഹായിക്കുന്നു.",
      color: "#FFC107", // മഞ്ഞ
    },
    {
      icon: <FaSmile />,
      title: "ത്വക് ആരോഗ്യത്തെ മെച്ചപ്പെടുത്തുന്നു",
      description: "തേങ്ങാവെള്ളത്തിൽ ഈർപ്പം നിലനിർത്തുന്നതും പ്രകോപനം കുറയ്ക്കുന്നതും ഉള്ളതിനാൽ ത്വക് ആരോഗ്യത്തിന് ഉത്തമമാണ്.",
      color: "#9C27B0", // ഉർപ്പിൾ
    },
    {
      icon: <FaShieldAlt />,
      title: "മുടി ശക്തിപ്പെടുത്തുന്നു",
      description: "തേങ്ങെണ്ണ തലയോട്ടിയെ പോഷിപ്പിക്കുകയും, മുടിയുടലുകൾക്ക് ശക്തി നൽകുകയും ആരോഗ്യകരമായ മുടിവളർച്ചയ്ക്ക് സഹായിക്കുകയും ചെയ്യുന്നു.",
      color: "#3F51B5", // ഇണ്ടിഗോ
    },
    {
      icon: <FaCogs />,
      title: "ജീരണക്കൃത്യം പിന്തുണക്കുന്നു",
      description: "തേങ്ങ ആരോഗ്യകരമായ ആന്ത്രബാക്ടീരിയയെ പ്രോത്സാഹിപ്പിച്ചു ജീരണം മെച്ചപ്പെടുത്തുന്നു.",
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
