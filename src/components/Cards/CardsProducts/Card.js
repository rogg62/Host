import React from "react";
import "./Cards.css";

const Cards = ({paragraf, title}) => {
  return (
    <div id="Card">
      <div id="CardImage"></div>
      <div id="CardInfo">
        <h1>{title}</h1>
        <p>
          {paragraf}
        </p>
      </div>
    </div>
  );
};

export default Cards;
