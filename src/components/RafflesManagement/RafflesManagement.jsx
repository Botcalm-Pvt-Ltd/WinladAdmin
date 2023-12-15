import React, { useState } from "react";
import Pagination from "../Pagination";
import SideNavComponent from "../SideNavComponent/SideNavComponent";
import TopBar from "../TopBar";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import RMBlackSquare from "./RMBlackSquare";
import RMBackground from "../../assets/RafflesManagement/RMBackground.jpg";
import AddRaffles from "./AddRaffles";
import Rafflestable from "./Rafflestable";

const RafflesManagement = () => {
    const [showModal, setShowModal] = useState(false);
  const tableCols = [
    "Giveaway ID",
    "Giveaway Name",
    "Starting time",
    "End time",
    "Giveaway Category",
    "Schedule Date",
    "Status",
    "Action",
  ];
  const tableData = [
    {
      id: "01",
      name: "Loto Max1",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Active",
    },
    {
      id: "02",
      name: "Loto Max2",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Active",
    },
    {
      id: "03",
      name: "Loto Max3",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "04",
      name: "Loto Max4",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "05",
      name: "Loto Max5",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
    {
      id: "06",
      name: "Loto Max6",
      startingtime: "2023-01-01T00:00:00Z",
      endtime: "2023-01-01T00:00:00Z",
      category: "Luxury Range",
      date: "2023-Sep-20",
      status: "Inactive",
    },
  ];
  return (

      <>
        <RMBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="text-xl px-8 max-xl:pt-20 pt-1 max-md:pt-20">
          Giveaways Management
          </h1>
        </div>
        <div className="flex items-start justify-between gap-3 max-lg:mt-4 mt-8 flex-col-reverse lg:flex-row relative max-xl:top-5">
          <div className=" w-full px-3 lg-px-0">
            <div className="flex items-center justify-between pl-4">
              <div className=" bg-gray-200 rounded-full w-3/12  md:w-4/12 px-4 relative flex items-center justify-between">
                <div htmlFor="search" className="text-2xl mt-0">
                  <PiMagnifyingGlassThin />
                </div>
                <input
                  type="search"
                  name="search"
                  placeholder="Search For Anything"
                  className="bg-inherit px-4 py-2 w-full border-none  outline-none"
                />
              </div>
              <div className="flex gap-5">
                <button className="bg-gray-200 px-3 py-2 rounded-lg" onClick={() => setShowModal(true)}>
                  Add Giveaway
                </button>
                <select
                  name="filter"
                  className="bg-gray-200 px-3 py-2 rounded-lg"
                >
                  <option value="">Filter</option>
                </select>
              </div>
            </div>

            <div className="relative overflow-x-auto  sm:rounded-lg py-4 z-10">
              <Rafflestable cols={tableCols} data={tableData} />
            </div>
            <div className="w-full relative bottom-1">
              <Pagination />
            </div>
            {/* <div className="absolute top-[450px] right-[150px] max-lg:top-96 max-lg:right-0">
              <img src={RMBackground} alt="" className="opacity-20 -z-10" />
            </div> */}
          </div>
        </div>
        {showModal ? <AddRaffles onClose={() => setShowModal(false)}/> : null}
      </>
      
  );
};

export default RafflesManagement;
