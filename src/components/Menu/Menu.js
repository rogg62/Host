import React from "react";
import "./Menu.css";
import  Logo from "./assets/02.svg"
const Menu = () => {
  return (
    <nav id="menu">
        <img src={Logo} alt="" />
      <nav>
        <a href="home">Home</a>
        <a href="home">Hosting</a>
        <a href="home">Domain</a>
        <a href="home">Princing</a>
        <a href="home">About Us</a>
      </nav>
      <button>Get Started</button>
    </nav>
  );
};

export default Menu;
