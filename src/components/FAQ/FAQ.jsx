import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import TopBar from "../TopBar";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import RMBlackSquare from "../RafflesManagement/RMBlackSquare";
import AddFAQ from "./AddFAQ";
import FAQtable from "./FAQtable";
import { getApi } from "../../Api/Faq/getApi";
import { useDispatch, useSelector } from "react-redux";

const FAQ = () => {
  const dispatch = useDispatch();
  const faq = useSelector((state) => state.faq.faq);
  const ActiveFAQs = faq.filter((item) => item.view === 1);

  useEffect(() => {
    getApi({ dispatch });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const tableCols = ["FAQ Id", "FAQ Description", "FAQ Answer", "Action"];
  return (
    <>
      <RMBlackSquare />
      <div className="lg:p-5 p-1">
        <TopBar />
      </div>
      <div>
        <h1 className="text-xl px-8 relative bottom-5 max-xl:top-20">FAQ</h1>
      </div>
      <div className="flex items-start justify-between gap-3 flex-col-reverse lg:flex-row relative max-xl:top-32 top-0 mt-8 mb-24">
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
            <FAQtable cols={tableCols} data={ActiveFAQs} />
          </div>
          <div className="w-full relative my-10 xl:my-5">
            <Pagination />
          </div>
        </div>
      </div>
      {showModal ? <AddFAQ onClose={() => setShowModal(false)} /> : null}
    </>
  );
};

export default FAQ;
