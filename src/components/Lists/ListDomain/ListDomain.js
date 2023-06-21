import React, { useState } from "react";
import "./style.css";
import {
  ListDomain1,
  ListDomain2,
  ListDomain3,
  ListDomain4,
  ListDomain5,
  ListDomain6,
} from "./Cards/CardsImport";

const ListDomain = () => {
  const [active, SetActive] = useState(false);

  const toggleOpen = () => {
    SetActive(!active);
    if (active === false) {
      document.getElementById("boxListMenu2").style.display = "flex";
      document.getElementById("button").style.display = "none";
    }
  };

  return (
    <section id="ListDomain">
      <div id="titleListDomain">
        <h1>List of Domain for Your website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          tristique volutp
        </p>
      </div>
      <div id="boxListMenu">
        <ListDomain1 />
        <ListDomain2 />
        <ListDomain3 />
        <ListDomain4 />
      </div>
      <div id="boxListMenu2">
        <ListDomain5 />
        <ListDomain6 />
      </div>
      <button id="button" onClick={toggleOpen}></button>
    </section>
  );
};

export default ListDomain;
