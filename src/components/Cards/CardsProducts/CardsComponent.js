import React from "react";
import "./Cards.css";
import { Cards1, Cards2, Cards3, Cards4, Cards5, Cards6 } from "./Cards";

const CardsComponent = () => {
  return (
    <section id="CardsComponent">
      <div id="title">
        <h1>Our Hosting Features Service</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          tristique volutp
        </p>
      </div>

      <div id="containerCards">
        <Cards1 />
        <Cards2 />
        <Cards3 />
        <Cards4 />
        <Cards5 />
        <Cards6 />

      </div>
    </section>
  );
};

export default CardsComponent;
