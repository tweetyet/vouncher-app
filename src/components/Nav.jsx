import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-8 px-8 py-3 
        rounded-full 
        bg-white/10 
        backdrop-blur-md 
        border border-white/20 
        shadow-lg"
        >
          <div className="font-semibold text-[#3A2F26]">Home</div>

          <div className="flex gap-6 text-[#3A2F26]/80">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
