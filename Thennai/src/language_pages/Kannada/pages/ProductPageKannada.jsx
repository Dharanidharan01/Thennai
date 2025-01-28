import React from "react";
import "./ProductPageMalayalam.css";
import NavBarMalayalam from "../../Malayalam/components/NavBarMalayalam";

const ProductPageMalayalam = () => {
  const products = [
    {
      title: "പനയിലത്ത് മരംവെട്ടല്‍ ഉപകരണം",
      description: "പനയിലത്ത് മരംവെട്ടല്‍ എളുപ്പവും സുരക്ഷിതവുമായ ഉപകരണം.",
      status: "വീണ്ടും വരുന്നു",
    },
    {
      title: "അക്രോ-ഇവി (പല ഉപയോക്താക്കളായ വാഹനം)",
      description: "വിവസായ ആവശ്യങ്ങള്‍ക്കായുള്ള വൈദ്യുത വാഹനങ്ങൾ. త్వరയ്ക്ക് ലഭിക്കും!",
      status: "വീണ്ടും വരുന്നു",
    },
  ];

  return (
    <div>
      <NavBarMalayalam />
      <div className="product-page">
        <h1 className="page-title">നമ്മുടെ പ്രധാന ഉല്പന്നങ്ങൾ</h1>
        <p className="description">പുതിയ ഫീച്ചറുകളുമായി ഇത് ഉടന്‍ വരും...</p>

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

export default ProductPageMalayalam;
