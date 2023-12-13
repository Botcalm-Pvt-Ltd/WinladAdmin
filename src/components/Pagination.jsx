import React from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
const Pagination = () => {
  return (
    <div className="pagination flex items-center justify-center gap-3 mx-auto ">
      <button className="bg-[#FFFFFF]  p-2 rounded-lg focus:bg-gray-200 focust-text-black">
        <MdArrowBackIosNew />
      </button>
      <button className="bg-[#FFFFFF]   py-1 px-2 text-center rounded-lg focus:bg-gray-200 focust-text-black">
        1
      </button>
      <button className="bg-[#FFFFFF]   px-2 py-1 rounded-lg focus:bg-gray-200 focust-text-black">
        2
      </button>
      <button className="bg-[#FFFFFF]  px-2 py-1 rounded-lg focus:bg-gray-200 focust-text-black">
        3
      </button>
      <button className="bg-[#FFFFFF]  px-2 py-1 rounded-lg focus:bg-gray-200 focust-text-black">
        4
      </button>
      <button>...</button>
      <button className="bg-[#FFFFFF]  px-2 py-1 rounded-lg focus:bg-gray-200 focust-text-black">
        40
      </button>
      <button className="bg-[#FFFFFF]  p-2 rounded-lg focus:bg-gray-200 focust-text-black">
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination