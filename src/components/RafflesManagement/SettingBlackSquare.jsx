import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';


const SettingBlackSquare = () => {
  return (
    <div className='absolute top-0 right-0 rounded-bl-[50px]  bg-black lg:w-1/2 lg:h-[5%] h-[5%] w-2/3'>
            <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
        </div>
  )
}

export default SettingBlackSquare
