import React from "react";
import "../style.css";
import { Head1 } from "../../components/HeaderMin/Headers";
import Help from "../../components/Help/Help";
import Cta from "../../components/CTA/Cta";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <section id="page1">
      <Head1 />
      <Help />
      <Cta />
      <Footer />
    </section>
  );
};

export default About;
