import React from "react";
import "./style.css";
import Table from "./assets/Table (1).svg"
const Table2 = () => {
  return (
    <section id="Table2">
      <div id="Table2Title">
        <h1>Find the plan that’s right for you</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="TableContent">
        <img src={Table} alt="" />
      </div>
       
    </section>
  );
};

export default Table2;
