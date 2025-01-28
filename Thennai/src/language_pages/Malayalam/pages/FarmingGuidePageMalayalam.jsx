import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuideMalayalam = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "ഭൂമിയുടെ തയ്യാറാക്കല്",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "മികച്ച വെള്ളം 흘ിപ്പിക്കുന്ന മണ്ണ് തിരഞ്ഞെടുക്കുക, pH നില 5.5-6.5 ഇടയിൽ ആയിരിക്കണം.",
        "പച്ചക്കറികൾ നീക്കിയ ശേഷം, സൂര്യപ്രകാശം പതിക്കുന്നവിധത്തിൽ ഭൂമി ശുദ്ധമാക്കുക.",
        "1 മീ × 1 മീ × 1 മീ വലിപ്പത്തിലുള്ള പാട്ടുകൾ 7.5 മീ × 7.5 മീ അകലംക്കൊണ്ട് പുഴുങ്ങുക.",
        "പാട്ടുകൾ ഉയർന്ന മണ്ണ്, ഹൈഫ് ബയോളജിക്കൽ ഘടകങ്ങൾ, മണൽ എന്നിവ ചേർന്ന് ഭൂമിയിൽ നിറക്കുക.",
        "ജലക്ഷയം ഒഴിവാക്കാനും ശരിയായ വിളഞ്ഞുള്ള മാനദണ്ഡങ്ങൾ പാലിക്കാനും ഉറപ്പുവരുത്തുക.",
      ],
      details:
        "തേങ്ങായ് കൃഷിയുടെ വിജയത്തിനായി ഭൂമി തയ്യാറാക്കലും വളരെ പ്രധാനപ്പെട്ടതാണ്. ഗുണമേന്മയുള്ള മണ്ണ്, ശരിയായ വെള്ളത്തൊഴുക്ക്, ഈഗിരി വർദ്ധനവ് എന്നിവയ്ക്കുള്ള നല്ല അന്തരീക്ഷം സൃഷ്ടിക്കാൻ ഭൂമി തയ്യാറാക്കലാണ് ആവശ്യമായത്."
    },
    {
      title: "നട്ടല്",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />, 
      points: [
        "ഉയരുന്ന വിളകൂടിയ വിത്തുകൾ വിശ്വാസയോഗ്യമായ നഴ്‌സറിებიდან തിരഞ്ഞെടുക്കുക (11-12 മാസ പ്രായമുള്ളവ).",
        "മഴക്കാലം ആരംഭിക്കുന്നതിന്റെ സമയത്ത് നട്ടൽ ആരംഭിക്കുന്നത് മികച്ച ചെടി വളർച്ചയ്ക്കായി സഹായകമാണ്.",
        "താഴ്ന്ന പ്രാന്തം പായുന്ന കണ്മുമ്പിലെ പ്രദേശം നിലത്തു ക്രമീകരിക്കുക.",
        "ആദ്യത്തെ കുറച്ച് ആഴ്ചകളിൽ ഉടനെ വെള്ളം, ഇരുള് എന്നിവ നൽകുക.",
        "പെരിയിടങ്ങളിൽ 7.5 മീ അകലം പാലിക്കുക."
      ],
      details:
        "നട്ടൽ ഘട്ടം അത്യന്തം പ്രധാനമാണ്. ഗുണമേന്മയുള്ള വിത്തുകൾ, ശരിയായ നട്ടൽ മാർഗ്ഗങ്ങൾ ഉത്തമ ഉള്പന്നങ്ങൾ നിലനിര്‍ത്തുന്നതിലും ശക്തമായ ഫലങ്ങൾ ഉണ്ടാക്കുന്നതിനും സഹായകരമാണ്."
    },
    {
      title: "നീര്പ്പാസനം",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "വളരച്ച വെള്ളം കാര്യക്ഷമമായി ഉപയോഗിക്കുന്നതിനായി ചെറുതിരി (drip) ജലപാതം അല്ലെങ്കിൽ വെള്ളക്കുളം പാസനങ്ങൾ ഉപയോഗിക്കുക.",
        "ജലക്ഷയം ഒഴിവാക്കി, നിലത്തിൻ്റെ ഈർപ്പം സ്ഥിരമായി നിലനിർത്തുക.",
        "കാലഗതികങ്ങളിൽ (15-20 ലിറ്റർ ചെടിക്ക്) വെള്ളം നൽകുക.",
        "മഴക്കാലത്ത് വെള്ളം കുറച്ചു, വേരുകളുടെ ജലപ്രവാഹം തടയുക.",
        "നിലത്തിൻ്റെ ഈർപ്പം നിരന്തരം മോണിറ്റർ ചെയ്ത്, വെള്ളം പ്രതീക്ഷിച്ചതിനെ അനുസരിച്ച് ക്രമീകരിക്കുക."
      ],
      details:
        "തേങ്ങായ്ക്ക് വളർച്ചക്കും, വിളവ് സംബന്ധമായ കാര്യങ്ങൾക്ക് ശരിയായ നീര്പ്പാസനം അനിവാര്യമാണ്. തുടർച്ചയായ പരിചരണകാലത്ത് സ്ഥിരമായ നീര്പ്പാസനം ആവശ്യമാണ്."
    },
    {
      title: "ഉരമിടൽ",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "സമനിലയിലുള്ള NPK ഭക്ഷണങ്ങൾ (500g N, 320g P2O5, 1200g K2O) പ്രയോഗിക്കുക.",
        "ജീവശാസ്ത്ര ഭക്ഷണം (25-50 കിലോ) ഒരു ചെടിക്ക് ഒരു വർഷം നൽകുക.",
        "ഉരമിടലുകൾ രണ്ടു അല്ലെങ്കിൽ മൂന്ന് ഘട്ടങ്ങളായിട്ട് നടത്തുക.",
        "മണ്ണിന്റെ പരിശോധന പ്രകാരം സൂക്ഷ്മപച്ചവ്യഞ്ജനങ്ങൾ നൽകുക.",
        "പച്ചശസ്യ സംരക്ഷണം, മണ്ണിന്റെ ആരോഗ്യം എന്നിവ ശ്രദ്ധിക്കുക."
      ],
      details:
        "ഉരമിടലുകൾ നന്നായി ചെയ്യുന്നതിനാൽ, நிலവിൽ സ്ഥിരമായ തേങ്ങായ്ക്ക് ഉല്പന്നം ഉറപ്പാക്കാം."
    },
    {
      title: "പശു നിയന്ത്രണം",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "ലാഭകരമായ കീടങ്ങളെ വെളുത്തക്കോയി, കുരുട്ടുപടികൾ എന്നിവയ്ക്ക് ശ്രദ്ധ നൽകുക.",
        "സമൂഹോപകാരണത്തിൽ ഇൻറഗ്രേറ്റഡ് കീടചികിത്സ (IPM) പ്രയോഗിക്കുക.",
        "വലിപ്പമുള്ള കീടപ്പറ്റികൾ, ജീവശാസ്ത്ര നിയന്ത്രണം എന്നിവ ഉപയോഗിക്കുക.",
        "പശു വ്യാപകമായ സ്ഥലം പരിപാലിക്കുക.",
        "ആവശ്യമായപ്പോൾ മാത്രമേ അംഗീകൃത കീടനാശിനികൾ ഉപയോഗിക്കണം."
      ],
      details:
        "കീടസംരക്ഷണ മാർഗ്ഗങ്ങൾ സാധാരണമായ കൃഷി രീതികൾ പിന്തുടർന്ന് പ്രവർത്തനക്ഷമമാക്കുന്നു."
    },
    {
      title: "വിളവ്",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "വളർന്നു വച്ച് (11-12 മാസങ്ങൾ കഴിഞ്ഞ്) തേങ്ങായിരിക്കും ശേഖരിക്കാൻ.",
        "വിദ്യാഭ്യാസയുള്ള ഉയർത്തൽ സാങ്കേതികവിദ്യകൾ അല്ലെങ്കിൽ യന്ത്രങ്ങൾ ഉപയോഗിക്കുക.",
        "45-60 ദിവസങ്ങളിലായി വിളവെടുക്കൽ നടത്തുക.",
        "തേങ്ങായിരുണ്ടതിന്റെ പൂർണ്ണമായ സമ്പൂർണ്ണത്തിൽ ഉറപ്പുവരുത്തുക.",
        "വിളവിനിടെ തേങ്ങായെ സൂക്ഷ്മമായി കൈകാര്യം ചെയ്യുക."
      ],
      details:
        "ശരിയായ വിളവെടുപ്പ് മാർഗ്ഗങ്ങൾ ഗുണമേന്മയുള്ള തേങ്ങായ്ക്ക് മുന്നോട്ട് പോക്കുന്നു."
    }
  ];

  const downloadPDF = () => {
    const content = document.getElementById('farming-guide-content');
    const opt = {
      margin: 1,
      filename: 'coconut-farming-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(content).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8" id="farming-guide-content">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk']">
          തേങ്ങായ്ക്ക് കൃഷി മാർഗ്ഗനിർദ്ദേശം
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {farmingSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {step.icon}

                  <h2 className="text-2xl font-bold text-[#0090E1] font-['Space_Grotesk']">
                    {step.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">•</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                {expandedCard === index && (
                  <div className="mt-6">
                    <p className="text-gray-600 leading-relaxed">{step.details}</p>
                  </div>
                )}
                <button
                  className="mt-4 text-[#0090E1] hover:text-[#4CAF50] transition-colors"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {expandedCard === index ? 'കുറച്ച് കാണിക്കുക' : 'കൂടുതൽ പഠിക്കുക'}
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
            പി.ഡി.എഫ് ഡൗൺലോഡ് ചെയ്യുക
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmingGuideMalayalam;

