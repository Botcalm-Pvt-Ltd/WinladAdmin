import React from 'react'

const InputField = ({label, name, type = 'text'}) => {
    return (
        <>
            {/* <label htmlFor={name} className='py-10'>{label}</label> */}
            <input type={type} name={name} placeholder={label} className='p-3 w-full placeholder:text-left placeholder:text-gray-500 rounded-lg mb-4 bg-white ring-2 ring-gray-300' />
        </>
    )
}

export default InputField