import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';

const BackSquare = () => {
    return (
        <div className='absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 lg:w-3/5 h-2/6 lg:h-2/5 xl:h-3/5'>
            <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
        </div>
    )
}

export default BackSquare