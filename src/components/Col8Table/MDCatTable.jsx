import React from "react";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import UserDetailViewComponent from "../UserDetailView/UserDetailViewComponent";

const MDCatTable = ({ cols, data }) => {
  return (
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
                <button className="mr-2">
                  <AiFillEye />
                </button>
                <UserDetailViewComponent />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MDCatTable;
