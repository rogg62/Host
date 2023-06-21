import React from "react";
import "../style.css";
//components
import { Head2 } from "../../components/Header/Header2/Headers2";
import Features from "../../components/Features/Features"
import Table2 from "../../components/Lists/Table2/Table2";
import TableDomain from "../../components/Lists/TableDomain/Table"
import Cta from "../../components/CTA/CTA1/Cta";
import Footer from "../../components/Footer/Footer";

const Princing = () => {
  return (
    <main id="page1">
      <Head2 />
      <Features />
      <Table2 />
      <TableDomain />
      <Cta />
      <Footer />
    </main>
  );
};

export default Princing;
