import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import VoucherList from '../components/VoucherList'
import Container from '../components/Container'

const VoucherPage = () => {
  return (

  <section>
    <Container>
     < BreadCrumbs currentPageTitle={"Voucher"}/>
     <VoucherList/>
     </Container>
    </section>

  )
}

export default VoucherPage
