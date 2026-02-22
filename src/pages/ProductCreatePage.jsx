import ProductCreateCard from '../components/ProductCreateCard';
import BreadCrumbs from '../components/BreadCrumbs';
import Container from '../components/Container';
import React from 'react'

const ProductCreatePage = () => {
  return (
    <section>
    <Container>
      <BreadCrumbs 
      currentPageTitle={"Create Product"} 
      links={[{title:"Products",path: "/product"}]}/>
     <ProductCreateCard/>

    </Container>
  </section>
  )
}

export default ProductCreatePage
