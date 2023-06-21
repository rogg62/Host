import React from "react";
import "./Business.css";
import {BCardsItens1, BCardsItens2, BCardsItens3} from "./Cards/BCardsItens"

const Business = () => {
  return (
    <section id="business">
      <div id="businessTitle">
        <h1>We are reliable hosting for your business</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>
      <div id="CardsBusiness">
    <BCardsItens1 />
    <BCardsItens2 />
    <BCardsItens3 />

      </div>
    </section>
  );
};

export default Business;
