import React from "react";
import SuperHeaderKannada from "../components/SuperHeaderKannada";
import NavBarKannada from "../components/NavBarKannada";
import AboutUsKannada from "../components/AboutUsKannada";
import ProductSectionKannada from "../components/ProductSectionKannada";
import FarmingGuideKannada from "../components/FarmingGuideKannada";
import BenefitsOfCoconutKannada from "../components/BenefitsOfCoconutKannada";
import FromTheBlogKannada from "../components/FromTheBlogKannada";
import TamilNaduMapKannada from "../components/TamilNaduMapKannada";
import ContactUsKannada from "../components/ContactUsKannada";
import FooterKannada from "../components/FooterKannada";
import WhatsAppButtonKannada from "../components/WhatsAppButtonKannada";
import PopupKannada from "../components/PopupKannada";



const HomePageKannada = () => {
  return (
    <div>
      <NavBarKannada />
      <SuperHeaderKannada />
      <AboutUsKannada />
      <ProductSectionKannada />
      <FarmingGuideKannada />
      <br />
      <BenefitsOfCoconutKannada />
      <FromTheBlogKannada/>
      <TamilNaduMapKannada/>
      <ContactUsKannada/>
      <FooterKannada/>
      <WhatsAppButtonKannada/>
     <PopupKannada/>
      
    </div>
  );
};

export default HomePageKannada;
