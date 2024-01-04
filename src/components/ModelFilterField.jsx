import React from 'react'

const ModelFilterField = ({label}) => {
  return (
    <>
       <select
              name="font"
              id="font"
              className="bg-[#F2F5FB] px-3 py-3 mb-4 rounded-lg w-full text-gray-500"
            >
              <option value="font">{label}</option>
            </select>
    </>
  )
}

export default ModelFilterField
