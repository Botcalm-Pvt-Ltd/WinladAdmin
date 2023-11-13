import React from 'react'
import {PiMagnifyingGlassThin} from 'react-icons/pi';
const Inputsearch = () => {
    return (
        <div className=' bg-white rounded-full w-4/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between'>
            <div htmlFor="search" className='text-2xl mt-0'><PiMagnifyingGlassThin/></div>
            <input type="search" name="search" placeholder='Search For Anything' className='px-4 py-2 w-full outline-none' />
        </div>

    )
}

export default Inputsearch