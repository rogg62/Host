import React from "react";
import "./style.css";
import Menu from "../Menu/Menu";

const Headee = () => {
  return (
    <header id="headerAbout">
      <Menu />

      <div>
        <h1>We’re here to Help</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>

        <div id="Search">
            <input type="text" placeholder="Search here" />
            <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Headee;
