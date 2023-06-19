import React from "react";
import "../style.css";
import { Head2 } from "../../components/HeaderMin/Headers";
import Features from "../../components/Features/Features";
import Table from "../../components/TableDomain/Table";
import Table2 from "../../components/Table2/Table2";
import Cta from "../../components/CTA/Cta";
import Footer from "../../components/Footer/Footer";

const Princing = () => {
  return (
    <main id="page1">
      <Head2 />
      <Features />
      <Table />
      <Table2 />
      <Cta />
      <Footer />
    </main>
  );
};

export default Princing;
