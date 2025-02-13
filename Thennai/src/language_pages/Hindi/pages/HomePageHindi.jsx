import React from "react";
import SuperHeaderHindi from "../components/SuperHeaderHindi";
import NavBarHindi from "../components/NavBarHindi";
import AboutUsHindi from "../components/AboutUsHindi";
import ProductSectionHindi from "../components/ProductSectionHindi";
import FarmingGuideHindi from "../components/FarmingGuideHindi";
import BenefitsOfCoconutHindi from "../components/BenefitsOfCoconutHindi";
import FromTheBlogHindi from "../components/FromTheBlogHindi";
import TamilNaduMapHindi from "../components/TamilNaduMapHindi";
import ContactUsHindi from "../components/ContactUsHindi";
import FooterHindi from "../components/FooterHindi";
import WhatsAppButtonHindi from "../components/WhatsAppButtonHindi";
import PopupHindi from "../components/PopupHindi";

const HomePageHindi = () => {
  return (
    <div>
      <NavBarHindi />
      <SuperHeaderHindi />
      <AboutUsHindi />
      <ProductSectionHindi />
      <FarmingGuideHindi />
      <br />
      <BenefitsOfCoconutHindi />
      <FromTheBlogHindi/>
      <TamilNaduMapHindi/>
      <ContactUsHindi/>
      <FooterHindi/>
      <WhatsAppButtonHindi/>
      <PopupHindi/>
    </div>
  );
};

export default HomePageHindi;
