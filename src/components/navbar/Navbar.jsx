import React, { useState } from "react";

const navItems = ["Home", "About", "Services", "Shop"];


function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-[85%] relative bg-white m-auto px-4 py-3 rounded-[43px] flex justify-between items-center z-10 shadow-sm">
        
      <div className="flex gap-5 items-center list-none font-medium text-[18px] text-[#64748B]">
       {
        navItems.map((item,index)=>
          <li onClick={()=>setActiveIndex(index)} className={activeIndex === index ? 'active' : ''} key={item}>
            <a href="#">{item}</a>
          </li>
        )
       }
      </div>
      <div className="before:block before:w-[80px] before:h-[80px] before:bg-white before:absolute before:-top-5 before:rounded-full before:-z-10 before:shadow-lg after:block after:w-[80px] after:h-[80px] after:bg-white after:absolute after:-bottom-5 after:rounded-full after:-z-10 after:shadow-lg flex justify-center items-center">
        <div className="bg-white z-30 absolute flex justify-center py-3  w-[150px]">

        <img className="w-[50px] z-10" src="/public/logo.png" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <li className="list-none font-medium text-[18px] text-[#64748B] border-r-[2px] pr-5">
          <a href="#">Contact</a>
        </li>
        
        <button className="w-[40px] h-[40px] border border-[#E2E8F0] flex justify-center items-center rounded-lg">
            <img src="/public/search.png" alt="" />
        </button>
        <button className="w-[40px] h-[40px] bg-[#AE8240] flex justify-center items-center rounded-lg">
            <img src="/public/cart.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
5