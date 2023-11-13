import React from 'react'
import Inputsearch from './Inputsearch'
import UserIcon from './userIcon'
import RoundIcon from './roundIcon'

const TopBar = () => {
  return (
    <div className='flex items-center justify-end gap-3 w-full mb-3'>
                        <Inputsearch />
                        <UserIcon />
                        <RoundIcon />
                    </div>
  )
}

export default TopBar