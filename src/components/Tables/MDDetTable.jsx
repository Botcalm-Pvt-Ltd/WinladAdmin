import React, { useState } from "react";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import UserDetailViewComponent from "../UserDetailView/UserDetailViewComponent";
import ViewMasterDataDetails from "../../MasterDataComponent/ViewMasterDataDetails";
import EditMasterDataDetails from "../../MasterDataComponent/EditMasterDataDetails";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const MDDetTable = ({ cols, data }) => {
  const [DetailsViewModal, setDetailsViewModal] = useState(null);
  const [DetailsEditModal, setDetailsEditModal] = useState(null);

  const openViewModal = (details) => {
    setDetailsViewModal(details);
  };
  const openEditModal = (details) => {
    setDetailsEditModal(details);
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
            {cols.map((mdel, key) => {
              return (
                <th scope="col" className="px-6 py-3" key={key}>
                  {mdel}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((mdel, key) => {
            return (
              <tr
                className="odd:bg-white  border-b dark:border-gray-300"
                key={key}
              >
                <td className="px-6 py-4">{mdel.id}</td>
                <td className="px-6 py-4">{mdel.categoryName}</td>
                <td className="px-6 py-4">{mdel.name}</td>
                <td className="px-6 py-4">{mdel.description}</td>
                <td className="px-6 py-4">{mdel.SortID}</td>
                <td className="px-6 py-4">
                  {mdel.status == "Active" ? (
                    <div className="px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center">
                      Active
                    </div>
                  ) : (
                    <div className="px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center">
                      Inactive
                    </div>
                  )}
                </td>
                <td className="text-xl text-gray-400">
                  <button className="mr-2" onClick={() => openViewModal(mdel)}>
                    <AiFillEye />
                  </button>
                  <button className="mr-2" onClick={() => openEditModal(mdel)}>
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
      {DetailsViewModal && (
        <ViewMasterDataDetails
          details={DetailsViewModal}
          onClose={() => setDetailsViewModal(null)}
        />
      )}
      {DetailsEditModal && (
        <EditMasterDataDetails
          details={DetailsEditModal}
          onClose={() => setDetailsEditModal(null)}
        />
      )}
    </div>
  );
};

export default MDDetTable;
