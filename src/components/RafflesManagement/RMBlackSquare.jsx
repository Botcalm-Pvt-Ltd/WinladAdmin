import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';


const RMBlackSquare = () => {
  return (
    <div className='absolute top-0 right-0 rounded-bl-[50px] rounded-br-3xl  bg-white w-5/6 xl:w-3/5 h-[70px] 2xl:h-[90px] border'>
      <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0 invisible' />
    </div>
  )
}

export default RMBlackSquare
