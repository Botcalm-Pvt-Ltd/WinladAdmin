import React, { useState } from "react";
import TableLight from "../Tables/TableLight";
import Pagination from "../Pagination";
import SideNavComponent from "../SideNavComponent/SideNavComponent";
import TopBar from "../TopBar";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import RMBlackSquare from "../RafflesManagement/RMBlackSquare";
import RMBackground from "../../assets/RafflesManagement/RMBackground.jpg";
import AddFAQ from "./AddFAQ";
import FAQtable from "./FAQtable";

const FAQ = () => {
  const [showModal, setShowModal] = useState(false);
  const tableCols = ["FAQ Id", "FAQ Description", "FAQ Answer", "Action"];
  const tableData = [
    {
      id: "01",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
    {
      id: "02",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
    {
      id: "03",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
    {
      id: "04",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
    {
      id: "05",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
    {
      id: "06",
      Description: "Lorem ipsum dolor sit amet consectetur. ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibend",
    },
  ];
  return (

      <>
        <div>
          <h1 className="text-xl px-3 mb-5">
            FAQ
          </h1>
        </div>
        <div className="flex items-start justify-between gap-3 flex-col-reverse lg:flex-row relative max-xl:top-32 top-0 mt-8 mb-24 bg-white pt-5">
          <div className=" w-full px-3 lg-px-0">
            <div className="flex items-center justify-between pl-4">
              <div className="bg-gray-200 rounded-full w-3/12  md:w-4/12 px-4 relative flex items-center justify-between">
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
                <button
                  className="bg-gray-200 px-3 py-2 rounded-lg"
                  onClick={() => setShowModal(true)}
                >
                  Add New
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
              <FAQtable cols={tableCols} data={tableData} />
            </div>
            <div className="w-full relative my-10 xl:my-5">
              <Pagination />
            </div>
            {/* <div className="absolute top-[250px] max-xl:top-[450px] right-[150px] max-lg:top-96 max-lg:right-0">
              <img src={RMBackground} alt="" className="opacity-20 -z-10" />
            </div> */}
          </div>
        </div>
        {showModal ? <AddFAQ onClose={() => setShowModal(false)} /> : null}
      </>
     

  );
};

export default FAQ;
