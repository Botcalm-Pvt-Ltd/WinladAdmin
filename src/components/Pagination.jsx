import React from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
const Pagination = () => {
  return (
    <div className="pagination flex items-center justify-center gap-3 mx-auto float-right">
      <button className="bg-[#FFFFFF] border-2 border-[#000000] p-2 rounded-lg">
        <MdArrowBackIosNew />
      </button>
      <button className="bg-[#FFFFFF]  border-2 border-[#000000] py-1 px-2 text-center rounded-lg">
        1
      </button>
      <button className="bg-[#FFFFFF]  border-2 border-[#000000] px-2 py-1 rounded-lg">
        2
      </button>
      <button className="bg-[#FFFFFF] border-2 border-[#000000] px-2 py-1 rounded-lg">
        3
      </button>
      <button className="bg-[#FFFFFF] border-2 border-[#000000] px-2 py-1 rounded-lg">
        4
      </button>
      <button>...</button>
      <button className="bg-[#FFFFFF] border-2 border-[#000000] px-2 py-1 rounded-lg">
        40
      </button>
      <button className="bg-[#FFFFFF] border-2 border-[#000000] p-2 rounded-lg">
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination