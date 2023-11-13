import React from 'react'
import SideNavBar from './SideNavBar'
import Inputsearch from '../components/Inputsearch'
import RoundIcon from '../components/roundIcon'
import UserIcon from '../components/userIcon'
import GreenCard from '../components/GreenCard'
import { AiFillEdit, AiFillEye, AiOutlineDown } from 'react-icons/ai'
import PieChart from '../components/PieChart'
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import hiddenCar from '../assets/hiddenCar.png';
import BarChart from '../components/BarChart'
import Pagination from '../components/Pagination'
import TableLight from '../components/TableLight'


const AdminDashboard = () => {
    const table2Cols = ['User Id', 'Name', 'Verification Level', 'User Role', 'User Email', 'Passport', 'Status', 'Action'];
    const table1cOls = ['Raffle ID', 'Raffles Name', 'Raffle Category', 'Schedule Date', 'Status', 'Action']

    const table1Data = [
        {
            id: '01',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Active',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Luxury Range',
            date: '2023-Sep-20',
            status: 'Inactive',

        }
    ];
    const table2Data = [
        {
            id: '01',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Active',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Inactive',

        },
        {
            id: '02',
            name: 'Loto Max',
            category: 'Level 01',
            date: 'User',
            status: 'Inactive',

        }
    ];
    return (
        <div className='flex lg:flex-row flex-col  items-start justify-center'>
            <SideNavBar />
            <div className='w-full lg:w-5/6 bg-white'>
                <div className='absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 h-1/3 lg:h-1/2'>
                    <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
                </div>
                <div className='p-5'>
                    <div className='flex items-center justify-end gap-3 w-full mb-3'>
                        <Inputsearch />
                        <UserIcon />
                        <RoundIcon />
                    </div>
                    <div className='flex items-center justify-end gap-3 w-full z-10 mt-5'>
                    <GreenCard  text={100} subtext={'Active Lottery'}/>
                        <GreenCard text={'100/150'} subtext={'Average User Convergentratio'}/>
                        <div className='bg-yellow-300 p-2 rounded-md flex items-center justify-between w-1/5 z-10'>
                            <input type="date" name="calendar" placeholder='Calendar' className='bg-transparent outline-none w-full' />
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className="chart-container flex items-center flex-col md:flex-row justify-between mt-4">
                        <div className='md:w-2/5 w-full z-10'>
                            <PieChart labels={['Luxury Range', 'Mid Range', 'Low Range']} heading={<h1>Lottery Configurations</h1>} />
                        </div>
                        <div className='md:w-2/5 w-full z-10'>
                            <PieChart labels={['Bornze', 'Silver', 'Gold', 'Platinum', 'Titanium']} labelCOlor='#fff' chartSeries={[51, 2, 11, 18, 27]} heading={<h1 className='text-white'>Subscription Distributions</h1>} />
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-between gap-3 mt-3">
                    <div className='w-8/12'>
                        <div className='flex items-center justify-between'>
                            <div className=' bg-yellow-300 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between'>
                                <div htmlFor="search" className='text-2xl mt-0'><PiMagnifyingGlassThin /></div>
                                <input type="search" name="search" placeholder='Search For Anything' className='px-4 py-2 w-full border-none  outline-none bg-yellow-300' />
                            </div>
                            <select name="filter" className='bg-yellow-300 px-3 py-2 rounded-lg'>
                                <option value="">Filter</option>
                            </select>
                        </div>


                        <div className="relative overflow-x-auto  sm:rounded-lg py-4">
                            <TableLight cols={table1cOls} data={table1Data} />
                        </div>
                        <div className='w-full'>
                            <Pagination />
                        </div>

                    </div>
                    <div className="bg-black p-3 w-4/12 rounded-tl-3xl rounded-bl-3xl">
                        <BarChart />
                    </div>
                </div>
                <div className='w-full my-14 '>
                    <div className='mx-auto flex items-center gap-3 justify-center'>
                        <GreenCard  text={'100'} subtext={'Total UserCount'}/>
                        <GreenCard text={'100/150'} subtext={'Average User Convergentratio'}/>
                        <GreenCard text={'20'} subtext={'Unverify User Convergentratio'}/>
                    </div>
                </div>
                <div className="relative overflow-x-auto  sm:rounded-lg py-0 my-14 px-3">
                    <div className='flex items-center justify-between'>
                        <div className=' bg-yellow-300 rounded-full w-3/12  md:w-90 overflow-hidden px-4 relative flex items-center justify-between'>
                            <div htmlFor="search" className='text-2xl mt-0'><PiMagnifyingGlassThin /></div>
                            <input type="search" name="search" placeholder='Search For Anything' className='px-4 py-2 w-full border-none  outline-none bg-yellow-300' />
                        </div>
                        <select name="filter" className='bg-yellow-300 px-3 py-2 rounded-lg'>
                            <option value="">Filter</option>
                        </select>
                    </div>
                    <TableLight cols={table2Cols} data={table2Data} />
                    <div className='w-full'>
                        <Pagination />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard