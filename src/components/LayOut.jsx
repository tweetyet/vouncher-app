import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Toaster } from 'react-hot-toast'
import Nav from './Nav'

const LayOut = () => {
  return (
    <main className='flex flex-col min-h-screen p-5'>
       {/* <div className='grid justify-center'> */}
       <Header/>
        {/* <Nav/> */}
       {/* </div> */}
      
        <Outlet/>
        <Toaster position='top-center'/>
    </main>
  )
}

export default LayOut
