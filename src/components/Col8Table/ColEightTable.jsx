import React from "react";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import UserDetailViewComponent from "../UserDetailView/UserDetailViewComponent";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const ColEightTable = ({ cols, data }) => {

      const handleDelete = () =>
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to delete this entry?",
          icon: "warning",
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal(
              "Deleted!",
              "Your entry has been deleted!",
              "success"
            );
          }
        });

  return (
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
              className="odd:bg-white  border-b dark:border-gray-300"
              key={key}
            >
              <td className="px-6 py-4">{el.id}</td>
              <td className="px-6 py-4">{el.name}</td>
              <td className="px-6 py-4">{el.vlevel}</td>
              <td className="px-6 py-4">{el.role}</td>
              <td className="px-6 py-4">{el.email}</td>
              <td className="px-6 py-4">{el.passport}</td>
              <td className="px-6 py-4">
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
              <td className="px-6 py-4 text-2xl text-gray-400">
                <button className="mr-2">
                  <AiFillEye />
                </button>
                <UserDetailViewComponent />
                <button onClick={handleDelete}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ColEightTable;
