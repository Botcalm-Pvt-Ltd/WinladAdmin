import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'

const GreenCard = ({icon = <AiOutlineLineChart/> , text, subtext}) => {
  return (
    <div className="bg-[#696969] flex items-center justify-center px-3 py-2 rounded-xl w-52 z-10  overflow-hidden leading-none hover:-translate-y-1 transition-all cursor-pointer">
      <div className="w-1/4 text-3xl text-white">{icon}</div>
      <div className="w-3/4 whitespace-nowrap overflow-hidden">
        <h5 className="text-xs text-white">{text}</h5>
        <p className="text-xs text-white">{subtext}</p>
      </div>
    </div>
  ); 
}

export default GreenCard