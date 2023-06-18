import React from "react";
import "./Style.css";
import {
  CardsDomain1,
  CardsDomain2,
  CardsDomain3,
  CardsDomain4,
  CardsDomain5,
  CardsDomain6,
} from "./Cards/CardsDomain";

const CardsDomain = () => {
  return (
    <section id="CardsDomain">
      <div id="titleDomain">
        <h1>Domain is More than a Name </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="BoxDomain">
        <CardsDomain1 />
        <CardsDomain2 />
        <CardsDomain3 />
        <CardsDomain4 />
        <CardsDomain5 />
        <CardsDomain6 />
      </div>
    </section>
  );
};

export default CardsDomain;
