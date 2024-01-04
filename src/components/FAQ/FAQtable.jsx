import React, { useState } from "react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import ViewFAQ from "./ViewFAQ";
import EditFAQ from "./EditFAQ";
import { MdDelete } from "react-icons/md";

const FAQtable = ({ cols, data }) => {
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
            {cols.map((el, key) => {
              return (
                <th scope="col" className="px-6 py-3" key={key}>
                  {el}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((el, key) => {
            return (
              <tr
                className="border-b dark:border-gray-300"
                key={key}
              >
                <td className="px-6 py-4">{el._id}</td>
                <td className="px-6 py-4">{el.q}</td>
                <td className="px-6 py-4">{el.a}</td>
                <td className="px-6 py-4 text-2xl text-gray-400 flex">
                  <button className="mr-2" onClick={() => openViewModal(el)}>
                    <AiFillEye />
                  </button>
                  <button className="mr-2" onClick={() => openEditModal(el)}>
                    <AiFillEdit />
                  </button>

                  <button onClick={handleDelete}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {viewFAQ && (
        <ViewFAQ faq={viewFAQ} onClose={() => setViewFAQ(null)} />
      )}
      {editFAQ && (
        <EditFAQ faq={editFAQ} onClose={() => setEditFAQ(null)} />
      )}
    </div>
  );
};

export default FAQtable;
