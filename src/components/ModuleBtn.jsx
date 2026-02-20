import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className='flex flex-col gap-3 items-center bg-[#E0D3B8] text-[#3A2F26] p-5 rounded-lg shadow-lg'>
    
    {icon}
 
    {name}
    
    </Link>
  )
}

export default ModuleBtn
