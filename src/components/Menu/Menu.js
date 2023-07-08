import React, { useState } from "react";
import "./Menu.css";
import { FiAlignRight } from "react-icons/fi";
import Logo from "./assets/02.svg";
import { Link } from "react-router-dom";
const Menu = () => {
  const [openMenu, setOpenMenu] = useState(!true);

  const ToggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav id="menu">
      <img src={Logo} alt="" />

        <nav className={openMenu ? 'menuReponsivo' : 'menu'}>
          <Link to="/">Home</Link>
          <Link to="/Hosting">Hosting</Link>
          <Link to="/services">Domain</Link>
          <Link to="/Pricing">Princing</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>

      <div id="boxBtn">
        <button id="btnGet">Get Started</button>
        <button id="btnOpen" onClick={ToggleOpenMenu}>
          <FiAlignRight size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
