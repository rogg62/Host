import React from "react";
import "./style.css";

const CardDomain = ({title, paragraf}) => {
  return (
    <div id="Domain">
      <div id="DomainImg"></div>
      <div id="DomainInfo">
        <h1>{title}</h1>
        <p>
         {paragraf}
        </p>
      </div>
    </div>
  );
};

export default CardDomain;
