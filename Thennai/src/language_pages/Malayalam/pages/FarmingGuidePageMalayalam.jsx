import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuideMalayalam = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "ഭൂമി തയ്യാറാക്കൽ",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "നല്ല ജലനിർഗമനമുള്ള മണ്ണ് തിരഞ്ഞെടുക്കുക, pH 5.5-6.5 ആയിരിക്കണം.",
        "കളകൾ നീക്കി സൂര്യപ്രകാശം ലഭിക്കുന്ന വിധത്തിൽ ഭൂമി വൃത്തിയാക്കുക.",
        "1 മീ × 1 മീ × 1 മീ വലിപ്പമുള്ള കുഴികൾ 7.5 മീ അകലത്തിൽ കുഴിക്കുക.",
        "കുഴികളിൽ മണ്ണ്, ജൈവ വളങ്ങൾ, മണൽ എന്നിവ ചേർത്ത് നിറയ്ക്കുക.",
        "ജലക്ഷയം ഒഴിവാക്കാനും ശരിയായ വളർച്ച ഉറപ്പാക്കാനും ശ്രദ്ധിക്കുക."
      ],
      details:
        "തേങ്ങാ കൃഷി വിജയിക്കാൻ ഭൂമി തയ്യാറാക്കൽ അത്യാവശ്യമാണ്. ഗുണമേന്മയുള്ള മണ്ണും ശരിയായ ജലനിർഗമനവും ഉറപ്പാക്കി ചെടികൾക്ക് അനുയോജ്യമായ അന്തരീക്ഷം ഒരുക്കുക."
    },
    {
      title: "നടീൽ",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "11-12 മാസം പ്രായമുള്ള ഗുണമേന്മയുള്ള തൈകൾ വിശ്വസനീയമായ നഴ്സറികളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക.",
        "മഴക്കാലത്തിന്റെ തുടക്കത്തിൽ നടീൽ ആരംഭിക്കുന്നത് ചെടികളുടെ വളർച്ചയ്ക്ക് ഗുണകരമാണ്.",
        "താഴ്ന്ന പ്രദേശങ്ങൾ ഒഴിവാക്കി ഭൂമി ക്രമീകരിക്കുക.",
        "ആദ്യ ആഴ്ചകളിൽ തൈകൾക്ക് പതിവായി വെള്ളവും തണലും നൽകുക.",
        "പറമ്പുകളിൽ 7.5 മീ അകലം പാലിക്കുക."
      ],
      details:
        "നടീൽ ഘട്ടം വളരെ പ്രധാനമാണ്. ഗുണനിലവാരമുള്ള തൈകളും ശരിയായ നടീൽ രീതികളും ഉപയോഗിച്ച് മികച്ച വിളവ് ഉറപ്പാക്കാം."
    },
    {
      title: "നനവ്",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "വെള്ളം കാര്യക്ഷമമായി ഉപയോഗിക്കാൻ ഡ്രിപ് ഇറിഗേഷനോ ചാലുകളോ ഉപയോഗിക്കുക.",
        "ജലക്ഷയം ഒഴിവാക്കി മണ്ണിന്റെ ഈർപ്പം സ്ഥിരമായി നിലനിർത്തുക.",
        "ഓരോ ചെടിക്കും 15-20 ലിറ്റർ വെള്ളം കാലാവസ്ഥയ്ക്കനുസരിച്ച് നൽകുക.",
        "മഴക്കാലത്ത് നനവ് കുറച്ച് വേര് പൂപ്പൽ തടയുക.",
        "മണ്ണിന്റെ ഈർപ്പം പരിശോധിച്ച് ആവശ്യാനുസരണം വെള്ളം ക്രമീകരിക്കുക."
      ],
      details:
        "തേങ്ങാ ചെടികളുടെ വളർച്ചയ്ക്കും വിളവിനും ശരിയായ നനവ് അത്യന്താപേക്ഷിതമാണ്. സ്ഥിരമായ ജലസേചനം വിജയത്തിന്റെ താക്കോലാണ്."
    },
    {
      title: "വളപ്രയോഗം",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "NPK വളങ്ങൾ (500g N, 320g P₂O₅, 1200g K₂O) സന്തുലിതമായി പ്രയോഗിക്കുക.",
        "ജൈവ വളം (25-50 കിലോ) ഓരോ ചെടിക്കും വർഷം തോറും നൽകുക.",
        "വളപ്രയോഗം രണ്ടോ മൂന്നോ ഘട്ടങ്ങളായി നടത്തുക.",
        "മണ്ണ് പരിശോധനയ്ക്ക് ശേഷം സൂക്ഷ്മ പോഷകങ്ങൾ ആവശ്യമെങ്കിൽ ചേർക്കുക.",
        "പച്ചില വളവും മണ്ണിന്റെ ആരോഗ്യവും ശ്രദ്ധിക്കുക."
      ],
      details:
        "ശരിയായ വളപ്രയോഗം തേങ്ങാ കൃഷിയുടെ ഉൽപ്പാദനക്ഷമതയും സ്ഥിരതയും ഉറപ്പാക്കുന്നു."
    },
    {
      title: "കീട നിയന്ത്രണം",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "വെള്ളപ്പേൻ, കൊമ്പൻ ചെല്ലി തുടങ്ങിയ കീടങ്ങൾക്കെതിരെ ശ്രദ്ധിക്കുക.",
        "സംയോജിത കീട നിയന്ത്രണം (IPM) സമൂഹ സഹകരണത്തോടെ പ്രയോഗിക്കുക.",
        "കെണികളും ജൈവ നിയന്ത്രണ രീതികളും ഉപയോഗിക്കുക.",
        "കീടങ്ങൾ വ്യാപിക്കുന്നത് തടയാൻ പരിസരം വൃത്തിയായി സൂക്ഷിക്കുക.",
        "അനുവദനീയമായ കീടനാശിനികൾ ആവശ്യമെങ്കിൽ മാത്രം ഉപയോഗിക്കുക."
      ],
      details:
        "കീട നിയന്ത്രണം ശരിയായി നടത്തിയാൽ കൃഷിയെ സംരക്ഷിക്കാനും ഗുണനിലവാരമുള്ള വിളവ് ലഭിക്കാനും കഴിയും."
    },
    {
      title: "വിളവെടുപ്പ്",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "പൂർണ്ണമായി പക്വത പ്രാപിച്ച (11-12 മാസം) തേങ്ങകൾ വിളവെടുക്കുക.",
        "പരിശീലനം ലഭിച്ച രീതികളോ യന്ത്രങ്ങളോ ഉപയോഗിച്ച് വിളവെടുക്കുക.",
        "45-60 ദിവസം ഇടവിട്ട് വിളവെടുപ്പ് നടത്തുക.",
        "തേങ്ങ പൂർണ്ണമായി പാകമായതാണെന്ന് ഉറപ്പാക്കുക.",
        "വിളവെടുപ്പ് സമയത്ത് തേങ്ങകൾ ശ്രദ്ധയോടെ കൈകാര്യം ചെയ്യുക."
      ],
      details:
        "ശരിയായ വിളവെടുപ്പ് രീതികൾ പിന്തുടർന്നാൽ ഗുണമേന്മയുള്ള തേങ്ങകൾ ലഭിക്കുകയും കൃഷി ലാഭകരമാവുകയും ചെയ്യും."
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
          തേങ്ങാ കൃഷി മാർഗനിർദ്ദേശം
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
                  {expandedCard === index ? 'കുറച്ച് കാണിക്കുക' : 'കൂടുതൽ അറിയുക'}
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

export default FarmingGuideMalayalam;