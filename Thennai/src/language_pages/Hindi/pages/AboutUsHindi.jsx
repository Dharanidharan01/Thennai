import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Import images
import teamImg from "../../../assets/team.png";
import missionImg from "../../../assets/mi.png";
import visionImg from "../../../assets/vi.png";
import cofounder1Img from "../../../assets/co1.png";
import cofounder2Img from "../../../assets/co2.png";
import NavBarHindi from "../components/NavBarHindi";
import ScrollToTopHindi from "../components/ScrollToTopHindi";

const AboutUsHindi = () => {
  const coFounders = [
    {
      name: "कल्याण पी आर",
      designation: "संस्थापक - मुख्य कार्यकारी अधिकारी",
      linkedin: "https://www.linkedin.com/in/kalyan-p-r-b99a81223/",
      image: cofounder1Img,
    },
    {
      name: "सुरेन्दर पी",
      designation: "संस्थापक - तकनीकी प्रमुख",
      linkedin: "https://www.linkedin.com/in/surendar1895/",
      image: cofounder2Img,
    },
  ];

  return (
    <div className="min-h-screen bg-black-50 font-['Space_Grotesk']">
      <NavBarHindi />
      <ScrollToTopHindi /> 
      {/* शीर्षक अनुभाग */}
      <header className="bg-gradient-to-r from-[#4CAF50] to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            हमारे बारे में
          </motion.h1>
          <motion.p
            className="text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            नवाचार, विकास, उन्नति
          </motion.p>
        </div>
      </header>

      {/* कंपनी के बारे में */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2
              className="text-4xl font-bold text-[#0090E1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              हमारे बारे में
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <strong>हम</strong> किसान समुदाय के लिए सूचना, उपकरण और सामाजिक नेटवर्क प्रदान करने के लिए प्रतिबद्ध हैं। 
              हमारा उद्देश्य कृषि को सरल, लाभकारी और टिकाऊ बनाना है।
            </motion.p>
          </div>
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={teamImg} alt="हमारी टीम" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* मिशन और दृष्टि */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={missionImg} alt="हमारा मिशन" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">हमारा मिशन</h2>
            <p className="text-gray-700">
              <strong>हमारा मिशन</strong> कृषि को विकसित, लाभकारी और टिकाऊ बनाने के लिए तकनीकी समाधानों को प्रदान करना है।
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={visionImg} alt="हमारी दृष्टि" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">हमारी दृष्टि</h2>
            <p className="text-gray-700">
              तकनीकी समाधानों के माध्यम से कृषि के लिए एक नवाचारी और स्थिर भविष्य बनाना हमारी दृष्टि है।
            </p>
          </motion.div>
        </div>
      </section>

      {/* महत्वपूर्ण मूल्य */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">
            हमारे महत्वपूर्ण मूल्य
          </h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[ 
              {
                icon: FaBalanceScale,
                title: "ईमानदारी",
                desc: "प्रत्येक कार्य में ईमानदारी, नैतिकता और पारदर्शिता बनाए रखना।",
              },
              {
                icon: FaHandshake,
                title: "सहयोग",
                desc: "ज्ञान को साझा करके टीमवर्क को बढ़ावा देना।",
              },
              {
                icon: FaLightbulb,
                title: "नवाचार",
                desc: "हमेशा अपनी परियोजनाओं में रचनात्मकता को बढ़ावा देना।",
              },
              {
                icon: FaUsers,
                title: "जवाबदेही",
                desc: "प्रत्येक कार्य में जिम्मेदारी और उत्तरदायित्व के साथ भाग लेना।",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* संस्थापक टीम */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">हमारी टीम से मिलें</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {coFounders.map((founder, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img src={founder.image} alt={founder.name} className="w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <FaLinkedin className="w-12 h-12 hover:text-blue-400 transition-colors" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-gray-600">{founder.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHindi;
