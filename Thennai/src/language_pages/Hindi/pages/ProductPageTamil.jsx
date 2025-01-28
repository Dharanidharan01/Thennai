import React from "react";
import "./ProductPageTamil.css";
import NavBarTamil from "../../Tamil/components/NavBarTamil";

const ProductPageTamil = () => {
  const products = [
    {
      title: "பனை மர அறுவடை கருவி",
      description: "பனை மர அறுவடை மிகவும் எளிதாகவும் பாதுகாப்பாகவும் இருக்க வடிவமைக்கப்பட்ட கருவி.",
      status: "விரைவில் வருகிறது",
    },
    {
      title: "அக்ரோ-இவி (பல பயன்கள்)",
      description: "விவசாய தேவைகளுக்கு பொருத்தமான மின்சார வாகனம். விரைவில் காத்திருக்கவும்!",
      status: "விரைவில் வருகிறது",
    },
  ];

  return (
    <div>
      <NavBarTamil/>
    <div className="product-page">
      <h1 className="page-title">நமது முக்கிய பொருட்கள்</h1>
      <p className="description">விரைவில் புதிய அம்சங்களுடன் இது வரும்...</p>

      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-description">{product.description}</p>
              <div className="coming-soon">{product.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductPageTamil;