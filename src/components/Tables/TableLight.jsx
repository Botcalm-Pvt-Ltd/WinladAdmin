import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillEye, AiOutlineDown } from 'react-icons/ai'
import UserDetailViewComponent from '../UserDetailView/UserDetailViewComponent'
import ViewRaffles from '../RafflesManagement/ViewRaffles';
import EditRaffles from '../RafflesManagement/EditRaffles';
import ViewRaffle from '../AdminDashboard/ViewRaffle';
import { MdDelete } from 'react-icons/md';
import EditRaffle from '../AdminDashboard/EditRaffle';
import swal from "sweetalert";
const TableLight = ({ cols, data }) => {
    const [viewGive, setViewGive] = useState(false);
    const [editGive, setEditGive] = useState(false);
    const [selectedRaffle, setSelectedRaffle] = useState({});

    const handleViewGiveaway = (row) => {
        setSelectedRaffle(row);
        setViewGive(true);
    }
    const handleDelete = (row) =>
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this entry?",
            icon: "warning",
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Deleted!", "Your entry has been deleted!", "success");
            }
        });
    const handleEditGiveaway = (row) => {
        setSelectedRaffle(row);
        setEditGive(true);
    }


    const handleClose = () => {
        setEditGive(false);
        setViewGive(false);
    }
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-7=600 capitalize bg-white">
                <tr>
                    {
                        cols.map((el, key) => {
                            return (
                                <th scope="col" className={`px-6 py-3 ${key == 5 ? 'text-right' : ''}`} key={key}>
                                    {el}
                                </th>
                            )
                        }
                        )
                    }
                </tr>

            </thead>
            <tbody>

                {
                    data.map((el, key) => {
                        return (
                            <tr className={`odd:bg-white  border-b dark:border-gray-300`} key={key}>


                                <td className="px-6 py-4">
                                    {el.id}
                                </td>
                                <td className="px-6 py-4">
                                    {el.name}
                                </td>
                                <td className="px-6 py-4">
                                    {el.category}
                                </td>
                                <td className="px-6 py-4">
                                    {el.date}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        el.status == 'Active' ? <div className='px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center'>Active</div> :
                                            <div className='px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center'>Inactive</div>
                                    }
                                </td>
                                <td className="px-0 py-4 text-2xl text-gray-400">
                                    <div className='flex items-center justify-end'>
                                        <button className='mr-2' onClick={() => handleViewGiveaway(el)}><AiFillEye /></button>
                                        <button className='mr-2' onClick={() => handleEditGiveaway(el)}><AiFillEdit /></button>
                                        <button className='mr-2' onClick={() => handleDelete(el)}><MdDelete /></button>
                                    </div>
                                </td>

                            </tr>
                        )
                    })
                }

            </tbody>
            {
                editGive && <EditRaffle faq={selectedRaffle} onClose={handleClose} />
            }

            {
                viewGive && <ViewRaffle faq={selectedRaffle} onClose={handleClose} />
            }
        </table>
    )
}

export default TableLight