import React from "react";
import "../style.css";
import Headee from "../../components/Heade/Headee";
import Help from "../../components/Help/Help";
import Cta2 from "../../components/CTA2/Cta2"
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <section id="page1">
      <Headee />
      <Help />
      <Cta2 />
      <Footer />
    </section>
  );
};

export default About;
