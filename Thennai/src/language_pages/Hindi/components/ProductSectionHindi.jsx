import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/product.css";

// Import the .webp image
import ProductGif from "../../../assets/giphy.webp";

// Loading spinner component
const LoadingSpinner = () => (
  <div
    style={{
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #4CAF50",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 2s linear infinite",
    }}
  />
);

const ProductSectionHindi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // स्क्रॉल हैंडलिंग और सेक्शन की दृश्यता को ट्रैक करना
  const handleScroll = () => {
    const section = document.getElementById("product-section");
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = [
    "नारियल पेड़ कटाई उपकरण",
    "आक्रो-ईवी",
    "उत्पाद 3",
  ];

  return (
    <section
      id="product-section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* शीर्षक और विवरण */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0090E1",
          }}
        >
          प्रमुख उत्पाद
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          नारियल आधारित उत्पादों की विविधता को देखें
        </p>
      </div>

      {/* उत्पाद कार्ड */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "20px",
          width: "100%",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: "20px",
              marginBottom: "20px",
              transform: isVisible ? "translateX(0)" : "translateX(-200px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-in-out",
              perspective: "1000px", // 3D प्रभाव के लिए
            }}
          >
            <div
              style={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transformStyle: "preserve-3d", // 3D स्पेस को बनाए रखने के लिए
                transition: "transform 0.6s", // फ्लिप प्रभाव के लिए समय अवधि
              }}
              className="card-inner"
            >
              {/* फ्रंट फेस */}
              <div
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <LoadingSpinner />
              </div>

              {/* बैक फेस (वेबपी इमेज के साथ) */}
              <div
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  width: "100%",
                  height: "100%",
                  transform: "rotateY(180deg)", // फ्लिप प्रभाव के लिए घुमाव
                }}
              >
                <img
                  src={ProductGif}
                  alt="उत्पाद एनीमेशन"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{product}</h3>
            <p style={{ color: "#555", fontSize: "16px" }}>आने वाला</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => navigate("/ppt")} // Navigate to the 'ppt' page
        style={{
          marginTop: "40px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#0090E1",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0078B6")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0090E1")}
      >
        और देखें
      </button>
    </section>
  );
};

export default ProductSectionHindi;
