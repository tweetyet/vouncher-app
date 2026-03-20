import React from 'react'
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { removeCookie } from 'react-use-cookie';

const LogOut = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        removeCookie("my_token");
        navigate('/');
    }
  return (
    <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-4 py-2 rounded-xl 
    bg-[#E0D3B8] text-[#3A2F26] 
    p-5 rounded-lg shadow-lg hover:text-[#E0D3B8] hover:bg-[#3A2F26]
    transition-all duration-400 ease-out
    hover:scale-105 hover:shadow-xl duration-200"
  >
    <HiArrowRightOnRectangle className="w-5 h-5" />
    Logout
  </button>
  )
}

export default LogOut
