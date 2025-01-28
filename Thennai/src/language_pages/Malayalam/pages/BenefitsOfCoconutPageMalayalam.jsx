import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll, Dumbbell } from 'lucide-react';


const BenefitsOfCoconutMalayalam = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "പോഷക മൂല്യം",
      icon: <Apple className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "മനകൻസ്യൂ, താമ്രം, ഇരുമ്പ് പോലുള്ള പ്രധാന കനിമുകൾ അടങ്ങിയിരിക്കുന്നു (എലുപ്പിന്റെ ആരോഗ്യത്തിന് സഹായകരം).",
        "ഉയർന്ന ശക്തി, മസ്തിഷ്ക പ്രവർത്തനത്തിനുള്ള സഹായം നൽകുന്ന മദ്ധ്യ-ചക്രവാത കിരീടട്രൈഗ്ലിസൈറൈഡുകൾ (MCTs) അടങ്ങിയിരിക്കുന്നു.",
        "അസാധാരണമായ നാര്സംവരണം (7g) ജീർണാരോഗ്യവും ശരീരത്തിലെ ചൂടിന്റെ ലവലും പരിരക്ഷിക്കാൻ സഹായിക്കുന്നു.",
        "പൊട്ടാസ്യം, മഗ്നീഷ്യം, സോഡിയം തുടങ്ങിയ പ്രകൃതിദത്ത ഖനിജങ്ങൾ ജലസമത്വം മെച്ചപ്പെടുത്തുന്നു.",
        "E, K വിറ്റാമിനുകൾ ആന്റി ഓക്സിഡന്റ് സംരക്ഷണവും എലുപ്പത്തിന്റെ ആരോഗ്യത്തിനും സഹായിക്കുന്നു."
      ],
      details: "തേങ്ങായിൽ ധാരാളം പോഷകങ്ങൾ അടങ്ങിയിരിക്കുന്നു, ഇത് ആരോഗ്യത്തിനെ മെച്ചപ്പെടുത്തുന്നു. അതിലെ MCTs ശരീരത്തിന് ഫലപ്രദമായ ശക്തി നൽകുകയും ബുദ്ധി ആരോഗ്യത്തെ മെച്ചപ്പെടുത്തുകയും ചെയ്യുന്നു. ഒരു കാപ്പി കൊഴുപ്പ് 283 കലോറി, 7g നാര്സംവരണം, 3g പ്രോട്ടീൻ, നിരവധി ഖനിജങ്ങൾ അടങ്ങിയിരിക്കുന്നു."
    },
    {
      title: "ഹൃദയാരോഗ്യം",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "നല്ല HDL കൊഴുപ്പ് ലവലുകൾ വർദ്ധിപ്പിക്കാൻ സഹായിക്കുന്നു, LDL ലവലുകൾ संतുലിപ്പിക്കുകയാണ്.",
        "ലാരിക് ആസിഡ് രക്തക്കെട്ടുകൾക്കും തടസ്സങ്ങൾക്കും വിരുദ്ധമായ പ്രവർത്തനം നടത്തുന്നു.",
        "സമത്വമുളള രക്തസമ്മർദ്ദം നിലനിർത്താൻ പോട്ടാസ്യം അടങ്ങിയിരിക്കുന്നു.",
        "ആന്റി ഓക്സിഡന്റുകൾ ഹൃദയകോശങ്ങളെ ഓക്സിഡേറ്റീവ് സ്റ്റ്രസിൽ നിന്ന് സംരക്ഷിക്കുന്നു.",
        "സർക്ക്യുള്ള വികലനവും ഹൃദയ പ്രവർത്തനത്തിന് സഹായകമായ ആന്റി-ഇൻഫ്ലാമ്മേറ്ററി സ്വഭാവം നൽകുന്നു."
      ],
      details: "തേങ്ങായിൽ ഉള്ള കൊഴുപ്പ് ആസിഡുകൾ അജ്ഞാതമല്ലെങ്കിലും, അതിന്റെ സമാനമായ കലവറ ഹൃദയാരോഗ്യത്തിന് സഹായകരമാണ്. പ്രത്യേകിച്ച് ലാരിക് ആസിഡ്, ഇത് 50% തേങ്ങാ കൊഴുപ്പിലാണ് അടങ്ങിയിരിക്കുന്നത്."
    },
    {
      title: "മസ്തിഷ്ക പ്രവർത്തനം",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "MCTs മസ്തിഷ്ക കോശങ്ങൾക്ക് എളുപ്പത്തിലുള്ള ശക്തി നൽകുന്നു.",
        "കീറ്റോൺസ് നാഡികൾ നന്നാക്കാൻ സഹായകമായ പ്രവർത്തനങ്ങൾ ചെയ്യുന്നു.",
        "നാഡി ആരോഗ്യത്തെ പിന്തുണയ്ക്കുന്ന പ്രകൃതിദത്ത ചേരുവകൾ അടങ്ങിയിരിക്കുന്നു.",
        "ഓർമ്മശക്തിയും പഠനശേഷിയും മെച്ചപ്പെടുത്തുന്നു.",
        "നാഡി കോശങ്ങളിലെ വീക്കം കുറച്ച് ബുദ്ധിമുട്ടുകൾ തടയുന്നു."
      ],
      details: "തേങ്ങായിൽ MCTs മസ്തിഷ്കാരോഗ്യത്തിൻറെ മെച്ചത്തിലേക്ക് നിർണായകമായ പങ്കുവഹിക്കുന്നു. അതിനാൽ അത് മസ്തിഷ്കത്തിന് ആവശ്യമായ ശക്തിയുമായി എളുപ്പത്തിൽ മാറുന്നു."
    },
    {
      title: "പ്രতিরോധശക്തി (സുഖചികിത്സ)",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ലാരിക് ആസിഡ് മോനോലാരിനായി മാറി വൈറസുകൾക്ക് വിരുദ്ധമായ പ്രവർത്തനം നടത്തുന്നു.",
        "ആന്റി ഓക്സിഡന്റുകൾ ഓക്സിഡേറ്റീവ് സ്ട്രെസ്സ് കുറയ്ക്കുന്നു.",
        "വെള്ളരിക്കൊണ്ടുള്ള രക്തകൺഡുകൾ പ്രവർത്തനക്ഷമമായിരിക്കും.",
        "ശരിയായ ബാക്ടീരിയകൾക്കും ഫംഗസുകൾക്കും തകർക്കാൻ സഹായകമായ പ്രവർത്തനങ്ങൾ.",
        "ആരോഗ്യപ്രതിരോധ ശേഷി ശക്തിപ്പെടുത്തുന്നു."
      ],
      details: "തേങ്ങായിലെ പ്രതിരോധശേഷി ഗുണങ്ങൾ അതിന്റെ ലാരിക് ആസിഡ് മുഖേന തെളിയിക്കപ്പെടുന്നു. ഈ ലാരിക് ആസിഡ് പല വൈറസുകളും ബാക്ടീരിയകളും എളുപ്പത്തിൽ നശിപ്പിക്കാൻ സഹായിക്കുന്നു."
    }
    // Add other translations here...
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
        തേങ്ങായുടെ ഗുണങ്ങൾ
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
