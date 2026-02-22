import ProductCreateCard from '../components/ProductCreateCard';
import BreadCrumbs from '../components/BreadCrumbs';
import Container from '../components/Container';
import React from 'react'
import ProductEditCard from '../components/ProductEditCard';

const ProductEditPage = () => {
  return (
    <section>
    <Container>
      <BreadCrumbs 
      currentPageTitle={"Edit Product"} 
      links={[{title:"Products",path: "/product"}]}/>
     <ProductEditCard/>

    </Container>
  </section>
  )
}

export default ProductEditPage
