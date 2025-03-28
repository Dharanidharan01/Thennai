import React from "react";
import "../state/TamilNadu.css";
import tamilNaduImage from "../../assets/Tamil_Nadu_districts_map.svg"; // Update the path as needed

const TamilNadu = () => {
  const priceHistory = [
    { year: "2019", price: "₹15-₹20" },
    { year: "2020", price: "₹18-₹22" },
    { year: "2021", price: "₹30-₹40" },
    { year: "2022", price: "₹22-₹28" },
    { year: "2023", price: "₹20-₹25" },
    { year: "2024", price: "₹50-₹55" },
  ];

  return (
    <div className="tamilnadu-page">
      <h1 className="tamilnadu-heading">தமிழ்நாடு நாட்டு முந்திய தேங்காய் விலைகள்</h1>
      <p className="tamilnadu-subheading">
        கடந்த ஆண்டுகளில் தமிழ்நாட்டில் தேங்காய் விலைகளின் போக்குகள் பற்றி அறியவும். நேரடி விலைகளை ஆராயவும் மற்றும் சந்தையில் எதனை தாக்குபட்ட காரணிகள் புரிந்து கொள்ளவும்.
      </p>
      <div className="tamilnadu-content">
        <div className="tamilnadu-image">
          <img src={tamilNaduImage} alt="தமிழ்நாடு" />
          <p className="image-description">
            தமிழ்நாடு, அதன் வளமான தேங்காய் தோட்டங்கள் மற்றும் உயர் விளைச்சலுக்குப் பெயரளித்தது.
          </p>
        </div>
        <div className="tamilnadu-table-container">
          <h2>விலை வரலாறு</h2>
          <table className="price-history-table">
            <thead>
              <tr>
                <th>ஆண்டு</th>
                <th>தேங்காய் விலை</th>
              </tr>
            </thead>
            <tbody>
              {priceHistory.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <a
              href="https://www.commodityonline.com/mandiprices/coconut"
              target="_blank"
              rel="noopener noreferrer"
              className="realtime-button"
            >
              நேரடி தேங்காய் விலைகள் பார்க்கவும்
            </a>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>தேங்காயின் விலைகளை பாதிக்கும் காரணிகள்</h2>
        <ul>
          <li>வானிலை நிலைகள் மற்றும் பருவ மாற்றங்கள்</li>
          <li>ஏற்றுமதி கோரிக்கைகள் மற்றும் உலக தேங்காய் சந்தை போக்குகள்</li>
          <li>தேங்காய் சார்ந்த தயாரிப்புகளுக்கான உள்ளூர் கோரிக்கை</li>
          <li>அரசு வேளாண்மை கொடுப்பனவுகள் மற்றும் கொள்கைகள்</li>
        </ul>
        <div className="fun-fact">
          <h3>அரசியலோடு தெரியுமா?</h3>
          <p>
            தமிழ்நாடு இந்தியாவில் தேங்காயின் இரண்டாவது பெரிய உற்பத்தியாளர் ஆகும், இது நாட்டின் வேளாண் பொருளாதாரத்திற்கு முக்கிய பங்களிப்பு அளிக்கிறது.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamilNadu;
