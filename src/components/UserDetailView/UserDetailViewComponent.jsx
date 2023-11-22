import React, { useState } from 'react'
import { AiFillEdit} from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';

const UserDetailViewComponent = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={()=>setShow(!show)}><AiFillEdit /></button>
            {show && (
                
                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10 flex flex-col items-center justify-center'>
                    
                    <div className='rounded-xl py-8 bg-cyan-100 w-full md:w-3/4 lg:w-1/2 mx-auto text-center px-10'> 
                    <OutsideClickHandler onOutsideClick={()=>setShow(false)} >
                        <p className='text-black text-sm'>Jane Cooper</p>
                        <div className='mt-8'>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>User Id</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>Name</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>Verification Level</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>User Role</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>Email</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-between mb-3">
                                <p className='text-sm'>Passport</p>
                                <input type="text" name="name" className='bg-cyan-200 outline-none border-none px-3 py-0.5 w-1/2 rounded-lg' />
                            </div>
                            <div className="input-area flex items-center text-black justify-end mb-3 gap-2">
                                <button className='outline-none px-2 py-1 bg-gray-500 border-black border border-1 text-xs'>
                                    Active
                                </button>
                                <button className='outline-none px-2 py-1 bg-red-200 border-red-500 border border-1 text-xs text-red-500'>
                                    Inactive
                                </button>
                            </div>
                        </div>
                        <button className='text-sm px-3 py-1 text-white bg-black rounded-md float-right'>Save</button>
                        </OutsideClickHandler>
                    </div>
                   
                </div>
         
            )}
        </>
    )
}

export default UserDetailViewComponent