import React from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
const Pagination = () => {
  return (
    <button className='pagination flex items-center justify-center gap-3 ml-auto'>
        <button className='bg-yellow-400 p-2 rounded-lg'>
            <MdArrowBackIosNew/>
        </button>
        <button className='bg-yellow-400 py-1 px-2 text-center rounded-lg'>
            1
        </button>
        <button className='bg-yellow-400 px-2 py-1 rounded-lg'>
            2
        </button>
        <button className='bg-yellow-400 px-2 py-1 rounded-lg'>
            3
        </button>
        <button className='bg-yellow-400 px-2 py-1 rounded-lg'>
            4
        </button>
        <button>
            ...
        </button>
        <button className='bg-yellow-400 px-2 py-1 rounded-lg'>
            40
        </button>
        <button className='bg-yellow-400 p-2 rounded-lg'>
            <MdArrowForwardIos/>
        </button>
    </button>
  )
}

export default Pagination