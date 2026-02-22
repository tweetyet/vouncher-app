import React from "react";
import Container from "../components/Container";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumbs currentPageTitle={"Products"}
         />
       
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
