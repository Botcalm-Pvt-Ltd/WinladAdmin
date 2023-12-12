import React from "react";
// import Inputsearch from '../components/Inputsearch'
// import RoundIcon from '../components/roundIcon'
// import UserIcon from '../components/userIcon'
import GreenCard from "../components/GreenCard";
import { AiFillEdit, AiFillEye, AiOutlineDown } from "react-icons/ai";
import PieChart from "../components/Charts/PieChart";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import BarChart from "../components/Charts/BarChart";
import Pagination from "../components/Pagination";
import TableLight from "../components/Tables/TableLight";
import TopBar from "../components/TopBar";
import SideNavComponent from "../components/SideNavComponent/SideNavComponent";
import BackSquare from "../components/BackgroundBlackSquare/BackSquare";
import ColEightTable from "../components/Tables/ColEightTable";
import { RiDonutChartLine } from "react-icons/ri";
import { MdSsidChart } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { FiPieChart } from "react-icons/fi";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const AdminDashboard = () => {
  const table2Cols = [
    "User Id",
    "Name",
    "Verification Level",
    "User Role",
    "User Email",
    "Passport",
    "Status",
    "Action",
  ];
  const table1cOls = [
    "Raffle ID",
    "Raffles Name",
    "Raffle Category",
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
      <div className="p-5 pt-3 pb-20 bg-black rounded-b-3xl relative">
        <p className="text-white text-xl mb-1 ">Giveaways Dashboard</p>

        <TopBar />

        <div className="flex items-start flex-wrap justify-end gap-3 w-full  mt-5 px-3 lg:px-0 ">
          <GreenCard
            text={"100/150"}
            subtext={"Average User Convergentratio"}
          />

          <div className="bg-[#FFFFFF] p-2 rounded-md flex flex-col relative border-red-600">
            <div className="flex items-center justify-between p-2 gap-10 cursor-pointer" onClick={()=>(setopenCaleder((pre)=>!pre))}>
              <p>Calendar</p>
              {openCalender ? (<MdOutlineKeyboardArrowUp size={25} />):( <MdKeyboardArrowDown size={25} />)}
             
            </div>
            <div className="absolute right-0 top-[70px] z-20">
              {openCalender &&  <Calendar  />}
            </div>
          </div>
        </div>

        <div className=" mt-5 w-full">
          <div className="flex lg:items-center flex-wrap flex-row justify-end gap-3 w-full px-3 lg:px-0 ">
            <GreenCard
              icon={<RiDonutChartLine size={40} />}
              text={"50"}
              subtext={"Total User Count"}
            />
            <GreenCard
              icon={<MdSsidChart size={40} />}
              text={"40/50"}
              subtext={"Average User Convergentratio"}
            />
            <GreenCard
              icon={<IoBarChartOutline size={30} />}
              text={"20"}
              subtext={"Unverify User Convergentratio"}
            />
            <GreenCard
              icon={<FiBarChart2 size={40} />}
              text={"100/50"}
              subtext={"Average User Convergentratio"}
            />
            <GreenCard
              icon={<FiPieChart size={40} />}
              text={"100"}
              subtext={"Active Lottery"}
            />
          </div>
        </div>
      </div>

      <div className=" w-full px-3 lg:px-0 mt-10">
        <div className="flex items-center justify-between">
          <div className=" bg-[#FFFFFF]  border-2 border-[#000000] rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-[#FFFFFF]  border-2 border-[#000000]"
            />
          </div>
          <select
            name="filter"
            className="bg-[#FFFFFF]  border-2 border-[#000000] px-3 py-2 rounded-lg"
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

      <div className="relative   sm:rounded-lg py-0 my-6 lg:my-14 px-3 pt-8">
        <div className="flex items-center justify-between">
          <div className=" bg-[#FFFFFF]  border-2 border-[#000000] rounded-full w-3/12  md:w-90 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-[#FFFFFF]  border-2 border-[#000000]"
            />
          </div>
          <select
            name="filter"
            className="bg-[#FFFFFF]  border-2 border-[#000000] px-3 py-2 rounded-lg"
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
