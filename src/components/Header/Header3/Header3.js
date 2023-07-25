import React from "react";
import "./style.css";
import Menu from "../../Menu/Menu";
import Responsivel from "../../Menu/MenuResponsivel/Responsivel";
const Header3 = () => {
  return (
    <header id="headerAbout">
      <Menu />
      <Responsivel />
      <div id="headerAbout-Title">
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

export default Header3;
