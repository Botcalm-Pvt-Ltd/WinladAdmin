import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'

const GreenCard = ({icon = <AiOutlineLineChart size={40}/> , text, subtext}) => {
  return (
    <div className="bg-[#696969] flex items-center justify-between gap-5 px-4 py-1 rounded-xl   leading-none hover:-translate-y-1 transition-all cursor-pointer">
      <div className=" text-white">{icon}</div>
      <div className=" ">
        <h5 className="text-2xl text-white">{text}</h5>
        <p className="text-xs text-white">{subtext}</p>
      </div>
    </div>
  ); 
}

export default GreenCard