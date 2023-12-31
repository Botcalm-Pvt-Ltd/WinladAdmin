import React from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../components/Pagination";
import TableLight from "../components/Tables/TableLight";
import ColEightTable from "../components/Tables/ColEightTable";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ViewBox from "../components/AdminDashboard/ViewBox";

const AdminDashboard = () => {
  const table2Cols = [
    "User Id",
    "Name",
    "Verification Level",
    "User Role",
    "User Email",
    "NIC",
    "Status",
    "Action",
  ];
  const table1cOls = [
    "Giveaway ID",
    "Giveaway Name",
    "Giveaway Category",
    "Schedule Date",
    "Status",
    "Action",
  ];

  const table1Data = [
    {
      id: "01",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Active",
    },
    {
      id: "02",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "02",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "02",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "02",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "02",
      name: "Loto Max",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
  ];
  const table2Data = [
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Inactive",
    },
    {
      id: "01",
      name: "Loto Max",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Inactive",
    },
  ];

  const [openCalender, setopenCaleder] = useState(false)
  return (
    <>
      <div className="px-3 mb-5 rounded-b-3xl relative">
        <p className="text-black text-xl mb-1 ">Giveaways Dashboard</p>
      </div>
      <div className="flex items-center justify-between my-5 px-3 xl:gap-3 max-w-[1800px] flex-wrap">
        <ViewBox color="blue" label="Active Users"/>
        <ViewBox color="green" label="Total Users"/>
        <ViewBox color="pink" label="Average Users"/>
        <ViewBox color="orange" label="Active Giveaways"/>
      </div>

      <div className=" w-full px-3 lg:px-5 bg-white pt-10">
        <div className="flex items-center justify-between">
          <div className=" bg-gray-200 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-gray-200"
            />
          </div>
          <select
            name="filter"
            className="bg-gray-200 px-3 py-2 rounded-lg"
          >
            <option value="">Filter</option>
          </select>
        </div>

        <div className="relative overflow-x-auto  sm:rounded-lg py-4">
          <TableLight cols={table1cOls} data={table1Data} />
        </div>
        <div className="w-full">
          <Pagination />
        </div>
      </div>

      <div className="relative sm:rounded-lg py-0 px-0 lg:px-5 bg-white pt-8">
        <div className="flex items-center justify-between">
          <div className=" bg-gray-200 rounded-full w-3/12  md:w-90 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-gray-200"
            />
          </div>
          <select
            name="filter"
            className="bg-gray-200 px-3 py-2 rounded-lg"
          >
            <option value="">Filter</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <ColEightTable cols={table2Cols} data={table2Data} />
        </div>

        {/* <TableLight cols={table2Cols} data={table2Data} /> */}
        <div className="w-full mt-3">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
