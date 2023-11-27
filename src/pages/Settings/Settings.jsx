import React, { useRef, useState } from 'react'
import TopBar from '../../components/TopBar'
import SideNavComponent from '../../components/SideNavComponent/SideNavComponent'
import BackSquare from '../../components/BackgroundBlackSquare/BackSquare'
import DragFile from '../../components/DragAndDropArea/DragFile'


const Settings = () => {


    return (
        <div className='flex lg:flex-row flex-row  items-start justify-between'>
            <SideNavComponent />
            <div className='w-full lg:w-full bg-white overflow-hidden py-3'>
                <BackSquare />
                <div className='lg:p-5 p-1'>
                    <TopBar />
                </div>
                <div className="flex items-center justify-between gap-3 mt-8 flex-col lg:flex-row px-3 lg:px-5">
                    <div>
                        <h5 className='mb-3'>Appearance Configuration</h5>
                        <DragFile/>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Settings