import React from 'react'

const ViewBox = ({color ='purple', count = '0', label = 'Loading'}) => {
  return (
    <div className='bg-white p-4 flex items-center justify-start w-1/4 max-w-[400px] gap-4'>
        <div className={`bg-${color}-200 rounded-full relative p-4`}>
            <div className={`bg-${color}-500 p-3 rounded-full`}>

            </div>
        </div>
        <div>
            <h2 className='font-bold text-xl'>100+</h2>
            <p className='text-sm text-gray-500'>Active Users</p>
        </div>

    </div>
  )
}

export default ViewBox