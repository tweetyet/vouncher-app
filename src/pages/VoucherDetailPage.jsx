
import VoucherCard from '../components/VoucherCard'
import BreadCrumbs from '../components/BreadCrumbs'
import Container from '../components/Container'
import React from 'react'

const VoucherDetailPage = () => {
  return (
    <section>
    <Container>
      <BreadCrumbs
      currentPageTitle={"Voucher Detail"} 
      links={[{title:"Voucher",path: "/voucher"}]}/>
      <VoucherCard/>
   </Container>
  </section>
  )
}

export default VoucherDetailPage
