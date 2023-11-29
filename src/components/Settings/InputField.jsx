import React from 'react'

const InputField = ({label, name, type = 'text'}) => {
    return (
        <>
            <label htmlFor={name} className='py-10'>{label}</label>
            <input type={type} name={name} placeholder={label} className='p-3 w-full bg-yellow-200 placeholder:text-center placeholder:text-black rounded-full mb-4' />
        </>
    )
}

export default InputField