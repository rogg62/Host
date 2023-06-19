import React from "react";
import "./style.css";
import Seta from "./assets/Vector (1).svg";
import { useState } from "react";

const FrequentAsk = () => {
  const [abrir, setAbrir] = useState(false);

  const toggleOpen = () => {
    setAbrir(!abrir);
    if (abrir === true) {
      document.getElementById("btn").style.display = "flex";
    } else if (abrir === false) {
      document.getElementById("btn").style.display = "none";
    }
  };

  const toggleOpen2 = () => {
    setAbrir(!abrir);
    if (abrir === true) {
      document.getElementById("btn2").style.display = "flex";
    } else if (abrir === false) {
      document.getElementById("btn2").style.display = "none";
    }
  };

  const toggleOpen3 = () => {
    setAbrir(!abrir);
    if (abrir === true) {
      document.getElementById("btn3").style.display = "flex";
    } else if (abrir === false) {
      document.getElementById("btn3").style.display = "none";
    }
  };

  const toggleOpen4 = () => {
    setAbrir(!abrir);
    if (abrir === true) {
      document.getElementById("btn4").style.display = "flex";
    } else if (abrir === false) {
      document.getElementById("btn4").style.display = "none";
    }
  };

  const toggleOpen5 = () => {
    setAbrir(!abrir);
    if (abrir === true) {
      document.getElementById("btn5").style.display = "flex";
    } else if (abrir === false) {
      document.getElementById("btn5").style.display = "none";
    }
  };

  return (
    <section id="FrequentAsk">
      <div id="FrequentAskTitle">
        <h1>Frequently Asked Questions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="FrequentAskTitleQuestions">
        <button className="accordion" onClick={toggleOpen}>
          What is a domain name?
          <img src={Seta} alt="" />
        </button>
        <div className="panel" id="btn">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </p>
        </div>

        <button className="accordion" onClick={toggleOpen2}>
          Is my domain name available?
          <img src={Seta} alt="" />
        </button>
        <div className="panel" id="btn2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </p>
        </div>

        <button className="accordion" onClick={toggleOpen3}>
          How should I choose my domain name?
          <img src={Seta} alt="" />
        </button>
        <div className="panel" id="btn3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </p>
        </div>

        <button className="accordion" onClick={toggleOpen4}>
          How should I choose my domain name?
          <img src={Seta} alt="" />
        </button>
        <div className="panel" id="btn4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </p>
        </div>

        <button className="accordion" onClick={toggleOpen5}>
          Is Domain Privacy + Protection worth it?
          <img src={Seta} alt="" />
        </button>
        <div className="panel" id="btn5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrequentAsk;
