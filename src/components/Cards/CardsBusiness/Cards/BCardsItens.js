import React from "react";
import BCards from "./BCards";

const BCardsItens1 = ({ titleB, paragrafB }) => {
  return (
    <BCards
      titleB="Simple, Fast and Scalable"
      paragrafB="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut"
    />
  );
};

const BCardsItens2 = ({ titleB, paragrafB }) => {
  return (
    <BCards
      titleB="Complete PHP Hosting"
      paragrafB="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut"
    />
  );
};

const BCardsItens3 = ({ titleB, paragrafB }) => {
  return (
    <BCards
      titleB="CyberSafe and Secure Panel"
      paragrafB="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut"
    />
  );
};

export { BCardsItens1, BCardsItens2, BCardsItens3 };
