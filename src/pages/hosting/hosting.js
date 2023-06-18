import React from "react";
import "../style.css";
import {Header2} from "../../components/Header/Headers";
import ListDomain from "../../components/ListDomain/ListDomain";
import Table from "../../components/TableDomain/Table";
import Domain from "../../components/CardsDomain/Domain";
import Cta from "../../components/CTA/Cta"
import Footer from "../../components/Footer/Footer"

const Hosting = () => {
  return (
    <div id="page1">
      <Header2 />
      <ListDomain />
      <Table />
      <Domain />
      <Cta />
      <Footer />
    </div>
  );
};

export default Hosting;
