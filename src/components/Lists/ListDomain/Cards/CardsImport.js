import React from "react";
import CardList from "./CardList";

const ListDomain1 = () => {
  return <CardList Domain={".com"} Price={"8.99"} />;
};

const ListDomain2 = () => {
  return <CardList Domain={".ONLINE"} Price={"0.99"} />;
};

const ListDomain3 = () => {
  return <CardList Domain={".LINK"} Price={"3.99"} />;
};

const ListDomain4 = () => {
  return <CardList Domain={".XYZ"} Price={"1.99"} />;
};

const ListDomain5 = () => {
  return <CardList Domain={".Live"} Price={"4.99"} />;
};

const ListDomain6 = () => {
  return <CardList Domain={".digital"} Price={"5.99"} />;
};

export { ListDomain1, ListDomain2, ListDomain3, ListDomain4, ListDomain5, ListDomain6 };
