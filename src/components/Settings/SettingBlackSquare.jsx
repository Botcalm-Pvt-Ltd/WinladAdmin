import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';

const SettingBlackSquare = () => {
    return (
        <div className='absolute top-0 right-0 rounded-bl-[60px] rounded-br-[50px]  bg-black w-1/2 lg:w-3/5 max-2xl:h-[35%] h-3/6'>
            <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
        </div>
    )
}

export default SettingBlackSquare
