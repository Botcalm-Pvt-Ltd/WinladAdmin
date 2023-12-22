import React, { useState } from "react";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import UserDetailViewComponent from "../UserDetailView/UserDetailViewComponent";
import EditUser from "../../components/UserManagementComponent/EditUser";
import ViewUser from "../../components/UserManagementComponent/ViewUser";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const ColEightTable = ({ cols, data }) => {
  const [userViewModal, setUserViewModal] = useState(null);
  const [useryEditModal, setUserEditModal] = useState(null);

  const openViewModal = (user) => {
    setUserViewModal(user);
  };
  const openEditModal = (user) => {
    setUserEditModal(user);
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
                <th scope="col" className={`px-6 py-3 max-xl:px-3 ${key == 7 ? 'text-right' : ''}`} key={key}>
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
                className="odd:bg-white  border-b dark:border-gray-300"
                key={key}
              >
                <td className="px-6 py-4 max-xl:px-3">{el.id}</td>
                <td className="px-6 py-4 max-xl:px-3">{el.name}</td>
                <td className="px-6 py-4 max-xl:px-3">{el.vlevel}</td>
                <td className="px-6 py-4 max-xl:px-3">{el.role}</td>
                <td className="px-6 py-4 max-xl:px-3">{el.email}</td>
                <td className="px-6 py-4 max-xl:px-3">{el.passport}</td>
                <td className="px-6 py-4 max-xl:px-3">
                  {el.status == "Active" ? (
                    <div className="px-3 py-2 rounded-md border border-1 border-green-400 bg-green-200 w-20 text-center">
                      Active
                    </div>
                  ) : (
                    <div className="px-3 py-2 rounded-md border border-1 border-red-400 bg-red-200 w-20 text-center">
                      Inactive
                    </div>
                  )}
                </td>
                <td className=" py-4 text-2xl text-gray-400">
                  <div className="flex items-center justify-end">
                    <button className="mr-2" onClick={() => openViewModal(el)}>
                      <AiFillEye />
                    </button>
                    <button className="mr-2" onClick={() => openEditModal(el)}>
                      <AiFillEdit />
                    </button>
                    <button onClick={handleDelete}>
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {userViewModal && (
        <ViewUser user={userViewModal} onClose={() => setUserViewModal(null)} />
      )}
      {useryEditModal && (
        <EditUser
          user={useryEditModal}
          onClose={() => setUserEditModal(null)}
        />
      )}
    </div>
  );
};

export default ColEightTable;
