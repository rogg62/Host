import React from "react";
import "./style.css";
const CardBig = ({title}) => {
  return (
    <div id="CardBig">
      <div id="BigImage"></div>
      <div id="BigInfo">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus mag na fringilla urna,
          porttitor
        </p>
      </div>
    </div>
  );
};

export default CardBig;
