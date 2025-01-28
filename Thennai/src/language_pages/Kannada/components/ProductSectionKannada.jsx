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

const ProductSectionKannada = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // ಸ್ಕ್ರೋಲ್ ನಿರ್ವಹಣೆ ಮತ್ತು ವಿಭಾಗದ ಕಾಣುವಿಕೆ ಕಂಡುಹಿಡಿಯುವುದು
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
    "ತೇಂಗೆ ಮರ harvesting ಉಪಕರಣ",
    "ಆಕ್ರೋ-EV",
    "ಉತ್ಪನ್ನ 3",
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
      {/* ಶೀರ್ಷಿಕೆ ಮತ್ತು ಪರಿಚಯ */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0090E1",
          }}
        >
          ಮುಖ್ಯ ಉತ್ಪನ್ನಗಳು
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          ನಾವು ನೀಡುತ್ತಿರುವ ವಿವಿಧ ತೇಂಗೆ ಸಂಬಂಧಿ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ
        </p>
      </div>

      {/* ಉತ್ಪನ್ನ ಕಾರ್ಡ್ ಗಳ ನಿರೂಪಣೆ */}
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
              perspective: "1000px", // 3D ಪರಿಣಾಮಕ್ಕಾಗಿ
            }}
          >
            <div
              style={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transformStyle: "preserve-3d", // 3D ಸ್ಥಿತಿಯನ್ನು ಉಳಿಸಲು
                transition: "transform 0.6s", // ಪರಿವರ್ತನೆ ಪರಿಣಾಮಕ್ಕಾಗಿ ಸಮಯ
              }}
              className="card-inner"
            >
              {/* ಮುಂಭಾಗ */}
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

              {/* ಹಿಂಭಾಗ .webp ಚಿತ್ರ ಸಹಿತ */}
              <div
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  width: "100%",
                  height: "100%",
                  transform: "rotateY(180deg)", // ಪರಿವರ್ತನೆ ಪರಿಣಾಮಕ್ಕಾಗಿ ಪರಿವರ್ತನೆ
                }}
              >
                <img
                  src={ProductGif}
                  alt="ಉತ್ಪನ್ನ ಆನಿಮೇಶನ್"
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
            <p style={{ color: "#555", fontSize: "16px" }}>ಹೆಚ್ಚು ಹತ್ತಿರವಿದೆ</p>
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
        ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ
      </button>
    </section>
  );
};

export default ProductSectionKannada;
