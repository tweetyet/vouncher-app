import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const LayOut = () => {
  return (
    <main className='flex flex-col min-h-screen p-5'>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default LayOut
