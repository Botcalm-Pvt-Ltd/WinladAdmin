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


const AdminDashboard = () => {
    return (
        <div className='flex items-start justify-center'>
            <SideNavBar />
            <div className='w-5/6 bg-white'>
                <div className='absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 h-1/2'>
                    <img src={hiddenCar} className='w-50 mt-auto absolute bottom-0 left-0' />
                </div>
                <div className='p-5'>
                    <div className='flex items-center justify-end gap-3 w-full mb-3'>
                        <Inputsearch />
                        <UserIcon />
                        <RoundIcon />
                    </div>
                    <div className='flex items-center justify-end gap-3 w-full z-10'>
                        <GreenCard />
                        <GreenCard />
                        <div className='bg-yellow-400 p-2 rounded-md flex items-center justify-between w-1/5 z-10'>
                            <input type="date" name="calendar" placeholder='Calendar' className='bg-transparent outline-none w-full' />
                            <AiOutlineDown />
                        </div>
                    </div>
                    <h1>Lottery Configuration</h1>
                    <div className="chart-container flex items-center justify-between mt-3">
                        <div className='w-2/5'>
                            <PieChart />
                        </div>
                        <div className='w-2/5'>
                            <PieChart />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className='w-8/12'>
                        <div className='flex items-center justify-between'>
                            <div className=' bg-yellow-400 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between'>
                                <div htmlFor="search" className='text-2xl mt-0'><PiMagnifyingGlassThin /></div>
                                <input type="search" name="search" placeholder='Search For Anything' className='px-4 py-2 w-full border-none  outline-none bg-yellow-400' />
                            </div>
                            <select name="filter" className='bg-yellow-400 px-3 py-2 rounded-lg'>
                                <option value="">Filter</option>
                            </select>
                        </div>


                        <div class="relative overflow-x-auto  sm:rounded-lg py-4">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead class="text-xs text-gray-7=600 capitalize bg-white">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Raffle ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Raffles Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Raffle Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Schedule Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd:bg-white even:dark:bg-gray-800 border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            01
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Luxury Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-20
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center'>Active</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                    <tr class="bg-whit  border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            02
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Mid Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-10
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center'>Inactive</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                    <tr class="odd:bg-white even:dark:bg-gray-800 border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            01
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Luxury Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-20
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center'>Active</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                    <tr class="bg-whit  border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            02
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Mid Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-10
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center'>Inactive</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                    <tr class="odd:bg-white even:dark:bg-gray-800 border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            01
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Luxury Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-20
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center'>Active</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                    <tr class="bg-whit  border-b dark:border-gray-300">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            02
                                        </th>
                                        <td class="px-6 py-4">
                                            Loto Max
                                        </td>
                                        <td class="px-6 py-4">
                                            Mid Range
                                        </td>
                                        <td class="px-6 py-4">
                                            2023-Sep-10
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center'>Inactive</div>
                                        </td>
                                        <td class="px-6 py-4 text-2xl text-gray-400">
                                            <button className='mr-2'><AiFillEye /></button>
                                            <button><AiFillEdit /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='w-full'>
                            <Pagination />
                        </div>

                    </div>
                    <div className="bg-black p-5 w-4/12 rounded-lg">
                        <BarChart />
                    </div>
                </div>
                <div className='w-full my-20'>
                    <div className='mx-auto flex items-center gap-3 justify-center'>
                        <GreenCard />
                        <GreenCard />
                        <GreenCard />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard