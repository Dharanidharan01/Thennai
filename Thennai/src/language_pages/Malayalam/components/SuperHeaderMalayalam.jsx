import React from "react";
import video from '../../../assets/header_video.mp4';

const SuperHeaderMalayalam = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* വീഡിയോ ബാക്ക്‌ഗ്രൗണ്ട് */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 w-[calc(100%-1rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-100px)] h-[80%] object-cover rounded-lg brightness-90 left-2 md:left-12 lg:left-[50px]"
          style={{
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* ഉള്ളടക്കം ഓവർലേ */}
      <div className="relative z-10 text-center text-white p-4 md:p-12 lg:p-24 flex flex-col justify-center h-full">
        {/* ഉള്ളടക്കം പൊതിവേഗം */}
        <div className="px-4 py-8 md:py-0 md:px-0">
          {/* ഹെഡിങ്ങ് (പാരലാക്സ് ഇല്ലാതെ) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold mb-4 md:mb-7 lg:mb-8">
            <span className="block md:inline">തേങ്ങാ </span>
            <span className="text-orange-500">കർഷകർക്ക്</span>
            <span className="block md:inline"> സ്മാർട്ട് പരിഹാരങ്ങളോടെ </span>
            <br className="hidden md:block" />
            <span className="block mt-2 md:mt-0">വളരാനും സമൂഹ പിന്തുണയും!</span>
          </h1>

          {/* പാരഗ്രാഫ് (പാരലാക്സ് ഇല്ലാതെ) */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-[800px] mx-auto text-white">
            കർഷകരെ മുന്നോട്ട് നയിക്കാൻ നൂതന ഉപകരണങ്ങളും വിഭവങ്ങളും നൽകുന്നു. മാർക്കറ്റ് വിലകൾ, കൃഷി മാർഗനിർദ്ദേശങ്ങൾ, സമൂഹ ബന്ധങ്ങൾ എന്നിവ ഇവിടെ ലഭ്യമാണ്.
          </p>

          {/* ആഹ്വാനം (പാരലാക്സ് ഇല്ലാതെ) */}
          <a
            className="inline-block bg-[#0090E1] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-lg hover:bg-[#007bc2] transition-all duration-300 mt-4 md:mt-6 lg:mt-8"
            onClick={() => {
              window.scrollBy({
                top: 700, // 700px താഴേക്ക് സ്ക്രോൾ ചെയ്യും
                left: 0,   // No horizontal scroll
                behavior: 'smooth', // Smooth scrolling animation
              });
            }}
          >
            തുടങ്ങാം
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuperHeaderMalayalam;