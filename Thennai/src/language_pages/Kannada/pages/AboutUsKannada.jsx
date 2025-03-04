import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Import images
import teamImg from "../../../assets/team.png";
import missionImg from "../../../assets/mi.png";
import visionImg from "../../../assets/vi.png";
import cofounder1Img from "../../../assets/co1.png";
import cofounder2Img from "../../../assets/co2.png";
import NavBarKannada from "../components/NavBarKannada";
import ScrollToTopTamil from "../components/ScrollToTopKannada";

const AboutUsTamil = () => {
  const coFounders = [
    {
      name: "ಕಲ್ಯಾಣ್ ಪಿ ಆರ್",
      designation: "ಸಂಸ್ಥಾಪಕ - ಮುಖ್ಯ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ",
      linkedin: "https://www.linkedin.com/in/kalyan-p-r-b99a81223/",
      image: cofounder1Img,
    },
    {
      name: "ಸುರೇಂದ್ರ ಪಿ",
      designation: "ಸಂಸ್ಥಾಪಕ - ತಂತ್ರಜ್ಞಾನ ನಾಯಕ",
      linkedin: "https://www.linkedin.com/in/surendar1895/",
      image: cofounder2Img,
    },
  ];

  return (
    <div className="min-h-screen bg-black-50 font-['Space_Grotesk']">
      <NavBarKannada />
      <ScrollToTopTamil />
      {/* Title Section */}
      <header className="bg-gradient-to-r from-[#4CAF50] to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          ನಮ್ಮ ಬಗ್ಗೆ
          </motion.h1>
          <motion.p
            className="text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ಹೊಸತನ, ಬೆಳವಣಿಗೆ, ಉತ್ತಮತೆ
          </motion.p>
        </div>
      </header>

      {/* About Coconut */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2
              className="text-4xl font-bold text-[#0090E1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ತೇಂಗಾಯಿ ಬಗ್ಗೆ
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              ನ್ನೈನಲ್ಲಿ ನಾವು ತೆಂಗಿನ ಬೆಳೆಗಾರರು ಅಭಿವೃದ್ಧಿ ಹೊಂದಲು ಅಗತ್ಯವಾದ ಜ್ಞಾನ, ಪರಿಕರಗಳು ಮತ್ತು ಸಮುದಾಯ ಸಂಪರ್ಕಗಳೊಂದಿಗೆ ಅವರನ್ನು ಬೆಂಬಲಿಸಲು ಸಮರ್ಪಿತರಾಗಿದ್ದೇವೆ.
            </motion.p>
          </div>
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={teamImg} alt="ನಮ್ಮ ತಂಡ" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={missionImg} alt="ನಮ್ಮ ಗುರಿ" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">ನಮ್ಮ ಗುರಿ</h2>
            <p className="text-gray-700">
              <strong>ಥೆನ್ನೈ</strong>ನಲ್ಲಿ, ನಾವು ಕೃಷಿಯನ್ನು ಪುನರ್‌ನವೀಕರಿಸಲು ಉದ್ದೇಶಿಸಿದೆವು, ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಸುಧಾರಿಸಲು, ಲಾಭದಾಯಕತೆ ಹೆಚ್ಚಿಸಲು ಮತ್ತು ತಾಳಮೇಳವನ್ನು ಉತ್ತೇಜಿಸಲು ಆವಿಷ್ಕಾರಾತ್ಮಕ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುವುದರ ಮೂಲಕ ಕೃಷಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು=
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={visionImg} alt="ನಮ್ಮ ದೃಷ್ಟಿಕೋನ" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">ನಮ್ಮ ದೃಷ್ಟಿಕೋನ</h2>
            <p className="text-gray-700">
              ಕೃಷಿಗೆ ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳನ್ನು ಉಪಯೋಗಿಸಿ ಹೊಸ ಮತ್ತು ಶಾಶ್ವತ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ದೃಷ್ಟಿ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">
            ತೇಂಗಾಯಿಯ ಪ್ರಮುಖ ಮೌಲ್ಯಗಳು
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
                title: "ನೈತಿಕತೆ",
                desc: "ಪ್ರತಿ ಕ್ರಿಯೆಯಲ್ಲಿ ನೈತಿಕತೆ, ನಿಯಮಗಳು ಮತ್ತು ಸ್ಪಷ್ಟತೆ ಕಾಪಾಡುವುದು.",
              },
              {
                icon: FaHandshake,
                title: "ಒಪ್ಪಂದ",
                desc: "ಅறಿವನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ ತಂಡದ ಕೆಲಸವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
              },
              {
                icon: FaLightbulb,
                title: "ಹೊಸತನ",
                desc: "ನಮ್ಮ ಕೆಲಸಗಳಲ್ಲಿ ಸದಾ ಸೃಜನಶೀಲತೆ ಮತ್ತು ಹೊಸತನವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
              },
              {
                icon: FaUsers,
                title: "ಜವಾಬ್ದಾರಿ",
                desc: "ಪ್ರತಿ ಕಾರ್ಯವನ್ನು ಸಮರ್ಪಣೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯೊಂದಿಗೆ ನಿಭಾಯಿಸುವುದು.",
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

      {/* Founders */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">ನಮ್ಮ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ</h2>
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

export default AboutUsTamil;
