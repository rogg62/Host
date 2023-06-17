import React from "react";
import "./Menu.css";
import  Logo from "./assets/02.svg"
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav id="menu">
        <img src={Logo} alt="" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Hosting">Hosting</Link>
        <Link to="">Domain</Link>
        <Link to="">Princing</Link>
        <Link to="">About Us</Link>
      </nav>
      <button>Get Started</button>
    </nav>
  );
};

export default Menu;
