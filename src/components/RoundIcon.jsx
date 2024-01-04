import React from 'react'
import { AiFillBell } from 'react-icons/ai'

const RoundIcon = () => {
  return (
    <div className='w-10 aspect-square z-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200/40  hover:bg-slate-100  p-1 text-2xl hover:cursor-pointer'>
            <AiFillBell/>
    </div>
  )
}

export default RoundIcon