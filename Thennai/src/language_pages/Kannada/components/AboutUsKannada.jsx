import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Lightbulb, Award } from "lucide-react";
import aboutUsImage from "../../../assets/Aboutus.jpg";

const AboutUsKannada = () => {
  const [text, setText] = useState("");
  const fullText = `ನಾವು ತೆಂಗಿನ ಬೆಳೆಗಾರರು ಅಭಿವೃದ್ಧಿ ಹೊಂದಲು ಅಗತ್ಯವಾದ ಜ್ಞಾನ, ಪರಿಕರಗಳು ಮತ್ತು ಸಮುದಾಯ ಸಂಪರ್ಕಗಳೊಂದಿಗೆ ಅವರನ್ನು ಬೆಂಬಲಿಸಲು ಸಮರ್ಪಿತರಾಗಿದ್ದೇವೆ. 
  ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗಳಿಗೆ ಕೃಷಿಯನ್ನು ಸುಲಭ, ಹೆಚ್ಚು ಲಾಭದಾಯಕ ಮತ್ತು ಸುಸ್ಥಿರವಾಗಿಸುವ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ನವೀನ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.`;

  const values = [
    {
      title: "ಪ್ರಾಮಾಣಿಕತೆ", // Integrity
      description: "ನಾವು ಮಾಡುವ ಎಲ್ಲಾ ಕಾರ್ಯಗಳಲ್ಲಿ ಸತ್ಯಪರತೆ, ನೈತಿಕತೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯನ್ನು ಎತ್ತಿಹಿಡಿಯುವುದು.",
      Icon: Shield,
    },
    {
      title: "ಸಹಯೋಗ", // Collaboration
      description: "ಒಟ್ಟಿಗೆ ಬೆಳೆಯಲು ಮತ್ತು ಯಶಸ್ವಿಯಾಗಲು ಕೌಶಲ್ಯ ಮತ್ತು ಜ್ಞಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು.",
      Icon: Users,
    },
    {
      title: "ನಾವೀನ್ಯತೆ", // Innovation
      description: "ಸದಾ ಮುಂದೆ ಇರಲು ಸೃಜನಶೀಲತೆ ಮತ್ತು ನಿರಂತರ ಸುಧಾರಣೆಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವುದು.",
      Icon: Lightbulb,
    },
    {
      title: "ಹೊಣೆಗಾರಿಕೆ", // Accountability
      description: "ನಮ್ಮ ಕೆಲಸ ಮತ್ತು ಅದರ ಫಲಿತಾಂಶದ ಬಗ್ಗೆ ಹೆಮ್ಮೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯನ್ನು ಹೊಂದುವುದು.",
      Icon: Award,
    },
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Smooth animation with character-by-character typing

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8">
      <div className="w-full lg:w-2/5 order-2 lg:order-1">
        <img
          src={aboutUsImage}
          alt="ತೆಂಗಿನ ರೈತರ ಬೆಂಬಲ" // Alt text in Kannada for accessibility
          className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full lg:w-3/5 order-1 lg:order-2 lg:pl-12">
        <h2 className="text-3xl lg:text-4xl text-[#0090E1] mb-6 lg:mb-8 text-center lg:text-left font-bold font-['Space_Grotesk']">
          ನಮ್ಮ ಬಗ್ಗೆ {/* About Us */}
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed text-[#007A5C] text-center lg:text-left mb-8">
          {text}
        </p>
        <ul className="space-y-4 text-gray-700 mb-8">
          {values.map(({ title, description, Icon }, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50 hover:text-[#4CAF50] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] group-hover:bg-[#C8E6C9]">
                <Icon className="w-6 h-6 text-[#007A5C] hover:text-[#4CAF50]" />
              </div>
              <div>
                <span className="font-bold text-lg">{title}:</span>
                <p className="text-base leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center lg:justify-start">
          <Link to="/Aboutuskannada" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-[#45A049] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-['Space_Grotesk'] font-bold text-lg">
              ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ {/* Know More */}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsKannada;
