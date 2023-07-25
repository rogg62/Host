import React from "react";
import "./Responsivel.css";
import Logo from "../assets/02.svg"
import { Link } from "react-router-dom";

const Responsivel = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="" />
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Hosting">Hosting</Link>
          </li>
          <li>
            <Link to="/services">Domain</Link>
          </li>
          <li>
            <Link to="/Pricing">Princing</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Responsivel;
