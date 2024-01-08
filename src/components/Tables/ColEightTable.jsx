import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
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
    <div className="px-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-600 capitalize bg-white border-b dark:border-gray-300">
          <tr>
            {cols.map((el, key) => {
              return (
                <th
                  scope="col"
                  className={`px-6 py-3 max-xl:px-4 whitespace-nowrap 4xl:text-2xl ${
                    key == 8 ? "text-right max-xl:text-center 4xl:text-center" : "",
                    key == 7 ? "max-xl:text-center" : ""
                  }`}
                  key={key}
                >
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
                className="bg-white  border-b dark:border-gray-300 hover:bg-[#F2F8FF] 4xl:text-2xl"
                key={key}
              >
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.id}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.name}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.role}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.UType}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.NIC}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.MNumber}</td>
                <td className="px-6 py-4 max-xl:px-4 whitespace-nowrap">{el.SPlan}</td>
                <td className="px-6 py-4 max-xl:px-4 pl-0">
                  {el.status == "Active" ? (
                    <div className="px-3 py-2 rounded-full bg-green-100/60 w-24 text-center flex justify-center items-center gap-2 4xl:w-40">
                      <div className="w-2 h-2 4xl:w-4 4xl:h-4 bg-green-500 rounded-full"></div>
                      <h1 className="text-green-700">Active</h1>
                    </div>
                  ) : (
                    <div className="px-3 py-2 rounded-full bg-red-100/60 w-24 text-center flex justify-center items-center gap-2 4xl:w-40">
                      <div className="w-2 h-2 4xl:w-4 4xl:h-4 bg-red-500 rounded-full"></div>
                      <h1 className="text-red-700">Inactive</h1>
                    </div>
                  )}
                </td>
                <td className=" py-4 text-2xl text-gray-400">
                  <div className="flex items-center justify-start gap-1 pr-5">
                    <button className="mr-2" onClick={() => openViewModal(el)}>
                      <AiFillEye className="4xl:w-10 4xl:h-10"/>
                    </button>
                    <button className="mr-2" onClick={() => openEditModal(el)}>
                      <FaRegEdit className="w-5 4xl:w-8 4xl:h-8"/>
                    </button>
                    <button onClick={handleDelete}>
                      <RiDeleteBin6Line className="w-5 4xl:w-8 4xl:h-8"/>
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
