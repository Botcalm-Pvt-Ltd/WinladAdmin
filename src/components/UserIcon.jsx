import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai';
import userIcon from  '../assets/ProfilePhoto.png'
import { Link } from 'react-router-dom';
const UserIcon = () => {
  const [menu, setMenu] = useState(false);

  const handleViewUserMenu = ()=>{
    setMenu((prev)=> !prev);
  }
  return (
    <div className='flex items-center justify-between w-4/12  md:w-4/12 lg:w-2/12 gap-2 px-1 py-0.5 rounded-full z-10 relative bg-gray-200'>
        <div className='w-10 rounded-full overflow-hidden text-center aspect-square'>
            <img src={userIcon} alt="usericon" className='w-full h-full object-cover'/>
        </div>
        <div className='w-7/12 whitespace-nowrap overflow-hidden leading-none'>
            <h6 className='mb-0 text-black'>User Name</h6>
            <p className='text-sm'>@Windy_Shahel</p>
        </div>
        <div className="w-10">
            <AiOutlineDown onClick={handleViewUserMenu}/>
        </div>
        {
          menu && <div className='absolute top-10 left-0 w-full bg-white p-2 rounded-xl shadow-2xl'>
              <Link>Content</Link>
          </div>
        }
       
    </div>
  )
}

export default UserIcon