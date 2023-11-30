import React from 'react'

const InputField = ({label, name, type = 'text'}) => {
    return (
        <>
            <label htmlFor={name} className='py-10'>{label}</label>
            <input type={type} name={name} placeholder={label} className='p-3 w-full ring-1 ring-black placeholder:text-center placeholder:text-black rounded-2xl mb-4' />
        </>
    )
}

export default InputField