import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright  } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="pagination flex items-center justify-center gap-3 mx-auto ">
      <button className="bg-[#F2F5FB] rounded-lg focust-text-black">
        <IoMdArrowDropleft className='text-green-600 w-5 h-5'/>
      </button>
      <button className="bg-[#F2F5FB]   py-1 px-2 text-center rounded-lg focus:bg-white focus:text-green-600 focust-text-black">
        1
      </button>
      <button className="bg-[#F2F5FB]   px-2 py-1 rounded-lg focus:bg-white focus:text-green-600 focust-text-black">
        2
      </button>
      <button className="bg-[#F2F5FB]  px-2 py-1 rounded-lg focus:bg-white focus:text-green-600 focust-text-black">
        3
      </button>
      <button className="bg-[#F2F5FB]  px-2 py-1 rounded-lg focus:bg-white focus:text-green-600 focust-text-black">
        4
      </button>
      <button>...</button>
      <button className="bg-[#F2F5FB]  px-2 py-1 rounded-lg focus:bg-white focus:text-green-600 focust-text-black">
        40
      </button>
      <button className="bg-[#F2F5FB]rounded-lg focust-text-black">
        <IoMdArrowDropright className='text-green-600 w-5 h-5'/>
      </button>
    </div>
  );
}

export default Pagination