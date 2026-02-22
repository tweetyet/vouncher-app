import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className='flex flex-col gap-3 items-center 
    bg-[#E0D3B8] text-[#3A2F26] 
    p-5 rounded-lg shadow-lg hover:text-[#E0D3B8] hover:bg-[#3A2F26]
    transition-all duration-400 ease-out
    hover:scale-105 
    hover:shadow-xl
    cursor-pointer'>
    
    {icon}
 
    {name}
    
    </Link>
  )
}

export default ModuleBtn
