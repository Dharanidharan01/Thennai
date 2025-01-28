import React from "react";
import SuperHeaderMalayalam from "../components/SuperHeaderMalayalam";
import WhatsAppButtonMalayalam from "../components/WhatsAppButtonMalayalam";
import PopupMalayalam from "../components/PopupMalayalam";
import FooterMalayalam from "../components/FooterMalayalam";
import ContactUsMalayalam from "../components/ContactUsMalayalam";
import TamilNaduMapMalayalam from "../components/TamilNaduMapMalayalam";
import FromTheBlogMalayalam from "../components/FromTheBlogMalayalam";
import BenefitsOfCoconutMalayalam from "../components/BenefitsOfCoconutMalayalam"
import FarmingGuideMalayalam from "../components/FarmingGuideMalayalam";
import ProductSectionMalayalam from "../components/ProductsectionMalayalam";
import AboutUsMalayalam from "../components/AboutUsMalayalam";
import NavBarMalayalam from "../components/NavBarMalayalam";



const HomePageMalayalam = () => {
  return (
    <div>
      <NavBarMalayalam />
      <SuperHeaderMalayalam/>
      <AboutUsMalayalam/>
      <ProductSectionMalayalam />
      <FarmingGuideMalayalam/>
      <br />
      <BenefitsOfCoconutMalayalam/>
      <FromTheBlogMalayalam/>
      <TamilNaduMapMalayalam/>
      <ContactUsMalayalam/>
      <FooterMalayalam/>
      <WhatsAppButtonMalayalam/>
     <PopupMalayalam/>
      
    </div>
  );
};

export default HomePageMalayalam;