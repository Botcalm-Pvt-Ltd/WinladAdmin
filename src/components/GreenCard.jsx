import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'

const GreenCard = ({icon, text, subtext}) => {
  return (
    <div className='bg-green-400 flex items-center justify-center px-3 py-1 rounded-xl w-40 z-10'>
        <div className='w-1/3 text-3xl'>
           <AiOutlineLineChart/>
        </div>
        <div className='w-2/3'>
            <h5>100</h5>
            <p className='text-xs'>Count</p>
        </div>
    </div>
  )
}

export default GreenCard