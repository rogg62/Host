import React from "react";
import "../style.css";
//components
import { Header1 } from "../../components/Header/Header1/Headers";
import CardsComponent from "../../components/Cards/CardsProducts/CardsComponent";
import Features from "../../components/Features/Features"
import FeedBack from "../../components/FeedBack/Feed1/FeedBack";
import Business from "../../components/Cards/CardsBusiness/Business";
import Cta from "../../components/CTA/CTA1/Cta";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div id="page1">
      <Header1 />
      <CardsComponent />
      <Features />
      <Business />
      <FeedBack />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
