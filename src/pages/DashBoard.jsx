import React from 'react'
import Container from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import {HiSquare3Stack3D} from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";

const DashBoard = () => {
  return (
    <section>
      <Container>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-5'>
          <div className='col-span-1'>
            <ModuleBtn name={"Products"}
             icon={<HiSquare3Stack3D className='size-14'/>} 
             url={"/product"}/>

          </div>

          <div className='col-span-1'>
            <ModuleBtn name={"Sale"}
             icon={<HiMiniShoppingBag className='size-14'/>} 
             url={"/sale"}/>

          </div>

          <div className='col-span-1'>
            <ModuleBtn name={"Voucher"}
             icon={<HiMiniDocumentDuplicate className='size-14'/>} 
             url={"/voucher"}/>

          </div>
        </div>

        
      </Container>
    </section>
  )
}

export default DashBoard
