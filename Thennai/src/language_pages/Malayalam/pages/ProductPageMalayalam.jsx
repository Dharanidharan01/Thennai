import React from "react";
import ProductSectionMalayalam from "../components/ProductsectionMalayalam"; // Adjust the import path if necessary.

const ProductPageMalayalam = () => {
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
          ഞങ്ങളുടെ പ്രധാന ഉല്പന്നങ്ങൾ
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          പുത്തനായി വരാനിരിക്കുന്ന അതിവേഗ ഫീച്ചറുകൾ...
        </p>
      </header>

      {/* Product Section */}
      <ProductSectionMalayalam />

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
          © 2024 ഞങ്ങളുടെ കമ്പനീ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.
        </p>
      </footer>
    </div>
  );
};

export default ProductPageMalayalam;
