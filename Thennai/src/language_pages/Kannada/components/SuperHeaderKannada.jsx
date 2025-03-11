import React, { useState, useEffect } from "react";
import video from '../../../assets/header_video.mp4';

const SuperHeaderKannada = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-screen">
      {/* Video Background */}
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

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white p-4 md:p-12 lg:p-24 flex flex-col justify-center h-full">
        {/* Content Wrapper */}
        <div className="px-4 py-8 md:py-0 md:px-0">
          {/* Heading without Parallax */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold mb-4 md:mb-7 lg:mb-8">
            <span className="block md:inline">ಸ್ಮಾರ್ಟ್ ಪರಿಹಾರಗಳು ಮತ್ತು ಸಮುದಾಯದ ಬೆಂಬಲದೊಂದಿಗೆ</span>
            <span className="text-orange-500"> ತೆಂಗು ರೈತರ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುವುದು ನಮ್ಮ ಉದ್ದೇಶ!</span>
          </h1>

          {/* Paragraph without Parallax */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-[800px] mx-auto text-white">
            ಅತ್ಯಾಧುನಿಕ ಪರಿಕರಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು ನಮ್ಮ ಆಶಯ. ಮಾರ್ಗದರ್ಶಿಗಳು, ನೇರ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ನೀವು ಬೆಳೆಯುವುದಕ್ಕೆ ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಅಭಿವೃದ್ಧಿ ಹೊಂದುತ್ತಿರುವ ಸಮುದಾಯವನ್ನು ಅನ್ವೇಷಿಸಿ.
          </p>

          {/* Call to Action without Parallax */}
          <a
            className="inline-block bg-[#0090E1] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-lg hover:bg-[#007bc2] transition-all duration-300 mt-4 md:mt-6 lg:mt-8"
            onClick={() => {
              window.scrollBy({
                top: 700, // Scrolls down by 100px
                left: 0,   // No horizontal scroll
                behavior: 'smooth', // Smooth scrolling animation
              });
            }}
          >
            ಪ್ರಾರಂಭಿಸಲು ಒತ್ತಿ
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuperHeaderKannada;
