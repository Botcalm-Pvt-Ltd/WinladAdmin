import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';
const UserIcon = () => {
  return (
    <div className='flex items-center justify-between w-6/12  md:w-3/12 px-2 py-1 bg-white rounded-full z-10'>
        <div className='w-11 rounded-full overflow-hidden text-center aspect-square'>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="usericon" className='w-full h-full object-cover'/>
        </div>
        <div className='w-7/12'>
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