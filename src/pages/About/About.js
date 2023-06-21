import React from "react";
import "../style.css";
//components
import Header3 from "../../components/Header/Header3/Header3";
import Help from "../../components/Lists/Help/Help"
import Cta2 from "../../components/CTA/CTA2/Cta2";
import Footer from "../../components/Footer/Footer"

const About = () => {
  return (
    <section id="page1">
      <Header3 />
      <Help />
      <Cta2 />
      <Footer />
    </section>
  );
};

export default About;
