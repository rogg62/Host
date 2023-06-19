import React from "react";
import "../style.css";
import CardsComponent from "../../components/Cards/CardsComponent";
import Features from "../../components/Features/Features";
import BigIdeas from "../../components/BigIdeas/BigIdeas";
import FeedBack2 from "../../components/Feed2/FeedBack2";
import Cta from "../../components/CTA/Cta";
import Footer from "../../components/Footer/Footer";
import { Head1 } from "../../components/HeaderMin/Headers";

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
