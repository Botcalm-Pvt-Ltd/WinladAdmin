import React from 'react'
import hiddenCar from '../../assets/hiddenCar.png';


const RMBlackSquare = () => {
  return (
    <div className='absolute top-0 right-0 rounded-bl-[50px] rounded-br-3xl  bg-black w-3/5 h-1/5 max-xl:h-[10%] max-lg:w-4/5'>
            <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
        </div>
  )
}

export default RMBlackSquare
