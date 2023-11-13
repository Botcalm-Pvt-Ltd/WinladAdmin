import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';

const BackSquare = () => {
    return (
        <div className='absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 lg:w-2/3 h-1/3 lg:h-1/2'>
            <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
        </div>
    )
}

export default BackSquare