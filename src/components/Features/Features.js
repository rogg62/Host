import React from "react";
import "./Features.css";
import { useState } from "react";
import {
  CardsFeatures,
  CardsFeatures2,
  CardsFeatures3,
} from "../FeedBack/Feed1/Cards/CardsFeatures";

const Features = () => {
  const [estado, setEstado] = useState(false);

  const MudarText = () => {
    setEstado(!estado);
    if (estado === true) {
      document.getElementById("price1").innerHTML = "$50";
      document.getElementById("price2").innerHTML = "$150";
      document.getElementById("price3").innerHTML = "$250";
    } else if (estado === false) {
      document.getElementById("price1").innerHTML = "$599";
      document.getElementById("price2").innerHTML = "$1700";
      document.getElementById("price3").innerHTML = "$2900";
    }
  };

  return (
    <section id="Features">
      <div id="FeaturesTitle">
        <h1>Special Offer for Your Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="FeaturesCardsButton">
        <span>Monthly</span>

        <label className="switch">
          <input type="checkbox" onClick={MudarText} />
          <span className="slider round"></span>
        </label>

        <span>Yearly</span>
      </div>

      <div id="FeaturesCards">
        <CardsFeatures />
        <CardsFeatures2 />
        <CardsFeatures3 />
      </div>
    </section>
  );
};

export default Features;
