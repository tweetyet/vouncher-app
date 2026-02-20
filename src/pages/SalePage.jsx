import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import  Container from "../components/Container";

const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumbs currentPageTitle={"Sale"} />
      </Container>
    </section>
  );
};

export default SalePage;
