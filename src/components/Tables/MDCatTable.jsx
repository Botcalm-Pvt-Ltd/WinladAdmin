import React, { useState } from "react";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import UserDetailViewComponent from "../UserDetailView/UserDetailViewComponent";
import ViewMasterDataCategory from "../../MasterDataComponent/ViewMasterDataCategory";
import EditMasterDataCategory from "../../MasterDataComponent/EditMasterDataCategory";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const MDCatTable = ({ cols, data }) => {
  const [categoryViewModal, setCategoryViewModal] = useState(null);
  const [categoryEditModal, setCategoryEditModal] = useState(null);

  const openViewModal = (category) => {
    setCategoryViewModal(category);
  };
  const openEditModal = (category) => {
    setCategoryEditModal(category);
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
            {cols.map((mcat, key) => {
              return (
                <th scope="col" className="px-6 py-3" key={key}>
                  {mcat}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((mcat, key) => {
            return (
              <tr
                className="odd:bg-white  border-b dark:border-gray-300"
                key={key}
              >
                <td className="px-6 py-4">{mcat.id}</td>
                <td className="px-6 py-4">{mcat.name}</td>
                <td className="px-6 py-4">{mcat.description}</td>

                <td className="px-6 py-4 text-2xl text-gray-400">
                  <button className="mr-2" onClick={() => openViewModal(mcat)}>
                    <AiFillEye />
                  </button>
                  <button className="mr-2" onClick={() => openEditModal(mcat)}>
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
      {categoryViewModal && (
        <ViewMasterDataCategory
          category={categoryViewModal}
          onClose={() => setCategoryViewModal(null)}
        />
      )}
      {categoryEditModal && (
        <EditMasterDataCategory
          category={categoryEditModal}
          onClose={() => setCategoryEditModal(null)}
        />
      )}
    </div>
  );
};

export default MDCatTable;
