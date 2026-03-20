import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { Toaster } from 'react-hot-toast'
import Nav from './Nav'
import useCookie from 'react-use-cookie'

const LayOut = () => {
  const [token]= useCookie('my_token');
  const navigate = useNavigate();
 if(!token) {return <Navigate to="/"/>}
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
