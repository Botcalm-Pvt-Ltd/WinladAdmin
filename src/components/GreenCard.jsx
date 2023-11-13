import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'

const GreenCard = ({icon = <AiOutlineLineChart/> , text, subtext}) => {
  return (
    <div className='bg-green-300 flex items-center justify-center px-3 py-2 rounded-xl w-40 z-10  overflow-hidden leading-none '>
        <div className='w-1/3 text-3xl'>
           {icon}
        </div>
        <div className='w-2/3 whitespace-nowrap overflow-hidden'>
            <h5>{text}</h5>
            <p className='text-xs text-gray-500'>{subtext}</p>
        </div>
    </div>
  )
}

export default GreenCard