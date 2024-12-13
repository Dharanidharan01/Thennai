import React from "react";
import ProductSectionTamil from "../components/ProductSectionTamil"; // Adjust the import path if necessary.

const ProductPageTamil = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#0090E1" }}>
          நமது முக்கிய பொருட்கள்
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          விரைவில் புதிய அம்சங்களுடன் இது வரும்...
        </p>
      </header>

      {/* Product Section */}
      <ProductSectionTamil />

      {/* Footer Section */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <p style={{ fontSize: "16px", color: "#777" }}>
          © 2024 நமது நிறுவனம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </p>
      </footer>
    </div>
  );
};

export default ProductPageTamil;
