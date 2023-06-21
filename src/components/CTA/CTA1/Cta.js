import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <section id="cta">
      {/*Efeito do background*/}
      <div id="cta1"></div>
      <div id="cta2"></div>
      <div id="cta3"></div>
      <div id="cta4"></div>
      {/*Final do efeito*/}

      <div id="Container-cta">
        <h1>30 Days money-back guarantee</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>

        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Cta;
