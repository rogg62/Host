import "./Menu.css";
import Logo from "./assets/02.svg";
import { Link } from "react-router-dom";
const Menu = () => {

  return (
    <nav id="menu">
      <img src={Logo} alt="" />

        <nav className='Menu'>
          <Link to="/">Home</Link>
          <Link to="/Hosting">Hosting</Link>
          <Link to="/services">Domain</Link>
          <Link to="/Pricing">Princing</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>

      <div id="boxBtn">
        <button id="btnGet">Get Started</button>
      </div>
    </nav>
  );
};

export default Menu;
