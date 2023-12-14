import React, { useState } from 'react'
import { AiFillEdit, AiFillEye, AiOutlineDown } from 'react-icons/ai'
import ViewRaffles from './ViewRaffles';
import EditRaffles from './EditRaffles';
import swal from "sweetalert";
import { MdDelete } from 'react-icons/md';

const Rafflestable = ({ cols, data }) => {
    const [viewFAQ, setViewFAQ] = useState(null);
    const [editFAQ, setEditFAQ] = useState(null);

    const openViewModal = (faq) => {
        setViewFAQ(faq);
    };
    const openEditModal = (faq) => {
        setEditFAQ(faq);
    };
    const handleDelete = () =>
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
    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-7=600 capitalize bg-white">
                    <tr>
                        {
                            cols.map((el, key) => {
                                return (
                                    <th scope="col" className="px-6 py-3" key={key}>
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
                                <tr className="border-b dark:border-gray-300" key={key}>


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
                                    <td className="px-6 py-4 text-2xl text-gray-400 flex text-right items-end">
                                        <button className="mr-2" onClick={() => openViewModal(el)}><AiFillEye /></button>
                                        <button className="mr-2" onClick={() => openEditModal(el)}><AiFillEdit /></button>

                                        <button onClick={handleDelete}>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            {viewFAQ && (
                <ViewRaffles faq={viewFAQ} onClose={() => setViewFAQ(null)} />
            )}
            {editFAQ && (
                <EditRaffles faq={editFAQ} onClose={() => setEditFAQ(null)} />
            )}
        </div>
    )
}

export default Rafflestable