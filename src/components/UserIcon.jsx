import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';
import userIcon from  '../assets/ProfilePhoto.png'
const UserIcon = () => {
  return (
    <div className='flex items-center justify-between w-6/12  md:w-3/12 px-1 py-0.5 bg-white rounded-full z-10'>
        <div className='w-10 rounded-full overflow-hidden text-center aspect-square'>
            <img src={userIcon} alt="usericon" className='w-full h-full object-cover'/>
        </div>
        <div className='w-7/12 whitespace-nowrap overflow-hidden'>
            <h6>User Name</h6>
            <p className='text-xs'>Profession</p>
        </div>
        <div className="w-10">
            <AiOutlineDown/>
        </div>
    </div>
  )
}

export default UserIcon