import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Shield, Users, Lightbulb, Award } from "lucide-react";
import aboutUsImage from '../../../assets/Aboutus.jpg';

const AboutUsKannada = () => {
  const [text, setText] = useState("");
  const fullText = `ತೆನೆ ಎಂಬುದು ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡಲು ಸಮರ್ಪಿತ ಕಂಪನಿಯಾಗಿದೆ. 
ಬೆಳೆಗಾರಿಕೆಯು ಸುಲಭವಾಗಲು, ಲಾಭಕರವಾಗಲು ಮತ್ತು ಮುಂದಿನ ತಲೆಮಾರುಗಳಿಗಾಗಿ ದಾರಿ ತೋರಿಸುವ ದೃಷ್ಟಿಕೋನವನ್ನು ಹೊಂದಿದೆ. 
ಕೃತಕ ವಿಧಾನಗಳು ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.`;

  // Define the values array with corresponding icons
  const values = [
    {
      title: "ಒಗ್ಗಟ್ಟು",
      description: "ನೇರತೆ, ನೈತಿಕತೆ ಮತ್ತು ಸ್ಪಷ್ಟತೆಯೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದು.",
      Icon: Shield
    },
    {
      title: "ಸಹಕಾರ",
      description: "ಕೌಶಲ್ಯಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ ಯಶಸ್ಸು ಸಾಧಿಸುವುದು.",
      Icon: Users
    },
    {
      title: "ಹೊಸತನ",
      description: "ಹೊಸ ಯೋಚನೆಗಳಿಂದ ಮತ್ತು ಮುಂದುವರಿದ ಮನೋಭಾವದಿಂದ ಮುನ್ನಡೆಸುವುದು.",
      Icon: Lightbulb
    },
    {
      title: "ಹೆಜ್ಜೆಗುರುತು",
      description: "ಫಲಿತಾಂಶಗಳನ್ನು ಹೆಮ್ಮೆಯಿಂದ ಸ್ವೀಕರಿಸುವುದು.",
      Icon: Award
    }
  ];

  useEffect(() => {
    let index = 0;
    const words = fullText.split(' ');
    let currentText = '';

    const intervalId = setInterval(() => {
      if (index < words.length) {
        currentText = index === 0 
          ? words[index] 
          : currentText + ' ' + words[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center p-4 lg:p-8 gap-8">
      {/* Left Section: Image */}
      <div className="w-full lg:w-2/5 order-2 lg:order-1 lg:mt-20">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full rounded-lg lg:ml-8 shadow-lg"
        />
      </div>

      {/* Right Section: All Content */}
      <div className="w-full lg:w-3/5 order-1 lg:order-2 lg:pl-16">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl text-[#0090E1] mb-6 lg:mb-8 text-center lg:text-left font-bold">
          ನಮ್ಮ ಬಗ್ಗೆ
        </h2>

        {/* Main Text */}
        <p className="text-base lg:text-lg leading-relaxed text-[#007A5C] text-center lg:text-left mb-6 lg:mb-8">
          {text}
        </p>

        {/* Values Section */}
        <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-600 mb-6 md:mb-8 px-2 md:px-0">
          {values.map(({ title, description, Icon }, index) => (
            <li
              key={index}
              className="flex items-start md:items-center transition-all duration-300 hover:text-green-600 hover:shadow-lg p-2 md:p-3 rounded group"
            >
              <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-green-100 transition-colors duration-300">
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold md:mr-1">{title}:</span>
                <span className="text-sm md:text-lg">{description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Link to="/Aboutuskannada" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#007A5C] text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg rounded hover:bg-[#00663D] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsKannada;
