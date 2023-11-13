import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';
import userIcon from  '../assets/ProfilePhoto.png'
const UserIcon = () => {
  return (
    <div className='flex items-center justify-between w-4/12  md:w-4/12 lg:w-2/12 gap-2 px-1 py-0.5 bg-white rounded-full z-10'>
        <div className='w-10 rounded-full overflow-hidden text-center aspect-square'>
            <img src={userIcon} alt="usericon" className='w-full h-full object-cover'/>
        </div>
        <div className='w-7/12 whitespace-nowrap overflow-hidden leading-none'>
            <h6 className='mb-0 text-black'>User Name</h6>
            <p className='text-sm'>@Windy_Shahel</p>
        </div>
        <div className="w-10">
            <AiOutlineDown/>
        </div>
    </div>
  )
}

export default UserIcon