import React from "react";
import "../style.css";
//components
import {Header1} from "../../components/Header/Headers"
import CardsComponent from "../../components/Cards/CardsComponent";
import Features from "../../components/Features/Features";
import Business from "../../components/CardsBusiness/Business"
import FeedBack from "../../components/FeedBack/FeedBack"
import Cta from "../../components/CTA/Cta"
import Footer from "../../components/Footer/Footer"

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
