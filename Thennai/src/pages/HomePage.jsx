import React from "react";
import SuperHeader from "../components/SuperHeader";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import ProductSection from "../components/ProductSection";
import FarmingGuide from "../components/FarmingGuide";
import CoconutPriceGraph from "../components/CoconutPriceGraph";
import BenefitsOfCoconut from "../components/BenefitsOfCoconut";
import FromTheBlog from "../components/FromTheBlog";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SuperHeader />
      <AboutUs/>
      <ProductSection /> 
      <FarmingGuide />
      <br></br>
      <CoconutPriceGraph />
      <BenefitsOfCoconut />
      <FromTheBlog/>
     
    </div>
  );
};

export default HomePage;
