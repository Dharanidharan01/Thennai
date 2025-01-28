import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
// import NavBar from '../components/NavBar';
import NavBar from '../../Malayalam/components/NavBarMalayalam';

// ചിത്രങ്ങൾ ഇറക്കുമതി ചെയ്യുക
import teamImg from "../../../assets/team1.png";
import missionImg from "../../../assets/mi.png";
import visionImg from "../../../assets/vi.png";
import cofounder1Img from "../../../assets/co1.png";
import cofounder2Img from "../../../assets/co2.png";

const AboutUsMalayalam = () => {
  const coFounders = [
    {
      name: "കൽയാൻ പി ആർ",
      designation: "കോ-ഫൗണ്ടർ - സിഇഒ",
      linkedin: "https://www.linkedin.com/in/kalyan-p-r-b99a81223/",
      image: cofounder1Img
    },
    {
      name: "സുരേന്ദ്ര ബി",
      designation: "കോ-ഫൗണ്ടർ - സിടിഒ",
      linkedin: "https://www.linkedin.com/in/surendar1895/",
      image: cofounder2Img
    }
  ];

  return (
   
    <div className="min-h-screen bg-black-50 font-['Space_Grotesk']">
      {/* ഹെഡർ സെക്ഷൻ */}
      <NavBar/>
      <header className="bg-gradient-to-r from-[#4CAF50] to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ഞങ്ങളെപ്പറ്റി
          </motion.h1>
          <motion.p 
            className="text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            നവീകരിക്കുക, വളർത്തുക, ഉയർത്തുക
          </motion.p>
        </div>
      </header>

      {/* തെന്നൈ കുറിച്ച് സെക്ഷൻ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl font-bold text-[#0090E1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              തെന്നൈ കുറിച്ച്
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <strong>തെന്നൈ</strong> ൽ, നമുക്ക് തേങ്ങാകൃഷികാർക്ക് ആവശ്യമായ അറിവ്, ഉപകരണങ്ങൾ, സാമൂഹിക ബന്ധങ്ങൾ എന്നിവ നൽകാൻ we are committed to. 
              ഞങ്ങളുടെ ദൗത്യം കൃഷി കൂടുതൽ എളുപ്പവും, ലാഭകരവുമായ, ദൈർഘ്യമുള്ളതുമായ രീതിയിൽ നടത്താൻ സഹായിക്കുന്ന വിഭവങ്ങളും നവീനമായ പരിഹാരങ്ങളും നൽകലാണ്.
            </motion.p>
          </div>
          <motion.div 
            className="rounded-lg overflow-hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={teamImg} alt="ഞങ്ങളുടെ ടീം" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ദൗത്യം & ദർശനം സെക്ഷൻ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={missionImg} alt="ഞങ്ങളുടെ ദൗത്യം" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">ഞങ്ങളുടെ ദൗത്യം</h2>
            <p className="text-gray-700">
              <strong>തെന്നൈ</strong> ൽ, നാം ഫാമിങ്ങിന്റെ ദൃഢമായ പരിഷ്കാരം ലക്ഷ്യമിട്ട് പ്രവർത്തിക്കുന്നു, ഫലപ്രദതയും, ലാഭകരതയും, ദൈർഘ്യമുള്ളതുമായ രീതിയിൽ പുതിയ പരിഹാരങ്ങൾ അവതരിപ്പിച്ച്, കൃഷിയെ ഉയർത്തുന്നു.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={visionImg} alt="ഞങ്ങളുടെ ദർശനം" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">ഞങ്ങളുടെ ദർശനം</h2>
            <p className="text-gray-700">
              സുസ്ഥിരമായ ഭാവിക്കായി സാങ്കേതികവിദ്യ അടിസ്ഥാനമാക്കിയുള്ള പരിഹാരങ്ങൾ വഴി കൃഷിയെ പരിഷ്കരിച്ച്, കൃഷി മുന്നോട്ട് നയിക്കുക.
            </p>
          </motion.div>
        </div>
      </section>

      {/* മൂല്യങ്ങൾ സെക്ഷൻ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">തെന്നൈയിലെ പ്രധാന മൂല്യങ്ങൾ</h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[ 
              { icon: FaBalanceScale, title: "സത്യസന്ധത", desc: "എല്ലാ പ്രവർത്തനങ്ങളിലും ഇപ്രകാരം, ധരിക്കുക, പരസ്പരം സഹകരിക്കുക." },
              { icon: FaHandshake, title: "സഹകരണം", desc: "അറിവ് പങ്കുവെക്കുക, പ്രവർത്തനങ്ങൾ ത്തില്‍ ഒന്നിച്ച് മുന്നോട്ട് പോവുക." },
              { icon: FaLightbulb, title: "നവീകരണം", desc: "നമുക്ക് പുത്തൻ സൃഷ്ടികൾ സാധ്യമാക്കുക." },
              { icon: FaUsers, title: "ദായവുള്ളness", desc: "സ്വകാര്യ ജോലി കാര്യത്തിന് ബാധ്യസ്ഥത പ്രദാനം ചെയ്യുക." }
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

      {/* കോ-ഫൗണ്ടർസ് സെക്ഷൻ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">ഞങ്ങളുടെ ടീമിനെ കാണുക</h2>
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
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
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

export default AboutUsMalayalam;
