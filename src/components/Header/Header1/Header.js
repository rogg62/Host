import React from "react";
import "./header.css";
import Menu from "../../Menu/Menu";
import Responsivel from "../../Menu/MenuResponsivel/Responsivel";
const Header = ({ title }) => {
  return (
    <header id="header">
      <Responsivel />
      <Menu />
      <div id="headerInfo">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
        <div id="search">
          <input type="text" placeholder="Search Your Domain Name" />

          <select name="" id="select">
            <option value="">com</option>
            <option value="">online</option>
            <option value="">xyz</option>
            <option value="">link</option>
            <option value="">live</option>
            <option value="">digital</option>
          </select>

          <button>Search</button>
        </div>
        <div id="priceDomain">
          <div className="boxDomain">
            <button>.com</button>
            <span>$8.99</span>
          </div>
          <div className="boxDomain">
            <button>.online</button>
            <span>$0.99</span>
          </div>
          <div className="boxDomain">
            <button>.xyz</button>
            <span>$1.99</span>
          </div>
          <div className="boxDomain">
            <button>.link</button>
            <span>$3.99</span>
          </div>
          <div className="boxDomain">
            <button>.live</button>
            <span>$4.99</span>
          </div>
          <div className="boxDomain">
            <button>.digital</button>
            <span>$5.99</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
