import React, { useRef, useState } from 'react'
import TopBar from '../../components/TopBar'
import SideNavComponent from '../../components/SideNavComponent/SideNavComponent'
import BackSquare from '../../components/BackgroundBlackSquare/BackSquare'
import DragFile from '../../components/DragAndDropArea/DragFile'
import InputField from '../../components/Settings/InputField'


const Settings = () => {


    return (
        <div className='flex lg:flex-row flex-row  items-start justify-between'>
            <SideNavComponent />
            <div className='w-full lg:w-full bg-white overflow-hidden py-3'>
                <BackSquare />
                <div className='relative'>
                    <div className='lg:p-5 p-1'>
                        <TopBar />
                    </div>
                    {/* Section 1 */}
                    <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
                        <div className='w-1/3'>
                            <h5 className='mb-5 text-xl font-semibold'>Appearance Configuration</h5>
                            <DragFile />

                            <select name="font" id="font" className='bg-yellow-200 p-3 rounded-full mt-4 w-full'>
                                <option value="font">Font</option>
                            </select>
                        </div>
                        <div className='w-2/3 relative text-right lg:p-8'>
                            <button className='lg:bg-white lg:text-black text-white bg-black rounded-2xl px-5 py-2 ml-auto'>Save</button>
                        </div>
                    </div>
                    <hr className='my-8 bg-gray-200 w-4/5 mx-auto'/>
                    {/* Section 2 */}
                    <h5 className='mb-5 text-xl font-semibold lg:px-5'>Email Gateway Configaration </h5>
                    <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10 ">
                        <div className="w-1/3">
                            <InputField label={'Host Name'} name={'hostname'} />
                            <InputField label={'SMTP User Name'} name={'smtp'} />
                            <InputField label={'Encryption Type'} name={'enctype'} type='select' />
                        </div>
                        <div className="w-1/3">
                            <InputField label={'Port Number'} name={'port'} />
                            <InputField label={'SMTP Password'} name={'smtpwd'} />
                            <InputField label={'Sender Name'} name={'sender'} />
                        </div>
                        <div className="w-1/3">
                            <InputField label={'Email'} name={'email'} />
                        </div>
                        <div className='w-auto'>
                            <button className='border border-1 border-black px-5 py-1 rounded-xl mb-4'>Test</button>
                            <button className='bg-black px-5 py-1 text-white rounded-xl mb-4'>Save</button>
                        </div>
                    </div>
                    <hr className='my-8 bg-gray-200 w-4/5 mx-auto'/>
                    {/* Section 3 */}
                    <h5 className='mb-5 text-xl font-semibold lg:px-5'>Payment Gateway & Type Configaration</h5>
                    <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
                        <div className="w-1/3">
                            {/* Payment type switch */}
                        </div>
                        <div className="w-1/3">
                            <InputField label={'Publish Key'} name={'publish'} />
                            <InputField label={'Secret Key'} name={'secret'} />
                        </div>
                        <div className="w-1/3">
                            
                        </div>
                        <div className='w-auto'>
                            <button className='border border-1 border-black px-5 py-1 rounded-xl mb-4'>Test</button>
                            <button className='bg-black px-5 py-1 text-white rounded-xl mb-4'>Save</button>
                        </div>
                    </div>
                    <hr className='my-8 bg-gray-200 w-4/5 mx-auto'/>

                    {/* Section 4 */}
                    <h5 className='mb-5 text-xl font-semibold lg:px-5'>SMS Gateway Configaration</h5>
                    <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
                        <div className="w-1/3">
                        <InputField label={'Account SID'} name={'sid'} />
                        <InputField label={'Auth Token'} name={'token'} />
                        </div>
                        <div className="w-1/3">
                            <InputField label={'Auth Token'} name={'token'} />
                          
                        </div>
                        <div className="w-1/3">
                            
                        </div>
                        <div className='w-auto'>
                            <button className='border border-1 border-black px-5 py-1 rounded-xl mb-4'>Test</button>
                            <button className='bg-black px-5 py-1 text-white rounded-xl mb-4'>Save</button>
                        </div>
                    </div>
                    <hr className='my-8 bg-gray-200 w-4/5 mx-auto'/>
                </div>

            </div>
        </div>
    )
}

export default Settings