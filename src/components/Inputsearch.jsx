import React from 'react'
import {PiMagnifyingGlassThin} from 'react-icons/pi';
const Inputsearch = () => {
    return (
        <div className=' rounded-full w-4/12  md:w-1/4 overflow-hidden px-4 relative flex items-center justify-between bg-gray-200'>
            <div htmlFor="search" className='text-2xl mt-0 bg-gray-200'><PiMagnifyingGlassThin/></div>
            <input type="search" name="search" placeholder='Search For Anything' className='px-4 py-2 w-full outline-none bg-inherit' />
        </div>

    )
}

export default Inputsearch