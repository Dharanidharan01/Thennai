import React from 'react';
import './ProductPage.css';
import NavBar from '../components/NavBar';

const ProductPage = () => {
  const products = [
    {
      title: 'Palm Tree Harvesting Tool',
      description: 'A state-of-the-art tool designed to make palm tree harvesting more efficient and safe.',
      status: 'Coming Soon',
    },
    {
      title: 'Agro-EV (Multi-Purpose)',
      description: 'A versatile electric vehicle tailored for various agricultural needs. Stay tuned!',
      status: 'Coming Soon',
    },
  ];

  return (
    <div>
      <NavBar/>
    <div className="product-page">
      
      <br></br>
      <br></br>
      <h1 className="page-title">Our Products</h1>
      <p className="description">Check out our upcoming products. Stay tuned for exciting releases!</p>

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

export default ProductPage;
