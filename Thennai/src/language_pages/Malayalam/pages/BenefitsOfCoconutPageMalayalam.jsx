import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll, Dumbbell } from 'lucide-react';

const BenefitsOfCoconutMalayalam = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "പോഷക ഗുണങ്ങൾ",
      icon: <Apple className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "മാംഗനീസ്, ചെമ്പ്, ഇരുമ്പ് തുടങ്ങിയ പ്രധാന ധാതുക്കൾ അടങ്ങിയിരിക്കുന്നു (എല്ലിന്റെ ആരോഗ്യത്തിന് സഹായകം).",
        "മധ്യ-ശൃംഖല ട്രൈഗ്ലിസറൈഡുകൾ (MCTs) ശക്തി നൽകുകയും മസ്തിഷ്ക പ്രവർത്തനത്തെ പിന്തുണയ്ക്കുകയും ചെയ്യുന്നു.",
        "ഉയർന്ന നാരുകൾ (7g) ദഹന ആരോഗ്യവും ശരീര താപനിലയും നിലനിർത്താൻ സഹായിക്കുന്നു.",
        "പൊട്ടാസ്യം, മഗ്നീഷ്യം, സോഡിയം എന്നിവ ജലാംശം നിലനിർത്തുന്നു.",
        "E, K വിറ്റാമിനുകൾ ആന്റിഓക്‌സിഡന്റ് സംരക്ഷണവും എല്ലിന്റെ ആരോഗ്യവും നൽകുന്നു."
      ],
      details: "തേങ്ങയിൽ ധാരാളം പോഷകങ്ങൾ അടങ്ങിയിരിക്കുന്നു, ഇത് നിന്റെ ആരോഗ്യം മെച്ചപ്പെടുത്തുന്നു. MCT-കൾ ശരീരത്തിന് വേഗത്തിൽ ശക്തി നൽകുകയും മസ്തിഷ്ക ആരോഗ്യത്തെ പിന്തുണയ്ക്കുകയും ചെയ്യുന്നു. ഒരു കപ്പ് തേങ്ങയിൽ 283 കലോറി, 7g നാരുകൾ, 3g പ്രോട്ടീൻ, നിരവധി ധാതുക്കൾ എന്നിവ അടങ്ങിയിരിക്കുന്നു."
    },
    {
      title: "ഹൃദയാരോഗ്യം",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "നല്ല HDL കൊളസ്‌ട്രോൾ അളവ് വർദ്ധിപ്പിക്കുകയും LDL അളവുകൾ സന്തുലിതമാക്കുകയും ചെയ്യുന്നു.",
        "ലോറിക് ആസിഡ് രക്തം കട്ടപിടിക്കുന്നതിനെതിരെ പ്രവർത്തിക്കുന്നു.",
        "പൊട്ടാസ്യം രക്തസമ്മർദ്ദം സന്തുലിതമായി നിലനിർത്താൻ സഹായിക്കുന്നു.",
        "ആന്റിഓക്‌സിഡന്റുകൾ ഹൃദയകോശങ്ങളെ ഓക്‌സിഡേറ്റീവ് സമ്മർദ്ദത്തിൽ നിന്ന് സംരക്ഷിക്കുന്നു.",
        "ആന്റി-ഇൻഫ്ലമേറ്ററി ഗുണങ്ങൾ രക്തചംക്രമണവും ഹൃദയ പ്രവർത്തനവും മെച്ചപ്പെടുത്തുന്നു."
      ],
      details: "തേങ്ങയിലെ കൊഴുപ്പ് ആസിഡുകൾ ഹൃദയാരോഗ്യത്തിന് സഹായകമാണ്. പ്രത്യേകിച്ച് ലോറിക് ആസിഡ്, തേങ്ങാ കൊഴുപ്പിന്റെ 50% അടങ്ങിയിരിക്കുന്നത്, ഹൃദയത്തിന് ഗുണം ചെയ്യുന്നു."
    },
    {
      title: "മസ്തിഷ്ക ആരോഗ്യം",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "MCT-കൾ മസ്തിഷ്ക കോശങ്ങൾക്ക് എളുപ്പത്തിൽ ശക്തി നൽകുന്നു.",
        "കീറ്റോണുകൾ നാഡികളുടെ പുനരുജ്ജനത്തിന് സഹായിക്കുന്നു.",
        "നാഡി ആരോഗ്യത്തെ പിന്തുണയ്ക്കുന്ന പ്രകൃതിദത്ത ചേരുവകൾ അടങ്ങിയിരിക്കുന്നു.",
        "ഓർമ്മശക്തിയും പഠനശേഷിയും മെച്ചപ്പെടുത്തുന്നു.",
        "നാഡീവീക്കം കുറയ്ക്കുകയും മാനസിക ബുദ്ധിമുട്ടുകൾ തടയുകയും ചെയ്യുന്നു."
      ],
      details: "തേങ്ങയിലെ MCT-കൾ മസ്തിഷ്ക ആരോഗ്യത്തിന് നിർണായക പങ്ക് വഹിക്കുന്നു. ഇവ മസ്തിഷ്കത്തിന് ആവശ്യമായ ശക്തി എളുപ്പത്തിൽ നൽകി ബുദ്ധിശക്തി വർദ്ധിപ്പിക്കുന്നു."
    },
    {
      title: "പ്രതിരോധശക്തി",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ലോറിക് ആസിഡ് മോണോലോറിനായി മാറി വൈറസുകൾക്കെതിരെ പ്രവർത്തിക്കുന്നു.",
        "ആന്റിഓക്‌സിഡന്റുകൾ ഓക്‌സിഡേറ്റീവ് സമ്മർദ്ദം കുറയ്ക്കുന്നു.",
        "ജലാംശം നിലനിർത്തി രക്തകോശങ്ങൾ സജീവമാക്കുന്നു.",
        "ദോഷകരമായ ബാക്ടീരിയകളെയും ഫംഗസുകളെയും നശിപ്പിക്കാൻ സഹായിക്കുന്നു.",
        "രോഗപ്രതിരോധ ശേഷി ശക്തിപ്പെടുത്തുന്നു."
      ],
      details: "തേങ്ങയിലെ പ്രതിരോധശക്തി ഗുണങ്ങൾ ലോറിക് ആസിഡ് വഴി തെളിയുന്നു. ഈ ആസിഡ് വൈറസുകളെയും ബാക്ടീരിയകളെയും എളുപ്പത്തിൽ നശിപ്പിച്ച് നിന്റെ ആരോഗ്യം സംരക്ഷിക്കുന്നു."
    }
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
            src="../../../assets/logo.png" // Adjusted to match earlier imports
            alt="Logo"
            className="logo-image w-auto h-auto mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk'] animate-fade-in">
          തേങ്ങയുടെ ഗുണങ്ങൾ
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
                  {expandedCard === index ? 'കുറച്ചത് കാണുക' : 'കൂടുതൽ അറിയുക'}
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
            PDF ഡൗൺലോഡ് ചെയ്യുക
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfCoconutMalayalam;