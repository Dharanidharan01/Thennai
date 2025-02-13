import React from "react";
import "./ProductPageHindi.css";
import NavBarHindi from "../../Hindi/components/NavBarHindi";

const ProductPageHindi = () => {
  const products = [
    {
      title: "ताड़ के पेड़ की कटाई उपकरण",
      description: "ताड़ के पेड़ की कटाई को बहुत आसान और सुरक्षित बनाने के लिए डिज़ाइन किया गया उपकरण।",
      status: "जल्द आ रहा है",
    },
    {
      title: "एक्रो-ईवी (कई उपयोगों के लिए)",
      description: "कृषि आवश्यकताओं के लिए उपयुक्त विद्युत वाहन। जल्द आ रहा है!",
      status: "जल्द आ रहा है",
    },
  ];

  return (
    <div>
      <NavBarHindi/>
      <div className="product-page">
        <h1 className="page-title">हमारे प्रमुख उत्पाद</h1>
        <p className="description">यह जल्द ही नए फीचर्स के साथ आ रहा है...</p>

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

export default ProductPageHindi;
