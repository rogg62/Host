import React from "react";
import "./style.css";
import {
  CardsBig,
  CardsBig2,
  CardsBig3,
  CardsBig4,
  CardsBig5,
  CardsBig6,
} from "./Cards/CardsBig";

const BigIdeas = () => {
  return (
    <section id="Big">
      <div id="BigTitle">
        <h1>Why Choose Hostingin for your Big ideas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          tristique volutp
        </p>
      </div>

      <div id="BigBox">
        <CardsBig />
        <CardsBig2 />
        <CardsBig3 />
        <CardsBig4 />
        <CardsBig5 />
        <CardsBig6 />
      </div>
    </section>
  );
};

export default BigIdeas;
