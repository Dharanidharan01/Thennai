import React from "react";
import SuperHeader from "../components/SuperHeader";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import ProductSection from "../components/ProductSection";
import FarmingGuide from "../components/FarmingGuide";
import BenefitsOfCoconut from "../components/BenefitsOfCoconut";
import FromTheBlog from "../components/FromTheBlog";
import TamilNaduMap from "../components/TamilNaduMap";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SuperHeader />
      <AboutUs />
      <ProductSection />
      <FarmingGuide />
      <br />
      <BenefitsOfCoconut />
      <FromTheBlog/>
      <TamilNaduMap/>
      <ContactUs/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
