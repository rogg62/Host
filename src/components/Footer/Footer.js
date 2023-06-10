import React from "react";
import "./footer.css";
//import images
import Logo from "./assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div id="footer1">
        <div id="box1">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>

        <div id="box2">
          <h1>Hosting</h1>
          <a href="w">Web Hosting</a>
          <a href="w">Shared Hosting</a>
          <a href="w">WordPress Hosting</a>
          <a href="w">Cloud Hosting</a>
        </div>

        <div id="box3">
          <h1>Domain</h1>
          <a href="w">Domain Checker</a>
          <a href="w">Domain Transfer</a>
          <a href="w">Free Domain</a>
        </div>

        <div id="box4">
          <h1>Company</h1>
          <a href="w">About</a>
          <a href="w">Career</a>
          <a href="w">Why choose us</a>
        </div>

        <div id="box5">
          <h1>Help</h1>
          <a href="w">FAQ</a>
          <a href="w">Help support</a>
          <a href="w">Blog</a>
        </div>
      </div>

      <div id="footer2">
        <a href="w">Privacy Policy</a>
        <a href="w">Terms and Condition</a>
      </div>
    </footer>
  );
};

export default Footer;
