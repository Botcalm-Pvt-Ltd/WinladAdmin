import React, { useState } from 'react'
import { AiFillEdit} from 'react-icons/ai'

const UserDetailViewComponent = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={()=>setShow(!show)}><AiFillEdit /></button>
            {show && (
                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10 flex flex-col items-center justify-center' onClick={()=>setShow(!show)}>
                    <div className='rounded-xl p-3 bg-cyan-300 w-1/2 mx-auto text-center'> 
                        <p className='text-base'>User Name</p>
                        <div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserDetailViewComponent