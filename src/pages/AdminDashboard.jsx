import React from 'react'
import Inputsearch from '../components/Inputsearch'
import RoundIcon from '../components/roundIcon'
import UserIcon from '../components/userIcon'
import GreenCard from '../components/GreenCard'
import { AiFillEdit, AiFillEye, AiOutlineDown } from 'react-icons/ai'
import PieChart from '../components/Charts/PieChart'
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import BarChart from '../components/Charts/BarChart'
import Pagination from '../components/Pagination'
import TableLight from '../components/Tables/TableLight'
import TopBar from '../components/TopBar'
import SideNavComponent from '../components/SideNavComponent/SideNavComponent'
import BackSquare from '../components/BackgroundBlackSquare/BackSquare'
import ColEightTable from '../components/Tables/ColEightTable'


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
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between">
      <SideNavComponent />
      <div className="w-full lg:w-full bg-white overflow-hidden py-3">
        <BackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
          <div className="flex items-center justify-end gap-3 w-full z-10 mt-5 px-3 lg:px-0">
            <GreenCard text={100} subtext={"Active Lottery"} />
            <GreenCard
              text={"100/150"}
              subtext={"Average User Convergentratio"}
            />
            <div className="bg-[#FFFFFF] p-2 rounded-md flex items-center justify-between w-1/6 z-10">
              <input
                type="date"
                name="calendar"
                placeholder="Calendar"
                className="bg-transparent outline-none w-full"
              />
              <AiOutlineDown />
            </div>
          </div>
          <div className="chart-container flex items-center flex-col md:flex-row justify-between mt-4">
            <div className="lg:w-2/5 w-full z-10 leading-none">
              <PieChart
                labels={["Luxury Range", "Mid Range", "Low Range"]}
                heading={<h1>Lottery Configurations</h1>}
              />
            </div>
            <div className="lg:w-2/5 w-full z-10 leading-none">
              <PieChart
                labels={[
                  "Bornze Pack",
                  "Silver Pack",
                  "Gold Pack",
                  "Platinum Pack",
                  "Titanium Pack",
                ]}
                chartSeries={[51, 2, 11, 18, 27]}
                labelCOlor="#fff"
                heading={
                  <h1 className="text-white">Subscription Distributions</h1>
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 mt-8 flex-col lg:flex-row px-3 lg:px-0">
          <div className="lg:w-8/12 w-full">
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
          <div className="bg-black p-3 lg:w-4/12 w-full rounded-tl-3xl rounded-bl-3xl lg:rounded-tr-none lg:rounded-br-none rounded-tr-3xl rounded-br-3xl">
            <BarChart />
          </div>
        </div>
        <div className="my-5 lg:my-12 ">
          <div className=" flex items-center gap-3 justify-center">
            <GreenCard text={"100"} subtext={"Total UserCount"} />
            <GreenCard
              text={"100/150"}
              subtext={"Average User Convergentratio"}
            />
            <GreenCard text={"20"} subtext={"Unverify User Convergentratio"} />
          </div>
        </div>
        <div className="relative   sm:rounded-lg py-0 my-6 lg:my-14 px-3">
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
          <div className="w-full">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
