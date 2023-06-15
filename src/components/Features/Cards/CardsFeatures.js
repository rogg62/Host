import React from "react";
import "./style.css";
import Aprovado from "./assets/Checkmark.svg";
import Reprovado from "./assets/Multiply.svg";

import Aprovado1 from "./assets/Checkmark (1).svg"
import Reprovado1 from "./assets/Multiply (1).svg"

const CardsFeatures = () => {
  return (
    <div className="CardFeatures">
      <div id="CardFeaturesTitle">
        <h2>Personal</h2>
        <h1 id="price1">$50</h1>
      </div>

      <div id="CardFeaturesTable">
        <span>
          <img src={Aprovado} alt="" />1 Website
        </span>
        <span>
          <img src={Aprovado} alt="" />
          30 GB SSD Storage
        </span>
        <span>
          <img src={Reprovado} alt="" />
          Free SSL
        </span>
        <span>
          <img src={Reprovado} alt="" />
          Free Domain
        </span>
        <span>
          <img src={Reprovado} alt="" />
          Google Ads
        </span>
        <span>
          <img src={Aprovado} alt="" />
          Managed WordPress
        </span>
        <span>
          <img src={Aprovado} alt="" />
          30 Days Money Back Guarantee
        </span>
        <span>
          <img src={Aprovado} alt="" />1 Email Account
        </span>
      </div>

      <button>Select Plan</button>
    </div>
  );
};

const CardsFeatures2 = () => {
  return (
    <div className="CardFeatures" id="CardFeatures">
      <div id="CardFeaturesTitle">
        <h2>Team</h2>
        <h1 id="price2">$150</h1>
      </div>

      <div id="CardFeaturesTable">
        <span>
          <img src={Aprovado1} alt="" />5 Website
        </span>
        <span>
          <img src={Aprovado1} alt="" />
          100 GB SSD Storage
        </span>
        <span>
          <img src={Reprovado1} alt="" />
          Free SSL
        </span>
        <span>
          <img src={Reprovado1} alt="" />
          Free Domain
        </span>
        <span>
          <img src={Aprovado1} alt="" />
          Google Ads
        </span>
        <span>
          <img src={Aprovado1} alt="" />
          Managed WordPress
        </span>
        <span>
          <img src={Aprovado1} alt="" />
          30 Days Money Back Guarantee
        </span>
        <span>
          <img src={Aprovado1} alt="" />5 Email Account
        </span>
      </div>

      <button>Select Plan</button>
    </div>
  );
};

const CardsFeatures3 = () => {
  return (
    <div className="CardFeatures">
      <div id="CardFeaturesTitle">
        <h2>Business</h2>
        <h1 id="price3">$250</h1>
      </div>

      <div id="CardFeaturesTable">
        <span>
          <img src={Aprovado} alt="" />10 Website
        </span>
        <span>
          <img src={Aprovado} alt="" />
          300 GB SSD Storage
        </span>
        <span>
          <img src={Aprovado} alt="" />
          Free SSL
        </span>
        <span>
          <img src={Aprovado} alt="" />
          Free Domain
        </span>
        <span>
          <img src={Aprovado} alt="" />
          Google Ads
        </span>
        <span>
          <img src={Aprovado} alt="" />
          Managed WordPress
        </span>
        <span>
          <img src={Aprovado} alt="" />
          30 Days Money Back Guarantee
        </span>
        <span>
          <img src={Aprovado} alt="" />10 Email Account
        </span>
      </div>

      <button>Select Plan</button>
    </div>
  );
};

export { CardsFeatures, CardsFeatures2, CardsFeatures3 };
