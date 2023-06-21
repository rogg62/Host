import React from "react";
import "../style.css";
import { Header2 } from "../../components/Header/Header1/Headers";
import ListDomain from "../../components/Lists/ListDomain/ListDomain";
import CardsDomain from "../../components/Cards/CardsDomain/Domain"
import Table from "../../components/Lists/TableDomain/Table";
import FrequentAsk from "../../components/FrequentAsk/FrequentAsk"
import Cta from "../../components/CTA/CTA1/Cta";
import Footer from "../../components/Footer/Footer";

const Hosting = () => {
  return (
    <div id="page1">
      <Header2 />
      <ListDomain />
      <Table />
      <CardsDomain />
      <FrequentAsk />
      <Cta/>
      <Footer />
    </div>
  );
};

export default Hosting;
