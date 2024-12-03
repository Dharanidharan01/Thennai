import React, { useState, useEffect } from "react";


const AboutUs = () => {
  const [text, setText] = useState("");
  const fullText = `  At Thennai, we’re dedicated to supporting coconut 
farmers with the knowledge, tools, and community 
connections needed to thrive. Our mission is to provide 
resources and innovative solutions that make farming 
easier, more profitable, and sustainable for future 
generations.`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center p-8 gap-8">
      {/* Left Section: Image */}
      <div className="w-full lg:w-2/5 order-2 lg:order-1 lg:mt-20">
        <img
          src="src/assets/Aboutus.jpg"
          alt="About Us"
          className="w-full rounded-lg ml-0 lg:ml-8"
        />
      </div>

      {/* Right Section: All Content */}
      <div className="w-full lg:w-3/5 order-1 lg:order-2 lg:pl-16">
        {/* Heading */}
        <h2 className="text-3xl text-[#0090E1] mb-8 flex items-center justify-center lg:justify-start">
          
          About Us
        </h2>

        {/* Main Text */}
        <p className="text-lg leading-relaxed text-[#007A5C] text-center lg:text-left mb-8">
          {text}
        </p>

        {/* Key Values at Thennai */}
<ul className="space-y-4 text-lg text-gray-600 mb-8">
  {[
    "Integrity: Upholding honesty, ethics, and transparency in all we do.",
    "Collaboration: Sharing skills and knowledge to grow and succeed together.",
    "Innovation: Embracing creativity and continuous improvement to stay ahead.",
    "Accountability: Taking pride and responsibility for our work and outcomes."
  ].map((value, index) => (
    <li
      key={index}
      className="flex items-center transition-all duration-300 hover:text-green-600 hover:shadow-lg p-2 rounded"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/9282/9282598.png"
        alt="Key Value"
        className="w-4 h-4 mr-2"
      />
      {value}
    </li>
  ))}
</ul>
  

        {/* Button */}
        <button className="w-full lg:w-auto bg-[#007A5C] text-white px-8 py-3 text-lg rounded hover:bg-[#00663D] transition-colors duration-300">
          Know More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;