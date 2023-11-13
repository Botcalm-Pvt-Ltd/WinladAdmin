import React from 'react'
import { AiFillBell } from 'react-icons/ai'

const RoundIcon = () => {
  return (
    <div className='w-11 aspect-square z-10 rounded-full overflow-hidden flex items-center justify-center bg-white  hover:bg-slate-100  p-2 text-2xl hover:cursor-pointer'>
            <AiFillBell/>
    </div>
  )
}

export default RoundIcon