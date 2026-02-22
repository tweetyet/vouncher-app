import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import  Container from "../components/Container";
import VoucherInfo from "../components/VoucherInfo";
import SaleForm from "../components/SaleForm";

const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumbs currentPageTitle={"Sale"} />
        <VoucherInfo/>
        {/* <SaleForm/> */}
      </Container>
    </section>
  );
};

export default SalePage;
