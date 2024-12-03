import React from "react";
import "../state/TamilNadu.css";
import tamilNaduImage from "../../assets/Tamil_Nadu_districts_map.svg"; // Update the path as needed

const TamilNadu = () => {
  const priceHistory = [
    { year: "2020", price: "₹25/kg" },
    { year: "2021", price: "₹30/kg" },
    { year: "2022", price: "₹35/kg" },
    { year: "2023", price: "₹40/kg" },
    { year: "2024", price: "₹45/kg" },
  ];

  return (
    <div className="tamilnadu-page">
      <h1 className="tamilnadu-heading">Tamil Nadu Coconut Prices</h1>
      <p className="tamilnadu-subheading">
        Discover the coconut price trends in Tamil Nadu over the past years.
        Explore real-time prices and understand the factors influencing the
        market.
      </p>
      <div className="tamilnadu-content">
        <div className="tamilnadu-image">
          <img src={tamilNaduImage} alt="Tamil Nadu" />
          <p className="image-description">
            Tamil Nadu, known for its rich coconut plantations and high yield.
          </p>
        </div>
        <div className="tamilnadu-table-container">
          <h2>Price History</h2>
          <table className="price-history-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Price</th>
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
              View Real-Time Coconut Prices
            </a>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>Factors Influencing Coconut Prices</h2>
        <ul>
          <li>Climate conditions and seasonal changes</li>
          <li>Export demands and global coconut market trends</li>
          <li>Local demand for coconut-based products</li>
          <li>Government policies on agriculture and subsidies</li>
        </ul>
        <div className="fun-fact">
          <h3>Did You Know?</h3>
          <p>
            Tamil Nadu is the second-largest producer of coconuts in India,
            contributing significantly to the nation's agriculture economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamilNadu;
