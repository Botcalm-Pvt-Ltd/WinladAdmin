import React from 'react'
import { AiFillBell } from 'react-icons/ai'

const RoundIcon = () => {
  return (
    <div className='w-12 aspect-square z-10 rounded-full overflow-hidden text-center bg-white  hover:bg-slate-100  p-3 text-2xl hover:cursor-pointer'>
            <AiFillBell/>
    </div>
  )
}

export default RoundIcon