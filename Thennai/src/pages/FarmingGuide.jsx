import React, { useState } from "react";
import "../pages/FarmingGuide.css";

const CoconutBenefits = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const benefits = {
    en: [
      {
        title: "Rich in Nutrients",
        description:
          "Coconut is a powerhouse of essential nutrients like vitamins C, E, B1, B3, B5, and B6, as well as minerals such as iron, selenium, sodium, calcium, magnesium, and phosphorus. These nutrients boost energy levels and enhance overall well-being, making it a versatile superfood for health enthusiasts.",
        icon: "🍎",
      },
      {
        title: "Heart Health",
        description:
          "Coconut can support heart health by increasing good cholesterol (HDL) levels and reducing bad cholesterol (LDL). Its medium-chain triglycerides (MCTs) promote better lipid profiles, aiding cardiovascular health and reducing the risk of heart diseases when consumed as part of a balanced diet.",
        icon: "❤️",
      },
      {
        title: "Hydration",
        description:
          "Coconut water is a natural isotonic drink rich in electrolytes like potassium and magnesium. It helps replenish fluids and salts lost through sweating, making it ideal for athletes, travelers, or anyone looking to stay hydrated in hot weather conditions.",
        icon: "💧",
      },
      {
        title: "Boosts Immunity",
        description:
          "The antioxidants and lauric acid in coconut enhance the immune system by fighting harmful bacteria, viruses, and fungi. Regular consumption can reduce inflammation and protect the body from infections and chronic illnesses, keeping you healthier and more resilient.",
        icon: "🛡️",
      },
      {
        title: "Supports Weight Loss",
        description:
          "Coconut’s healthy fats provide a quick energy source while promoting fat burning. The MCTs in coconut oil boost metabolism and support appetite control, making it an excellent addition to weight management programs when consumed in moderation.",
        icon: "⚖️",
      },
      {
        title: "Improves Skin Health",
        description:
          "Coconut oil is a natural moisturizer that nourishes dry skin, reduces inflammation, and promotes healing. Its antibacterial properties can help treat acne and protect against skin infections, leaving your skin radiant and healthy.",
        icon: "🌟",
      },
      {
        title: "Strengthens Hair",
        description:
          "Coconut oil penetrates deep into the hair shaft, providing hydration and reducing protein loss. Regular use nourishes the scalp, strengthens hair follicles, and prevents dandruff, leaving hair shiny, smooth, and more resilient.",
        icon: "💇‍♀️",
      },
      {
        title: "Supports Digestion",
        description:
          "Coconut improves digestion by promoting healthy gut flora and easing inflammation. Its dietary fiber content helps regulate bowel movements, making it beneficial for those struggling with constipation or other digestive issues.",
        icon: "🍽️",
      },
    ],
    ta: [
      {
        title: "போஷகங்களில் சிறந்து விளங்கும்",
        description:
          "தேங்காய் சி, ஈ, பி1, பி3, பி5 மற்றும் பி6 போன்ற வைட்டமின்களும் இரும்பு, செலினியம், சோடியம், கால்சியம், மக்னீசியம், பாஸ்பரஸ் போன்ற கனிமங்களும் நிறைந்தது. இவை உடல் உறுதியை மேம்படுத்தி ஆரோக்கியத்தை மேம்படுத்தும்.",
        icon: "🍎",
      },
      {
        title: "இதய ஆரோக்கியம்",
        description:
          "தேங்காய் நல்ல கொலஸ்டிரால் அளவை அதிகரித்து, கெட்ட கொலஸ்டிராலை குறைப்பதன் மூலம் இதய ஆரோக்கியத்தை மேம்படுத்த உதவுகிறது.",
        icon: "❤️",
      },
      {
        title: "இரசாயன உலர் தன்மை",
        description:
          "தேங்காய் நீர் பொட்டாசியம் மற்றும் மக்னீசியம் போன்ற மினரல்களில் நிறைந்த ஒரு இயற்கை இசோடோனிக் பானமாகும். உடல் நீர்ச்சத்தை சீராக்க உதவுகிறது.",
        icon: "💧",
      },
      {
        title: "நோய் எதிர்ப்பு சக்தி",
        description:
          "தேங்காயில் உள்ள ஆன்டிஆக்ஸிடன்ட்கள் மற்றும் லாரிக் அமிலம் நோயெதிர்ப்பு மண்டலத்தை உறுதிசெய்கின்றன.",
        icon: "🛡️",
      },
      {
        title: "எடை குறைப்பு",
        description:
          "தேங்காயின் ஆரோக்கியமான கொழுப்புகள் உடல் பொருத்தம் மேம்பட உதவுகிறது.",
        icon: "⚖️",
      },
      {
        title: "தோல் ஆரோக்கியம்",
        description:
          "தேங்காய் எண்ணெய் ஒரு இயற்கையான ஈரப்பதமாக செயல்பட்டு தோலின் ஆரோக்கியத்தை மேம்படுத்துகிறது.",
        icon: "🌟",
      },
      {
        title: "முடி வளம்",
        description:
          "தேங்காய் எண்ணெய் தலையில் ஊடுருவி, முடியின் அடிப்பகுதியை ஊட்டமளிக்கிறது.",
        icon: "💇‍♀️",
      },
      {
        title: "மழுகம் உதவி",
        description:
          "தேங்காய் பச்சாத்தலை மேம்படுத்தும் மற்றும் மலச்சிக்கலை தடுக்க உதவுகிறது.",
        icon: "🍽️",
      },
    ],
  };

  return (
    <div className="benefits-container">
      <div className="language-toggle">
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("ta")}>தமிழ்</button>
      </div>
      <h1 className="title">Benefits of Coconut</h1>
      <div className="benefits-grid">
        {benefits[language].map((benefit, index) => (
          <div
            key={index}
            className="benefit-card"
            data-aos="fade-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="icon">{benefit.icon}</div>
            <h2 className="card-title">{benefit.title}</h2>
            <p className="description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoconutBenefits;
