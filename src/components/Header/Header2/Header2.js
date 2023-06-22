import React from "react";
import "./style.css";
import Menu from "../../Menu/Menu";

const Header = ({title}) => {
  return (
    <header id="headerMenu">
      <Menu />

      <div id="headerMenuTitle">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>
    </header>
  );
};

export default Header;
