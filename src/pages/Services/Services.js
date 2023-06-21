import React from "react";
import "../style.css";
//components
import { Head1 } from "../../components/Header/Header2/Headers2";
import CardsComponent from "../../components/Cards/CardsProducts/CardsComponent";
import Features from "../../components/Features/Features"
import BigIdeas from "../../components/Lists/BigIdeas/BigIdeas"
import FeedBack2 from "../../components/FeedBack/Feed2/FeedBack2";
import Cta from "../../components/CTA/CTA1/Cta";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <div id="page1">
      <Head1 />
      <CardsComponent />
      <Features />
      <BigIdeas />
      <FeedBack2 />
      <Cta />
      <Footer />
    </div>
  );
};

export default Services;
